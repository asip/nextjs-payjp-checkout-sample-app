import { useEffect } from "react";

function PayjpCheckoutFunc({
   className = 'payjp-button',
   dataKey = undefined,
   dataPartial = undefined,
   dataText = undefined,
   dataSubmitText = undefined,
   dataTokenName = undefined,
   dataPreviousToken = undefined,
   dataLang = undefined,
   dataNamePlaceholder = undefined,
   dataTenant = undefined,
   onCreatedHandler = () => undefined,
   onFailedHandler = () => undefined
  }) {
  const onCreated = (response) => {
    const payload = {token: response.id}
    onCreatedHandler(payload);
  }

  const onFailed = (statusCode, errorResponse) => {
    const payload = {message: errorResponse.message}
    onFailedHandler(payload);
  }

  useEffect(() => {
    // const windowAlertBackUp = window.alert;
    window.payjpCheckoutOnCreated = onCreated;
    window.payjpCheckoutOnFailed = onFailed;
    /* // カード情報が不正のときに window.alert が payjp の checkout から呼ばれるため
    window.alert = () => {
    }; */

    //console.log(props);

    const script = document.createElement('script');
    script.src = 'https://checkout.pay.jp/';
    script.classList.add(className);
    script.dataset['key'] = dataKey;
    dataPartial ? (script.dataset['partial'] = dataPartial) : (script.dataset['partial'] = 'false')
    dataText && (script.dataset['text'] = dataText);
    dataSubmitText && (script.dataset['submitText'] = dataSubmitText);
    dataTokenName && (script.dataset['tokenName'] = dataTokenName);
    dataPreviousToken && (script.dataset['previousToken'] = dataPreviousToken);
    dataLang && (script.dataset['lang'] = dataLang);
    script.dataset['onCreated'] = 'payjpCheckoutOnCreated';
    script.dataset['onFailed'] = 'payjpCheckoutOnFailed';
    dataNamePlaceholder && (script.dataset['namePlaceholder'] = dataNamePlaceholder);
    dataTenant && (script.dataset['tenant'] = dataTenant);

    //console.log(script);
    let payjpCheckoutElement = document.getElementById('payjpCheckout');
    payjpCheckoutElement?.appendChild(script);

    return () => {
      // すでに https://checkout.pay.jp/ の checkout.js が実行済みで、script タグを削除しているだけ
      payjpCheckoutElement?.removeChild(script);
      window.payjpCheckoutOnCreated = null;
      window.payjpCheckoutOnFailed = null;
      // window.alert = windowAlertBackUp;
      window.PayjpCheckout = null;
    }
  })

  return (<div id="payjpCheckout"></div>);
}

export default PayjpCheckoutFunc;
