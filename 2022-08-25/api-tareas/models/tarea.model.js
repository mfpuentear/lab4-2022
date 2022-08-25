import { db } from "../db.js";
import { DataTypes } from "sequelize";

// Definir modelo de tarea
export const Tarea = db.define(
  "Tarea",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: { field: "descripcion", type: DataTypes.STRING(100) },
    lista: { field: "lista", type: DataTypes.BOOLEAN },
  },
  { tableName: "tareas", timestamps: false }
);
