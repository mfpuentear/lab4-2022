import express from "express";
import { Persona, Cuenta } from "../models/index.js";

export const cuentasRouter = express.Router();

// GET /
cuentasRouter.get("/", async (req, res) => {
  const cuentas = await Cuenta.findAll({ include: Persona });
  res.send(cuentas);
});
