import { Order } from '../interfaces/ordersinterface';
import orderModel from '../models/ordersModel';

const getOrders = async (): Promise<Order[]> => {
  const orders = await orderModel.getOrders();
  return orders;
};

export default { getOrders };