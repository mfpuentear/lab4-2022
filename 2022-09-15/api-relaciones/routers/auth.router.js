import express from "express";
import bcrypt from "bcryptjs";
import { Cuenta } from "../models/index.js";

export const authRouter = express.Router();

// POST /registrar
authRouter.post("/registrar", async (req, res) => {
  const passwordHashed = await bcrypt.hash(req.body.password, 8);
  const nuevaCuenta = await Cuenta.create({
    usuario: req.body.usuario,
    password: passwordHashed,
    personaId: 1,
  });
  res.send("Cuenta creada con exito");
});

// POST /login
authRouter.post("/login", async (req, res) => {
  const cuenta = await Cuenta.findOne({ where: { usuario: req.body.usuario } });
  if (!cuenta) {
    res.send("Usuario o contraseña inválida");
    return;
  }
  const passwordCompared = await bcrypt.compare(
    req.body.password,
    cuenta.password
  );
  if (!passwordCompared) {
    res.send("Usuario o contraseña inválida");
    return;
  }
  res.send("ok");
});
