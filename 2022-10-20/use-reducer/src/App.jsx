import { useReducer } from "react";
import { useState } from "react";

const cuentaReducer = (state, action) => {
  if (action === "incrementar") {
    return state + 1;
  }
  if (action === "decrementar") {
    return state - 1;
  }
};

function App() {
  const [cuenta, setCuenta] = useState(0);
  const [cuentaState, cuentaDispatch] = useReducer(cuentaReducer, 0);

  const incrementar = () => setCuenta(cuenta + 1);
  const decrementar = () => setCuenta(cuenta - 1);

  return (
    <>
      <p>{cuenta}</p>
      <button onClick={() => incrementar()}>Incrementar</button>
      <button onClick={() => decrementar()}>Decrementar</button>

      <p>{cuentaState}</p>
      <button onClick={() => cuentaDispatch("incrementar")}>incrementar</button>
      <button onClick={() => cuentaDispatch("decrementar")}>decrementar</button>
    </>
  );
}

export default App;
