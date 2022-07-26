import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateFormController } from "../Modules/Forms/create_forms/CreateFormController";
import { DeleteFormController } from "../Modules/Forms/delete_form/DeleteFormController";
import { ReadAllFormsController } from "../Modules/Forms/ReadForms/AllForms/ReadAllFormsController";
import { ReadFormByIDController } from "../Modules/Forms/ReadForms/ByID/GetFormByIDController";
import { UpdateFormController } from "../Modules/Forms/UpdateForm/UpdateFormController";

const formRoute = Router();

const createFormController = new CreateFormController();
const updateFormController = new UpdateFormController();
const deleteFormController = new DeleteFormController();
const readFormByIdController = new ReadFormByIDController();
const readAllFormsController = new ReadAllFormsController();

formRoute.post('/', ensureAuthenticateUser, createFormController.handle);
formRoute.put('/:id', ensureAuthenticateUser, updateFormController.handle);
formRoute.delete('/:id', ensureAuthenticateUser, deleteFormController.handle);
formRoute.get('/:id', readFormByIdController.handle);
formRoute.get('/', readAllFormsController.handle);

export {formRoute};