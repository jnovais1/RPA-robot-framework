import express, { NextFunction, Request, response, Response } from "express";
import "express-async-errors";
import {userRoute} from "./routes/UserRoute"
import { areaRoutes } from "./routes/AreaRoute";
import { formRoute } from "./routes/FormRoute";
import { videoRoute } from "./routes/VideoRoute";
import { areaVideoRoute } from "./routes/AreaVideoRoute";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/area', areaRoutes);
app.use('/user', userRoute);
app.use('/forms', formRoute);
app.use('/video', videoRoute);
app.use('/area_video', areaVideoRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            message: err.message,
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});
app.listen(port, () => console.log('Servidor rodando na porta: ' + port));

function normalizePort(val: string) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

