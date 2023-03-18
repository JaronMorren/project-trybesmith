import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/ordersinterface';
import connection from './connection';

const getOrders = async ():Promise<Order[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & Order[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders
    INNER JOIN Trybesmith.products
    ON orders.id = products.order_id GROUP BY orders.id`,
  );

  return orders;
};

export default { getOrders }; 
// https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg
// https://www.tutorialspoint.com/mysql/mysql_aggregate_functions_json_arraygg.htm