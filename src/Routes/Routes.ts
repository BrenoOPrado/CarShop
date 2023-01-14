import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateById(),
);

// --------------------------------------------------------------------------------

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcyclesController(req, res, next).create(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcyclesController(req, res, next).getAll(),
);

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).getById(),
);

routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).updateById(),
);

export default routes;