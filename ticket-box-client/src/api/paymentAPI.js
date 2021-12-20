import axiosClient from "./axiosClient";

const PaymentAPI = {
    SignInByPhone: (id, ticketList, totalPrice) => {
        const url = 'payment';
        return axiosClient.post(url, {
            "userId": id,
            "tickets": ticketList,
            "totalPrice": totalPrice
        })
    },
}

export default PaymentAPI