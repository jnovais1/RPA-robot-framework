import express, { NextFunction, Request, response, Response } from "express";
import "express-async-errors";
import { userRoute } from "./routes/UserRoute"
import { areaRoutes } from "./routes/AreaRoute";
import { formRoute } from "./routes/FormRoute";
import { videoRoute } from "./routes/VideoRoute";
import { areaVideoRoutes } from "./routes/AreaVideoRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json"

const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-control-allow-origin", "*")
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

app.use(cors({ credentials: true, origin: "*" }));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use('/area', areaRoutes);
app.use('/user', userRoute);
app.use('/forms', formRoute);
app.use('/video', videoRoute);
app.use('/areavideo', areaVideoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message,
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});
app.get('/', (req: Request, res: Response) => {
    res.send('API Marca Ambiental')
})
app.listen(port, () => console.log(`Server running on port: ${port}`));
