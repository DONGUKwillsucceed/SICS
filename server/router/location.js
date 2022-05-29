import express from "express";
import { getLocation } from "../data/log.js";

const route = express.Router();

route.get("/", async (req, res) => {
  const room = await getLocation();
  console.log(room);
  const time = 3;
  res.status(200).json({ room, time });
});

export default route;
