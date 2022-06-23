import express from "express";
import { getLocation } from "../data/log.js";

const route = express.Router();

route.get("/", async (req, res) => {
  const { room, time } = await getLocation();
  console.log(room);
  const curtime = new Date();
  console.log(curtime, time);
  console.log(curtime - time);
  const timediff = parseInt((curtime - time) / 1000 / 60);
  res.status(200).json({ room, time: timediff });
});

export default route;
