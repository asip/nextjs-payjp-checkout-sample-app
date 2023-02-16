import React from 'react'
import PayjpCheckout from '@/components/payjp_checkout'

export default function Call(props) {
    const payjpCheckoutProps = {
        dataKey: 'pk_test_8b4b4c47d9cc18327a0c1869',
        dataText: 'クレジットカードで支払う',
        dataPartial: 'true',
        onCreatedHandler: onCreated,
        onFailedHandler: onFailed,
    }

    function onCreated(){}
    function onFailed(){}

    return (
        <div className="payjpButtonArea">
            <PayjpCheckout {...payjpCheckoutProps} />
        </div>
    )
}