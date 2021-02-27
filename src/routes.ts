import { Router } from 'express';
import { SurveysController } from './controller/SurveysController';
import { UserController } from './controller/UserController';
import { SurveysRepository } from './repositories/SurveysRepository';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);


export { router }