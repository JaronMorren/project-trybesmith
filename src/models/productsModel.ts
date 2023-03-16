import { ResultSetHeader } from 'mysql2';
import { CreatedProduct, NewProduct } from '../interfaces/productsInterface';
import connection from './connection';

const createProduct = async (product: NewProduct): Promise<CreatedProduct> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  const newProduct = { id: insertId, ...product };
  return newProduct;
};

export default { 
  createProduct,
};