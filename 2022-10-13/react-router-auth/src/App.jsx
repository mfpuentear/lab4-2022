import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { Layout } from "./Layout";
import { LoginPage } from "./LoginPage";
import { PerfilPage } from "./PerfilPage";
import { RequiredAuth } from "./RequireAuth";
import { SinRuta } from "./SinRuta";

function App() {
  return (
    <>
      <h1>Aplicacion</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/acerca-de" element={<AboutPage />} />
          <Route
            path="/perfil"
            element={
              <RequiredAuth>
                <PerfilPage />
              </RequiredAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<SinRuta />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
