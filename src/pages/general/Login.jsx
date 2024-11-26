import CardUsers from "../../components/CardUsers";

function Login() {
  return (
    <div>
      <h1>Iniciar sesión</h1>
      <CardUsers
        icon="bi bi-buildings"
        link="/empresa/login"
        nombre="Empresa"
      />
      <CardUsers
        icon="bi bi-truck"
        link="transporte/login"
        nombre="Transportista"
      />
      <CardUsers icon="bi bi-person" link="usuario/login" nombre="Usuario" />
      <p>
        <a href="/registro">¿No tienes una cuenta?</a>
      </p>
    </div>
  );
}

export default Login;
