import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

export const LoginPage = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const usuario = formData.get("usuario");
    const password = formData.get("password");

    login(usuario, password, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Usuario: <input name="usuario" type="text" />
      </label>
      <label>
        Contraseña: <input name="password" type="password" />
      </label>
      <button type="submit">Ingresar</button>
    </form>
  );
};
