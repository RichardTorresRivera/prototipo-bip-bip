import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function FormLogin({ user }) {
  const navigate = useNavigate();
  const labelId = user === "Empresario" ? "Numero de RUC" : "DNI";
  const rutaUser =
    user === "Empresario"
      ? "empresa"
      : user === "Transportista"
      ? "transporte"
      : "usuario";

  // Manejo del form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  // Cuentas de prueba
  const testAccounts = {
    Usuario: { id: "33334444", password: "usuario123" },
    Empresario: { id: "12345678", password: "empresa123" },
    Transportista: { id: "66667777", password: "transporte123" },
  };

  // Envio del form
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const account = testAccounts[user];
    if (account.id === data.id && account.password === data.password) {
      // Redirección según el tipo de usuario
      switch (user) {
        case "Usuario":
          navigate("/usuario/principal");
          break;
        case "Empresario":
          navigate("/empresa/principal");
          break;
        case "Transportista":
          navigate("/transporte/principal");
          break;
        default:
          console.error("Tipo de usuario no válido");
      }
    } else {
      alert("Credenciales incorrectas");
      reset();
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <h1>{user}</h1>
      <label htmlFor="inputId">{labelId}</label>
      <input
        type="text"
        id="inputId"
        {...register("id", {
          required: { value: true, message: `${labelId} es requerido` },
        })}
      />
      {errors.id && <p className="text-danger">{errors.id.message}</p>}
      <label htmlFor="inputPassword">Contrseña</label>
      <input
        type="password"
        id="inputPassword"
        {...register("password", {
          required: {
            value: true,
            message: "Contraseña es requerida",
          },
        })}
      />
      {errors.password && (
        <p className="text-danger">{errors.password.message}</p>
      )}
      <p>
        ¿No tienes una cuenta?<a href={`/${rutaUser}/registro`}>Cree una</a>
      </p>
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default FormLogin;
