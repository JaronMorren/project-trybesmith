import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/usersInterface';

const createUser = async (user: User) => {
  const { username, vocation, level, password } = user;
  const createdUser = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return createdUser;
};
export default { createUser };