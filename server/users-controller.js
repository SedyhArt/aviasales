import dataBase from './dataBase/db';

class UsersController {
  createUser = async (req, res) => {
    try {
      const { email, shared } = req.body;
      const checkingUserAlreadyExist = await dataBase.query('SELECT * FROM users WHERE email = $1', [email]);
      if (!checkingUserAlreadyExist.rows.length) {
        const newUser = await dataBase.query('INSERT INTO users (email, shared) VALUES ($1, $2) RETURNING *', [email, Number(shared)]);
        newUser.rows[0].shared = Boolean(+newUser.rows[0].shared);
        res.json(newUser.rows[0]);
      } else {
        res.json(checkingUserAlreadyExist.rows[0]);
      }
    } catch (e) {
      console.log(e);
      res.status(500);
      res.end('Ошибка');
    }
  };

  updateUsers = async (req, res) => {
    try {
      const { id, email, shared } = req.body;
      const updatedUser = await dataBase.query('UPDATE users SET email = $1, shared = $2 WHERE id = $3 RETURNING id', [email, Number(shared), id]);
      if (updatedUser.rows[0]) {
        console.log(updatedUser.rows[0]);
        res.json(updatedUser.rows[0]);
      }
      res.statusCode = 404;
      res.end('Не найдено');
    } catch (e) {
      console.log(e);
      res.statusCode(500);
      res.end('Ошибка');
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.body;
      const deletedUser = await dataBase.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);

      if (deletedUser.rows[0]) {
        console.log(deletedUser.rows);
        res.json(deletedUser.rows[0]);
      }
      res.statusCode = 404;
      res.end('Такого пользователя не существует');
    } catch (e) {
      console.log(e);
      res.statusCode(500);
      res.end('Ошибка');
    }
  };
}

export default UsersController;
