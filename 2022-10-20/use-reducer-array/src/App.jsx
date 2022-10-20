import { useReducer } from "react";

const tareasReducer = (state, action) => {
  if (action.tipo === "agregar") {
    return [...state, action.nuevaTarea];
  }
  if (action.tipo === "quitar") {
    return state.filter((tarea) => tarea.id !== action.id);
  }
  if (action.tipo === "completar") {
    return state.map((tarea) => {
      if (tarea.id === action.id) {
        tarea.lista = true;
      }
      return tarea;
    });
  }
};

function App() {
  const [tareas, tareasDispatch] = useReducer(tareasReducer, [
    { id: 1, descripcion: "tarea 1", lista: false },
    { id: 2, descripcion: "tarea 2", lista: false },
    { id: 3, descripcion: "tarea 3", lista: true },
  ]);

  return (
    <>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.id}, {tarea.descripcion}, {tarea.lista.toString()}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          tareasDispatch({
            tipo: "agregar",
            nuevaTarea: {
              id: Date.now(),
              descripcion: "Nueva Tarea",
              lista: false,
            },
          })
        }
      >
        agregar
      </button>
      <button onClick={() => tareasDispatch({ tipo: "completar", id: 2 })}>
        Completar
      </button>
      <button onClick={() => tareasDispatch({ tipo: "quitar", id: 3 })}>
        quitar
      </button>
    </>
  );
}

export default App;
