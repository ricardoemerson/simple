import { Router } from 'express';
import HelloController from './app/controllers/HelloController';

const routes = new Router();

routes.get('/hello', (req, res) => res.json({ hello: 'world' }));

routes.get('/users', HelloController.index);
routes.get('/users/:id', HelloController.show);
routes.get('/complex', HelloController.complex);

export default routes;
