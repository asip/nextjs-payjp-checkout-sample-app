import React from 'react'
import PayjpCheckoutFunc from "@/components/payjp_checkout_func";
import { useRouter } from 'next/router';

export default function Call() {
  const payjpCheckoutProps = {
    dataKey: '',
    dataText: 'クレジットカードで支払う',
    dataPartial: 'true',
    onCreatedHandler: onCreated,
    onFailedHandler: onFailed,
  }

  const router = useRouter();

  async function toTop(){
    await router.push('/')
  }

  function onCreated(payload: any) {
    //console.log(payload)
    console.log(payload.token)
  }

  function onFailed(payload: any) {
    console.log(payload.message)
  }

  return (
    <div className="payjpButtonArea">
      <div>function component</div>
      <a href="" onClick={toTop}>class component</a>
      <PayjpCheckoutFunc {...payjpCheckoutProps} />
    </div>
  )
}