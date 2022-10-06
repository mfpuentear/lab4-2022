import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bcrypt from "bcryptjs";
import { Cuenta } from "../models/index.js";
import jwt from "jsonwebtoken";
import passport from "passport";

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

  const payload = {
    usuario: cuenta.usuario,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });
  res.json({
    usuario: cuenta.usuario,
    token: token,
  });
});

authRouter.get(
  "/perfil",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
