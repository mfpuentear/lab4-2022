import { db } from "../db.js";
import { DataTypes } from "sequelize";
import { Persona } from "./persona.model.js";

// Definir modelo de cuenta
export const Cuenta = db.define(
  "cuenta",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario: { field: "usuario", type: DataTypes.STRING(25) },
    password: { field: "password", type: DataTypes.STRING(150) },
    personaId: {
      field: "persona_id",
      type: DataTypes.INTEGER,
      references: { model: Persona, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
  },
  {
    name: { singular: "cuenta", plural: "cuentas" },
    tableName: "cuentas",
    timestamps: false,
  }
);

Persona.hasOne(Cuenta);
Cuenta.belongsTo(Persona);
