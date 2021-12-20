import React from "react";
import './PaymentButton.css';

const PaymentButton = (props) => {
    const {isSelected, onClick} = props;
    const handleOnclick = () => {
        if (onClick) {
            onClick();
        }
    }

    if (isSelected) {
        return (
            <button className="payment-button primary" onClick={() => handleOnclick()} >Thanh toán</button>
        )
    } else {
        return (
            <button className="payment-button disabled" disabled>Thanh toán</button>
        )
    }
}

export default PaymentButton;