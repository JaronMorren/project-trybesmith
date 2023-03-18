import { Request, Response } from 'express';
import usersService from '../services/usersService';
import HttpException from './httpException';

const createUser = async (request: Request, response: Response) => {
  try {
    const token = await usersService.createUser(request.body);
    return response.status(201).json({ token });
  } catch (error) {
    const errorMessage = error as Error;
    throw new HttpException(500, errorMessage.message);
  }
};
export default {
  createUser,
};