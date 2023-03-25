import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import PayjpCheckoutFunc from "@/components/payjp_checkout_func";

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
      <div><a href="" onClick={toTop}>class component</a></div>
      {/*<div><Link href="/" >class component</Link></div>*/}
      <PayjpCheckoutFunc {...payjpCheckoutProps} />
    </div>
  )
}