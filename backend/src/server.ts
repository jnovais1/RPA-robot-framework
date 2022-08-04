import express, { NextFunction, Request, response, Response } from "express";
import "express-async-errors";
import {userRoute} from "./routes/UserRoute"
import { areaRoutes } from "./routes/AreaRoute";
import { formRoute } from "./routes/FormRoute";
import { videoRoute } from "./routes/VideoRoute";

const app = express();
const cors = require("cors");
const port = 3001;

app.use((req, res, next) => {
    res.header("Access-control-allow-origin", 'http://localhost:3000')
    res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,PUT,DELETE,PATCH,OPTIONS"
    )
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    next()
})

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

app.use(express.json());
app.use('/area', areaRoutes);
app.use('/user', userRoute);
app.use('/forms', formRoute);
app.use('/video', videoRoute);

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

