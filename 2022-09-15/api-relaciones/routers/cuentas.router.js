import express from "express";
import { Cuenta } from "../models/cuenta.model.js";
import { Persona } from "../models/persona.model.js";

export const cuentasRouter = express.Router();

// GET /
cuentasRouter.get("/", async (req, res) => {
  const cuentas = await Cuenta.findAll({ include: Persona });
  res.send(cuentas);
});
