import { Routes, Route } from "react-router-dom";
import LoginEmpresa from "../pages/empresa/LoginEmpresa";
import RegistroEmpresa from "../pages/empresa/RegistroEmpresa";
import PrincipalEmpresa from "../pages/empresa/PrincipalEmpresa";
import Error from "../pages/Error";

function RutasEmpresa() {
  return (
    <Routes>
      <Route path="/login" element={<LoginEmpresa />} />
      <Route path="/registro" element={<RegistroEmpresa />} />
      <Route path="/principal" element={<PrincipalEmpresa />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default RutasEmpresa;
