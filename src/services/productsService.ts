import { NewProduct, CreatedProduct, ListProducts } from '../interfaces/productsInterface';
import productsModel from '../models/productsModel';

const listProducts = async (): Promise<ListProducts[]> => {
  const list = await productsModel.listProducts();
  return list;
};

const createProduct = async (product: NewProduct): Promise<CreatedProduct> => {
  const newProduct = await productsModel.createProduct(product);
  return newProduct;
};

export default { createProduct, listProducts };