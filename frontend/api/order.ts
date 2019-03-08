import axios from 'axios';
import { Order } from '../interfaces';
import { BACKEND_URL } from './../config';

export class OrderAPI {
  static opts = {
    withCredentials: true
  };

  static async getAll() {
    const orders: Order[] = (await axios.get(
      `${BACKEND_URL}/orders`,
      this.opts
    )).data;

    return orders;
  }

  static async accept(orderId: number) {
    const orders = await axios.put(
      `${BACKEND_URL}/orders/accept/${orderId}`,
      {},
      this.opts
    );

    return orders;
  }

  static async decline(orderId: number) {
    const response = await axios.put(
      `${BACKEND_URL}/orders/decline/${orderId}`,
      {},
      this.opts
    );

    return response;
  }

  static async finish(orderId: number) {
    const response = await axios.put(
      `${BACKEND_URL}/orders/finish/${orderId}`,
      {},
      this.opts
    );

    return response;
  }
}