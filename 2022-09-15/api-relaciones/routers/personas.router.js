import express from "express";
import { Cuenta } from "../models/cuenta.model.js";
import { Persona } from "../models/persona.model.js";
import { Tarea } from "../models/tarea.model.js";

export const personasRouter = express.Router();

// GET /
personasRouter.get("/", async (req, res) => {
  const personas = await Persona.findAll({ include: [Cuenta, Tarea] });
  res.send(personas);
});
