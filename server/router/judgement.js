import express from "express";
import { judgeHIT, judgePIR } from "../data/log.js";

const route = express.Router();

route.get("/", async (req, res) => {
  const statusHIT = await judgeHIT();
  const statusPIR = await judgePIR();
  const allStatus = [statusHIT, statusPIR];
  let max = 0;
  for (const status of allStatus) {
    if (max < status) {
      max = status;
    }
  }
  console.log(`max : ${allStatus}`);
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
