import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/usersInterface';
import usersModel from '../models/usersModel';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '30min',
};

const generateToken = (payload: User) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const createUser = async (user: User): Promise<string> => {
  await usersModel.createUser(user);
  
  const token = generateToken(user);
  return token;
};

export default {
  createUser,
};

// https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/8.3/src/services/user.service.ts