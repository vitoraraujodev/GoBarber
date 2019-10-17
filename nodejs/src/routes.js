import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async ( req, res ) => {
  const user = await User.create({
    name: 'Vitor Araujo',
    email: 'vitoraraujo7@hotmail.com',
    password_hash: '111111'
  })
  return res.json(user);
});

export default routes;
