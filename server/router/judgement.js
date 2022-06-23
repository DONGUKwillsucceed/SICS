import express from "express";
import {
  judgeFlame,
  judgeFSR,
  judgeMg,
  judgePIR,
  judgeRFID,
  judgeTcrt,
} from "../data/log.js";

const route = express.Router();

route.get("/", async (req, res) => {
  const statusMG = await judgeMg();
  const statusPIR = await judgePIR();
  const statusTrct = await judgeTcrt();
  const statusRFID = await judgeRFID();
  const statusFSR = await judgeFSR();
  const statusFlame = await judgeFlame();
  const allStatus = [
    statusMG,
    statusPIR,
    statusRFID,
    statusTrct,
    statusFSR,
    statusFlame,
  ];
  let max = 0;
  for (const status of allStatus) {
    if (max < status) {
      max = status;
    }
  }

  console.log(allStatus);
  if (max === 0) {
    res.status(200).json({ status: "정상" });
  } else if (max === 1) {
    res.status(200).json({ status: "관심 1" });
  } else if (max === 2) {
    res.status(200).json({ status: "관심2" });
  } else {
    res.status(200).json({ status: "위험" });
  }
});

export default route;
