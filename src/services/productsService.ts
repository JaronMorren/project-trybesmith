import { NewProduct, CreatedProduct } from '../interfaces/productsInterface';
import productsModel from '../models/productsModel';

const createProduct = async (product: NewProduct): Promise<CreatedProduct> => {
  const newProduct = await productsModel.createProduct(product);
  return newProduct;
};

export default { createProduct };