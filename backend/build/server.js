"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var UserRoute_1 = require("./routes/UserRoute");
var AreaRoute_1 = require("./routes/AreaRoute");
var FormRoute_1 = require("./routes/FormRoute");
var VideoRoute_1 = require("./routes/VideoRoute");
var AreaVideoRoute_1 = require("./routes/AreaVideoRoute");
var app = (0, express_1["default"])();
var port = 3000;
app.use(express_1["default"].json());
app.use('/area', AreaRoute_1.areaRoutes);
app.use('/user', UserRoute_1.userRoute);
app.use('/forms', FormRoute_1.formRoute);
app.use('/video', VideoRoute_1.videoRoute);
app.use('/area_video', AreaVideoRoute_1.areaVideoRoute);
app.use(function (err, req, res, next) {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});
app.listen(port, function () { return console.log('Servidor rodando na porta: ' + port); });
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
//# sourceMappingURL=server.js.map