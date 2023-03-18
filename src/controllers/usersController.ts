import { Request, Response } from 'express';
import usersService from '../services/usersService';
import HttpException from './httpException';

const createUser = async (request: Request, response: Response) => {
  try {
    const newUser = await usersService.createUser(request.body);
    return response.status(201).json({ newUser });
  } catch (error) {
    const errorMessage = error as Error;
    throw new HttpException(500, errorMessage.message);
  }
};
export default {
  createUser,
};