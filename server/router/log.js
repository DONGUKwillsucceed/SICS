import express from "express";
import { getLogs } from "../data/log.js";

const route = express.Router();

route.get("/", async (req, res) => {
  const data = await getLogs();
  console.log(data);
  res.status(200).json(data);
});

export default route;
