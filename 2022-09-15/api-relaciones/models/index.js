import { Persona } from "./persona.model.js";
import { Cuenta } from "./cuenta.model.js";
import { Tarea } from "./tarea.model.js";
import { Materia } from "./materia.model.js";
import { PersonasMaterias } from "./personas-materias.model.js";

// Relaciones de cuentas
Persona.hasOne(Cuenta);
Cuenta.belongsTo(Persona);

// Relaciones de tareas
Persona.hasMany(Tarea);
Tarea.belongsTo(Persona);

// Relaciones de personas_materias
Persona.belongsToMany(Materia, { through: PersonasMaterias });
Materia.belongsToMany(Persona, { through: PersonasMaterias });

export { Persona, Cuenta, Tarea, Materia, PersonasMaterias };
