import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateAreaController } from "../Modules/Areas/create_area/CreateAreaController";
import { DeleteAreaByIDController } from "../Modules/Areas/DeleteArea/ByID/DeleteAreaByIDController";
import { ReadAreaController } from "../Modules/Areas/ReadArea/ByID/ReadAreaController";
import { ReadAllAreasController } from "../Modules/Areas/ReadArea/ReadAllAreasController";
import { UpdateAreaController } from "../Modules/Areas/update_area/UpdateAreaController";

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