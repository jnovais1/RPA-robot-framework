import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateUserController } from "../modules/Users/CreateUser/CreateUserController";
import { DeleteUserByIDController } from "../modules/Users/DeleteUser/DeleteUserByIDController";
import { ReadUsersByIdController } from "../modules/Users/ReadUsers/ByID/ReadUsersByIDController";
import { ReadAllUsers } from "../modules/Users/ReadUsers/ReadAllUsers";
import { ReadAllUsersController } from "../modules/Users/ReadUsers/ReadAllUsersController";
import { UpdateUserController } from "../modules/Users/UpdateUser/UpdateUserController";
import { AuthenticateUserController } from "../services/AuthenticateUserController";


const userRoute = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const deleteUserByIDController = new DeleteUserByIDController();
const updateUserByID = new UpdateUserController();
const readlAllUsers = new ReadAllUsersController();
const readUserById = new ReadUsersByIdController();

userRoute.get('/', ensureAuthenticateUser, readlAllUsers.handle);
userRoute.get('/:id', ensureAuthenticateUser, readUserById.handle);
userRoute.post('/', createUserController.handle);
userRoute.post('/authenticate', authenticateUserController.handle);
userRoute.put('/:id', ensureAuthenticateUser, updateUserByID.handle);
userRoute.delete('/:id', ensureAuthenticateUser, deleteUserByIDController.handle);

export {userRoute};