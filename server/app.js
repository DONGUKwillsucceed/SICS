import express from "express";
import http from "http";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import logRouter from "./router/log.js";
import locationRouter from "./router/location.js";
import judgementRouter from "./router/judgement.js";
import { ReadlineParser, SerialPort } from "serialport";
import { makeLogs } from "./data/log.js";
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(morgan());
app.use(helmet());
app.use(cors());

app.use("/logs", logRouter);
app.use("/location", locationRouter);
app.use("/status", judgementRouter);

const port = new SerialPort({ path: "COM3", baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

let preData = "";
let curData = "";

port.on("open", () => {
  console.log("open!!");
  parser.on("data", (data) => {
    curData = data;

    if (preData !== curData) {
      preData = curData;
      let splitedData = curData.split(" , ");
      const time = new Date();
      makeLogs({
        sensor: splitedData[0],
        value: splitedData[1],
        time,
      });
      const log = {
        context: `sensor : ${splitedData[0]}, value : ${splitedData[1]}`,
        time: new Date(),
      };
      console.log(log);
    }
  });
});

app.use("/", (req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  res.sendStatus(500);
});

server.listen(8080, () => {
  console.log("active!!");
});
