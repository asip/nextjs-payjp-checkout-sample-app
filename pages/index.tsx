import React from 'react'
import PayjpCheckout from '@/components/payjp_checkout'

export default function Call() {
  const payjpCheckoutProps = {
    dataKey: '',
    dataText: 'クレジットカードで支払う',
    dataPartial: 'true',
    onCreatedHandler: onCreated,
    onFailedHandler: onFailed,
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
      <PayjpCheckout {...payjpCheckoutProps} />
    </div>
  )
}