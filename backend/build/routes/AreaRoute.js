"use strict";
exports.__esModule = true;
exports.areaRoutes = void 0;
var express_1 = require("express");
var ensureAuthenticateUser_1 = require("../middlewares/ensureAuthenticateUser");
var CreateAreaVideoController_1 = require("../Modules/Areas/create_area/area_video/CreateAreaVideo/CreateAreaVideoController");
var DeleteAreaVideoController_1 = require("../Modules/Areas/create_area/area_video/DeleteAreaVideo/DeleteAreaVideoController");
var ReadAreaVideoController_1 = require("../Modules/Areas/create_area/area_video/ReadAreaVideo/ReadAreaVideoController");
var UpdateAreaVideoController_1 = require("../Modules/Areas/create_area/area_video/UpdateArea/UpdateAreaVideoController");
var CreateAreaController_1 = require("../modules/Areas/create_area/CreateAreaController");
var DeleteAreaByIDController_1 = require("../modules/Areas/DeleteArea/ByID/DeleteAreaByIDController");
var ReadAreaController_1 = require("../modules/Areas/ReadArea/ByID/ReadAreaController");
var ReadAllAreasController_1 = require("../modules/Areas/ReadArea/ReadAllAreasController");
var UpdateAreaController_1 = require("../Modules/Areas/UpdateArea/UpdateAreaController");
var areaRoutes = (0, express_1.Router)();
exports.areaRoutes = areaRoutes;
var deleteAreaByIDController = new DeleteAreaByIDController_1.DeleteAreaByIDController();
var createAreaController = new CreateAreaController_1.CreateAreaController();
var updateAreaController = new UpdateAreaController_1.UpdateAreaController();
var readAreaController = new ReadAreaController_1.ReadAreaController();
var readAllAreasController = new ReadAllAreasController_1.ReadAllAreasController();
var createAreaVideoController = new CreateAreaVideoController_1.CreateAreaVideoController();
var readAreaVideoById = new ReadAreaVideoController_1.ReadAreaVideoController();
var deleteAreaVideoByID = new DeleteAreaVideoController_1.DeleteAreaVideoByIDController();
var updateAreaVideo = new UpdateAreaVideoController_1.UpdateAreaVideoController();
areaRoutes.get('/', readAllAreasController.handle);
areaRoutes.get('/:id', readAreaController.handle);
areaRoutes.post('/', ensureAuthenticateUser_1.ensureAuthenticateUser, createAreaController.handle);
areaRoutes.put('/:id', ensureAuthenticateUser_1.ensureAuthenticateUser, updateAreaController.handle);
areaRoutes["delete"]('/:id', ensureAuthenticateUser_1.ensureAuthenticateUser, deleteAreaByIDController.handle);
areaRoutes.get('/video/:id', readAreaVideoById.handle);
areaRoutes.post('/video', ensureAuthenticateUser_1.ensureAuthenticateUser, createAreaVideoController.handle);
areaRoutes.put('/video/:id', ensureAuthenticateUser_1.ensureAuthenticateUser, updateAreaVideo.handle);
areaRoutes["delete"]('/video/:id', ensureAuthenticateUser_1.ensureAuthenticateUser, deleteAreaVideoByID.handle);
//# sourceMappingURL=AreaRoute.js.map