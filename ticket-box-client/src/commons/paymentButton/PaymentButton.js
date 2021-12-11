import React from "react";
import './PaymentButton.css';

const PaymentButton = (props) => {
    const {isSelected} = props;

    if (isSelected) {
        return (
            <button className="payment-button primary">Thanh toán</button>
        )
    } else {
        return (
            <button className="payment-button disabled" disabled>Thanh toán</button>
        )
    }
}

export default PaymentButton;