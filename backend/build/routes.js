"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("./modules/users/createUser/CreateUserController");
var AuthenticateUserController_1 = require("./services/AuthenticateUserController");
var routes = (0, express_1.Router)();
exports.routes = routes;
var createUserController = new CreateUserController_1.CreateUserController();
var authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
routes.post('/user/', createUserController.handle);
routes.post('/authenticate', authenticateUserController.handle);
//# sourceMappingURL=routes.js.map