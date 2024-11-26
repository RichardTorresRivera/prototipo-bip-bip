import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/general/HomePage";
import Login from "../pages/general/Login";
import CrearCuenta from "../pages/general/CrearCuenta";
import Error from "../pages/Error";
import Loading from "../pages/Loading";
import RutasEmpresa from "./empresa.routes";
import RutasTransporte from "./transporte.routes";
import RutasUsuario from "./usuario.routes";

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<CrearCuenta />} />
        {/* Rutas para la empresa */}
        <Route path="/empresa/*" element={<RutasEmpresa />} />
        {/* Rutas para el transportista */}
        <Route path="/transporte/*" element={<RutasTransporte />} />
        {/* Rutas para el usuario */}
        <Route path="/usuario/*" element={<RutasUsuario />} />
        {/* Rutas de error */}
        <Route path="/load" element={<Loading />} />
        <Route path="/403" element={<Error />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
