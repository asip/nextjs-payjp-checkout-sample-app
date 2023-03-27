import React from 'react'
import { useRouter } from 'next/router';
// import Link from 'next/link'
import PayjpCheckoutClass from '@/components/payjp_checkout_class'

export default function Index() {
  const payjpCheckoutProps = {
    dataKey: '',
    dataText: 'クレジットカードで支払う',
    dataPartial: 'true',
    onCreatedHandler: onCreated,
    onFailedHandler: onFailed,
  }

  const router = useRouter();

  async function toFunc(){
    await router.push('/func')
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
      <div>class component</div>
      <div><a href="" onClick={toFunc}>function component</a></div>
      {/*<div><Link href="/func">function component</Link></div>*/}
      <PayjpCheckoutClass {...payjpCheckoutProps} />
    </div>
  )
}