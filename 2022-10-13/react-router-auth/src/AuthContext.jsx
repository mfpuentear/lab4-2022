import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [sesion, setSesion] = useState();

  const login = async (usuario, password, callback) => {
    const response = await axios.post("http://localhost:4000/auth/login", {
      usuario,
      password,
    });
    if (response.data.token) {
      setSesion(response.data);
      callback();
    }
  };

  const logout = (callback) => {
    setSesion(null);
    callback();
  };

  const value = { sesion, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
