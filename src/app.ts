import express, { Application, Request, Response } from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(
  cors({
    origin: ["http://localhost:3001", "http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Welcome To Shakib Al Furqan's API Server",
  });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
