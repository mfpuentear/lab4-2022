import { useState } from "react";
import { apiGet, apiPost } from "./api-utils";

function App() {
  const [credencial, setCredencial] = useState(null);

  if (credencial) {
    return (
      <>
        <p>Conectado como {credencial.usuario}</p>
        <button
          onClick={() => {
            setCredencial(null);
          }}
        >
          Salir
        </button>
        <button
          onClick={async () => {
            const response = await apiGet("auth/perfil", credencial.token);
            console.log(response.data);
          }}
        >
          Perfil
        </button>
      </>
    );
  }
  return (
    <>
      <p>No esta conectado</p>
      <button
        onClick={async () => {
          const response = await apiPost("auth/login", {
            usuario: "psanchez",
            password: "123456",
          });
          console.log(response);
          if (response.status === 200) {
            setCredencial(response.data);
          }
        }}
      >
        Ingresar
      </button>
    </>
  );
}

export default App;
