import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/', productsController.createProduct);

export default productsRouter;