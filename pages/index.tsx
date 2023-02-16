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

    function onCreated(payload: any){}
    function onFailed(payload: any){}

    return (
        <div className="payjpButtonArea">
            <PayjpCheckout {...payjpCheckoutProps} />
        </div>
    )
}