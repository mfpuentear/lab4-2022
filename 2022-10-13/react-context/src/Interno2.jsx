import { useCuentaContext } from "./CuentaContext";

export const Interno2 = () => {
  const { cuenta, setCuenta } = useCuentaContext();
  return (
    <>
      <p>Interno2</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
      <button onClick={() => setCuenta(cuenta - 1)}>Decrementar</button>
    </>
  );
};
