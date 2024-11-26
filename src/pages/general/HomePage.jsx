import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    navigate("/login");
  };
  return (
    <>
      <h1>
        Bienvenido a <b>Bip-Bip</b>
      </h1>
      <p>Seguimiento de paquetes en tienpo real</p>
      <button type="button" onClick={handleLoginRedirect}>
        Ingresar
      </button>
    </>
  );
}

export default HomePage;
