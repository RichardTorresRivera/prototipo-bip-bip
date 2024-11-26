import CardUsers from "../../components/CardUsers";

function CrearCuenta() {
  return (
    <div>
      <h1>Crear Cuenta</h1>
      <CardUsers
        icon="bi bi-buildings"
        link="/empresa/registro"
        nombre="Empresa"
      />
      <CardUsers
        icon="bi bi-truck"
        link="/transporte/registro"
        nombre="Transportista"
      />
      <CardUsers
        icon="bi bi-person"
        link="/usuario/registro"
        nombre="Usuario"
      />
      <p>
        <a href="/login">¿Ya tienes una cuenta?</a>
      </p>
    </div>
  );
}

export default CrearCuenta;
