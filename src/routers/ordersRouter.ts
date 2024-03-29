import express from 'express';
import ordersController from '../controllers/ordersController';

const ordersRouter = express.Router();

ordersRouter.get('/', ordersController.getOrders);

export default ordersRouter;