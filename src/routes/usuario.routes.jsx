import { Routes, Route } from "react-router-dom";
import LoginUsuario from "../pages/usuario/LoginUsuario";
import RegistroUsuario from "../pages/usuario/RegistroUsuario";
import PrincipalUsuario from "../pages/usuario/PrincipalUsuario";
import Error from "../pages/Error";

function RutasUsuario() {
  return (
    <Routes>
      <Route path="/login" element={<LoginUsuario />} />
      <Route path="/registro" element={<RegistroUsuario />} />
      <Route path="/principal" element={<PrincipalUsuario />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default RutasUsuario;
