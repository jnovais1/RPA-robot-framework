import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateAreaController } from "../modules/Areas/create_area/CreateAreaController";
import { DeleteAreaByIDController } from "../modules/Areas/DeleteArea/ByID/DeleteAreaByIDController";
import { ReadAreaController } from "../modules/Areas/ReadArea/ByID/ReadAreaController";
import { ReadAllAreasController } from "../modules/Areas/ReadArea/ReadAllAreasController";
import { UpdateAreaController } from "../modules/Areas/update_area/UpdateAreaController";

const areaRoutes = Router();

const deleteAreaByIDController = new DeleteAreaByIDController();
const createAreaController = new CreateAreaController(); 
const updateAreaController = new UpdateAreaController();
const readAreaController = new ReadAreaController();
const readAllAreasController = new ReadAllAreasController();

areaRoutes.get('/', readAllAreasController.handle);
areaRoutes.get('/:id', readAreaController.handle);
areaRoutes.post('/', ensureAuthenticateUser, createAreaController.handle);
areaRoutes.put('/:id', ensureAuthenticateUser, updateAreaController.handle);
areaRoutes.delete('/:id', ensureAuthenticateUser, deleteAreaByIDController.handle);

export {areaRoutes};