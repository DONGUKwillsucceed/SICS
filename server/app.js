import express from "express";
import http from "http";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import logRouter from "./router/log.js";
import locationRouter from "./router/location.js";
import judgementRouter from "./router/judgement.js";
import { makeLogs } from "./data/log.js";
import { arduinoConnector } from "./service/arduino.js";
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(morgan());
app.use(helmet());
app.use(cors());

app.use("/logs", logRouter);
app.use("/location", locationRouter);
app.use("/status", judgementRouter);

app.use("/", (req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  res.sendStatus(500);
});

server.listen(8080, () => {
  arduinoConnector();
  console.log("active!!");
});
