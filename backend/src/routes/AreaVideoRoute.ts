import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateAreaVideoController } from "../modules/area_video/create/CreateAreaVideoController";

const areaVideoRoute = Router();

const createAreaVideoController = new CreateAreaVideoController();

areaVideoRoute.post('/', ensureAuthenticateUser, createAreaVideoController.handle);


export {areaVideoRoute};