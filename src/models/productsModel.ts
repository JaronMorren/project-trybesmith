import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { CreatedProduct, NewProduct, ListProducts } from '../interfaces/productsInterface';
import connection from './connection';

const listProducts = async (): Promise<ListProducts[]> => {
  const [list] = await connection.execute<ListProducts[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return list;
};
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
  createProduct, listProducts,
};