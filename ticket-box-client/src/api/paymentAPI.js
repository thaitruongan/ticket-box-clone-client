import axiosClient from "./axiosClient";

const PaymentAPI = {
    createPayment: (token, ticketList, totalPrice, infor) => {
        const url = 'payment';
        return axiosClient.post(url, {
            "ticketsId": ticketList,
            "totalPrice": `${totalPrice}`,
            "email": `${infor.email}`,
            "phoneNumber": `${infor.phoneNumber}`
        }, {
            headers: {
                'tbtoken': token
            }
        })
    },
}

export default PaymentAPI