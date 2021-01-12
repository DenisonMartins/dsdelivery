import axios from "axios";

const API_URL = 'https://dslivery.herokuapp.com';

export function fetchOrders() {
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(idOrder: number) {
    return axios.put(`${API_URL}/orders/${idOrder}/delivered`);
}
