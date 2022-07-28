"use strict";
exports.__esModule = true;
exports.areaVideoRoute = void 0;
var express_1 = require("express");
var ensureAuthenticateUser_1 = require("../middlewares/ensureAuthenticateUser");
var CreateAreaVideoController_1 = require("../Modules/area_video/create/CreateAreaVideoController");
var areaVideoRoute = (0, express_1.Router)();
exports.areaVideoRoute = areaVideoRoute;
var createAreaVideoController = new CreateAreaVideoController_1.CreateAreaVideoController();
areaVideoRoute.post('/', ensureAuthenticateUser_1.ensureAuthenticateUser, createAreaVideoController.handle);
//# sourceMappingURL=AreaVideoRoute.js.map