import { Request, Response } from 'express';
import ordersService from '../services/ordersService';
import HttpException from './httpException';

const getOrders = async (_request: Request, response: Response) => {
  try {
    const orders = await ordersService.getOrders();
    return response.status(200).json(orders);
  } catch (error) {
    const errorMessage = error as Error;
    throw new HttpException(500, errorMessage.message);
  }
};

export default {
  getOrders,
};