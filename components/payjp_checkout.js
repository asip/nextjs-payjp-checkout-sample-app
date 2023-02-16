import React from 'react';

class PayjpCheckout extends React.Component {
    constructor(props) {
        super(props);
        this.payjpCheckoutRef = null;
    }

    static defaultProps = {
        className: 'payjp-button',
        dataKey: '',
        onCreatedHandler: () => {},
        onFailedHandler: () => {},
    };

    /* UNSAFE_componentWillMount() {
    } */

    componentDidMount() {
        this.windowAlertBackUp = window.alert;
        window.reactPayjpCheckoutOnCreated = this.onCreated;
        window.reactPayjpCheckoutOnFailed = this.onFailed;
        window.reactPayjpCheckoutContext = this;
        // カード情報が不正のときに window.alert が payjp の checkout から呼ばれるため
        window.alert = () => {};

        this.script = document.createElement('script');
        this.script.src = 'https://checkout.pay.jp/';
        this.script.classList.add(this.props.className);
        this.script.dataset['key'] = this.props.dataKey;
        this.props.dataPartial && (this.script.dataset['partial'] = this.props.dataPartial);
        this.props.dataText && (this.script.dataset['text'] = this.props.dataText);
        this.props.dataSubmitText && (this.script.dataset['submitText'] = this.props.dataSubmitText);
        this.props.dataTokenName && (this.script.dataset['tokenName'] = this.props.dataTokenName);
        this.props.dataPreviousToken && (this.script.dataset['previousToken'] = this.props.dataPreviousToken);
        this.props.dataLang && (this.script.dataset['lang'] = this.props.dataLang);
        this.script.dataset['onCreated'] = 'reactPayjpCheckoutOnCreated';
        this.script.dataset['onFailed'] = 'reactPayjpCheckoutOnFailed';
        this.props.dataNamePlaceholder && (this.script.dataset['namePlaceholder'] = this.props.dataNamePlaceholder);
        this.payjpCheckoutRef = document.getElementById('payjpCheckout');
        this.payjpCheckoutRef && this.payjpCheckoutRef.appendChild(this.script);
    }

    componentWillUnmount() {
        // すでに https://checkout.pay.jp/ の checkout.js が実行済みで、script タグを削除しているだけ
        this.payjpCheckoutRef.removeChild(this.script);
        window.reactPayjpCheckoutOnCreated = null;
        window.reactPayjpCheckoutOnFailed = null;
        window.reactPayjpCheckoutContext = null;
        window.alert = this.windowAlertBackUp;
        window.PayjpCheckout = null;
    }

    shouldComponentUpdate() {
        return false;
    }

    onCreated(response) {
        const payload = { token: response.id }
        window.reactPayjpCheckoutContext.props.onCreatedHandler(payload);
    }

    onFailed(statusCode, errorResponse) {
        const payload = { message: errorResponse.message }
        window.reactPayjpCheckoutContext.props.onFailedHandler(payload);
    }

    render() {
        return <div id="payjpCheckout"></div>;
    }
}

export default PayjpCheckout;