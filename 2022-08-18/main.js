import express from "express";

const app = express();

// Arreglo de tareas
let tareas = [
  { id: 1, descripcion: "tarea 1", lista: true },
  { id: 2, descripcion: "tarea 2", lista: false },
];

app.use(express.json());

// Mensaje de bienvenida
app.get("/", (req, res) => {
  res.send("API de tareas");
});

// GET /tareas
app.get("/tareas", (req, res) => {
  res.send(tareas);
});

// GET /tareas/:id
app.get("/tareas/:id", (req, res) => {
  const tarea = tareas.find((tarea) => tarea.id == req.params.id);
  res.send(tarea ?? {});
});

// POST /tareas
app.post("/tareas", (req, res) => {
  const maxId = tareas.reduce(
    (prev, actual) => (actual.id > prev.id ? actual : prev),
    tareas[0]
  ).id;

  const nuevaTarea = {
    id: maxId + 1,
    descripcion: req.body.descripcion,
    lista: req.body.lista,
  };

  tareas.push(nuevaTarea);

  res.send(nuevaTarea);
});

// PUT /tareas/:id
app.put("/tareas/:id", (req, res) => {
  tareas.map((tarea) => {
    if (tarea.id == req.params.id) {
      tarea.descripcion = req.body.descripcion;
      tarea.lista = req.body.lista;
    }
  });
  res.send("ok");
});

// DELETE /tareas/:id
app.delete("/tareas/:id", (req, res) => {
  tareas = tareas.filter((tarea) => tarea.id != req.params.id);
  res.send("ok");
});

// Ejecutar API
app.listen(3000, () => {
  console.log("API en funcionamiento");
});
