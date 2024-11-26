import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function FormCuenta({ user }) {
  const navigate = useNavigate();
  const labelId = user === "empresario" ? "Numero de RUC" : "DNI";
  const rutaUser =
    user === "empresario"
      ? "empresa"
      : user === "transportista"
      ? "transporte"
      : "usuario";

  // Manejo del form
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm();

  // Envio del form
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    switch (user) {
      case "usuario":
        navigate("/usuario/principal");
        break;
      case "empresario":
        navigate("/empresa/principal");
        break;
      case "transportista":
        navigate("/transporte/principal");
        break;
      default:
        console.error("Tipo de usuario no válido");
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <h1>{`Crear ${user}`}</h1>
      <label htmlFor="inputNombre">Nombres:</label>
      <input
        type="text"
        id="inputNombre"
        {...register("nombre", {
          required: {
            value: true,
            message: `Nombre es requerido`,
          },
        })}
      />
      {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
      <label htmlFor="inputApellido">Apellidos:</label>
      <input
        type="text"
        id="inputApellido"
        {...register("apellido", {
          required: {
            value: true,
            message: `Apellido es requerido`,
          },
        })}
      />
      {errors.apellido && (
        <p className="text-danger">{errors.apellido.message}</p>
      )}
      <label htmlFor="inputId">{labelId}</label>
      <input
        type="text"
        id="inputId"
        {...register("id", {
          required: {
            value: true,
            message: `${labelId} es requerido`,
          },
        })}
      />
      {errors.id && <p className="text-danger">{errors.id.message}</p>}
      <label htmlFor="inputCorreo">Correo:</label>
      <input
        type="text"
        id="inputCorreo"
        {...register("correo", {
          required: {
            value: true,
            message: `Correo es requerido`,
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Correo no válido",
          },
        })}
      />
      {errors.correo && <p className="text-danger">{errors.correo.message}</p>}
      <label htmlFor="password">Contraseña:</label>
      <input
        id="password"
        type="password"
        {...register("password", {
          required: {
            value: true,
            message: "Contaseña es requerida",
          },
          minLength: {
            value: 6,
            message: "La contraseña debe ser mayor a 6 caracteres",
          },
        })}
      />
      {errors.password && (
        <p className="text-danger">{errors.password.message}</p>
      )}
      <label htmlFor="confirmarPassword">Confirmar contraseña:</label>
      <input
        id="confirmarPassword"
        type="password"
        {...register("confirmarPassword", {
          required: {
            value: true,
            message: "Confirmar contraseña es requerido",
          },
          validate: (value) =>
            value === getValues("password") || "Las contraseñas no coincides",
        })}
      />
      {errors.confirmarPassword && (
        <p className="text-danger">{errors.confirmarPassword.message}</p>
      )}
      {/* Campos adicionales según el tipo de usuario */}
      {user !== "empresario" && (
        <>
          <label htmlFor="inputTelefono">Telefono:</label>
          <input
            type="text"
            id="inputTelefono"
            {...register("telefono", {
              required: { value: true, message: "Teléfono es requerido" },
            })}
          />
          {errors.telefono && (
            <p className="text-danger">{errors.telefono.message}</p>
          )}
        </>
      )}

      {user === "transportista" && (
        <>
          <label htmlFor="selectTipo">Tipo de transporte:</label>
          <select
            id="selectTipo"
            {...register("tipo", {
              required: {
                value: true,
                message: "Seleccione un tipo de transporte",
              },
            })}
          >
            <option value="">Selecciona un tipo de transporte</option>
            <option value="1">Transporte 1</option>
            <option value="2">Transporte 2</option>
          </select>
          {errors.tipo && <p className="text-danger">{errors.tipo.message}</p>}
        </>
      )}

      {user === "usuario" && (
        <>
          <label htmlFor="inputDireccion">Direccion:</label>
          <input
            type="text"
            id="inputDireccion"
            {...register("direccion", {
              required: { value: true, message: "Dirección es requerida" },
            })}
          />
          {errors.direccion && (
            <p className="text-danger">{errors.direccion.message}</p>
          )}
        </>
      )}
      <p>
        ¿Posees una cuenta?<a href={`/${rutaUser}/login`}>Iniciar sesión</a>
      </p>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default FormCuenta;
