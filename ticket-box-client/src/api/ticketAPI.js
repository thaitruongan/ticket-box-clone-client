import axiosClient from "./axiosClient";

const TicketAPI = {
    handleTimeOut: (token) => {
        const url = 'ticket/change-ticket-status';
        return axiosClient.get(url, {
            headers: {
                'tbtoken': token
            }
        })
    },
}

export default TicketAPI