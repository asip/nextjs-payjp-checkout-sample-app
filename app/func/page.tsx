'use client';

import React from 'react'
// import { useRouter } from 'next/navigation';
import Link from 'next/link'
import PayjpCheckoutFunc from "@/components/payjp_checkout_func_ts";

export default function Func() {
  const payjpCheckoutProps = {
    dataKey: process.env.NEXT_PUBLIC_PAYJP_PUBLIC_KEY,
    dataText: 'クレジットカードで支払う',
    dataPartial: 'true',
    onCreatedHandler: onCreated,
    onFailedHandler: onFailed,
  }

  /* const router = useRouter();
  function toTop(){
    router.push('/')
  } */

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
      {/* <div><a href="" onClick={toTop}>class component</a></div> */}
      <div><Link href="/" >class component</Link></div>
      <PayjpCheckoutFunc {...payjpCheckoutProps} />
    </div>
  )
}