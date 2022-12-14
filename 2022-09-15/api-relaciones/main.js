import express from "express";
import { db } from "./db.js";
import { authRouter } from "./routers/auth.router.js";
import { cuentasRouter } from "./routers/cuentas.router.js";
import { personasRouter } from "./routers/personas.router.js";
import { tareasRouter } from "./routers/tareas.router.js";

// Configurar Express
const app = express();
app.use(express.json());

// Routers
app.use("/tareas", tareasRouter);
app.use("/personas", personasRouter);
app.use("/cuentas", cuentasRouter);
app.use("/auth", authRouter);

// Mensaje de bienvenida
app.get("/", (req, res) => {
  res.send("API de tareas");
});

// Ejecutar API
app.listen(4000, async () => {
  try {
    await db.authenticate();
    console.log("Conexion a base de datos exitosa");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
  console.log("API en funcionamiento");
});
