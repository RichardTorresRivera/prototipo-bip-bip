import React, { useState, useEffect } from "react";
import Rutas from "./routes/index.routes.jsx";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar si el ancho es de un dispositivo móvil
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    // Comprobar al cargar la aplicación
    checkScreenSize();

    // Agregar un listener para detectar cambios en el tamaño
    window.addEventListener("resize", checkScreenSize);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <Rutas />
      ) : (
        <div>
          <h1>Web no disponible para este dispositivo</h1>
        </div>
      )}
    </div>
  );
}

export default App;
