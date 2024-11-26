import { Routes, Route } from "react-router-dom";
import LoginTransporte from "../pages/transporte/LoginTransporte";
import RegistroTransporte from "../pages/transporte/RegistroTransporte";
import PrincipalTransporte from "../pages/transporte/PrincipalTransporte";
import Error from "../pages/Error";

function RutasTransporte() {
  return (
    <Routes>
      <Route path="/login" element={<LoginTransporte />} />
      <Route path="/registro" element={<RegistroTransporte />} />
      <Route path="/principal" element={<PrincipalTransporte />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default RutasTransporte;
