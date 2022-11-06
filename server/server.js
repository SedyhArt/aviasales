import express from 'express';
import UsersController from './users-controller';

const serverPort = process.env.PORT || 3000;
const app = express();
const usersController = new UsersController();

app.use(express.json());

app.post('/', usersController.createUser);
app.put('/', usersController.updateUsers);
app.delete('/', usersController.deleteUser);
app.listen(serverPort, () => {
  console.log('Started');
});
