import { useContext, useState } from "react";
import { createContext } from "react";

const CuentaContext = createContext();

export const CuentaProvider = ({ children }) => {
  const [cuenta, setCuenta] = useState(0);

  const value = { cuenta, setCuenta };

  return (
    <CuentaContext.Provider value={value}>{children}</CuentaContext.Provider>
  );
};

export const useCuentaContext = () => {
  return useContext(CuentaContext);
};
