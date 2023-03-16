import { Request, Response } from 'express';
import productsService from '../services/productsService';
import HttpException from './httpException';

const listProducts = async (_request: Request, response: Response) => {
  try {
    const list = await productsService.listProducts();
    return response.status(200).json(list);
  } catch (error) {
    const errorMessage = error as Error;
    throw new HttpException(500, errorMessage.message);
  }
};
const createProduct = async (request: Request, response: Response) => {
  try {
    const newProduct = await productsService.createProduct(request.body);
    response.status(201).json(newProduct);
  } catch (error) {
    const errorMessage = error as Error;
    throw new HttpException(500, errorMessage.message);
  }
};

export default { createProduct, listProducts };