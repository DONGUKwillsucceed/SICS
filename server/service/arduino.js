import { ReadlineParser, SerialPort } from "serialport";
import { makeLogs } from "../data/log.js";

const port = new SerialPort({ path: "COM5", baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

let preData = "";
let curData = "";
let mg = 0;
let pir1 = 0;
let pir2 = 0;
let pir3 = 0;
let pir4 = 0;
let tcrt = 0;
let rfid = 0;
let fsb = 0;
let flame = 0;

export async function arduinoConnector() {
  console.log("arduino connected!");

  port.on("open", () => {
    console.log("open!!");
    parser.on("data", (data) => {
      curData = data;
      let splitedData = curData.split(" , ");
      if (splitedData[0] === "PIR1" && splitedData[1] != pir1) {
        pir1 = splitedData[1];
        preData = splitedData;
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
      if (splitedData[0] === "PIR2" && splitedData[1] != pir2) {
        pir2 = splitedData[1];
        preData = splitedData;
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
      if (splitedData[0] === "PIR3" && splitedData[1] != pir3) {
        pir3 = splitedData[1];
        preData = splitedData;
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
      if (splitedData[0] === "PIR4" && splitedData[1] != pir4) {
        pir4 = splitedData[1];
        preData = splitedData;
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
      if (splitedData[0] === "TCRT" && splitedData[1] != tcrt) {
        tcrt = splitedData[1];
        preData = splitedData;
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
      if (splitedData[0] === "FSR" && splitedData[1] != fsb) {
        fsb = splitedData[1];
        preData = splitedData;
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
      if (splitedData[0] === "Flame" && splitedData[1] != flame) {
        flame = splitedData[1];
        preData = splitedData;
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
      if (splitedData[0] === "RFID" && splitedData[1] != rfid) {
        rfid = splitedData[1];
        preData = splitedData;
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
      if (splitedData[0] === "MG" && splitedData[1] != mg) {
        mg = splitedData[1];
        preData = splitedData;
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
}
