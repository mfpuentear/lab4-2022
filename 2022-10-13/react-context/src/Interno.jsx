import { useCuentaContext } from "./CuentaContext";

export const Interno = () => {
  const { cuenta } = useCuentaContext();
  return (
    <>
      <p>Interno</p>
      <p>Cuenta: {cuenta}</p>
    </>
  );
};
