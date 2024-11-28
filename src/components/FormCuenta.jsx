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
    <div className="container mt-4 px-3">
      <form
        onSubmit={onSubmit}
        className="bg-light p-4 rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <h1 className="text-center mb-4">{`Crear ${user}`}</h1>

        <div className="mb-3">
          <label htmlFor="inputNombre" className="form-label fw-bold">
            Nombres:
          </label>
          <input
            type="text"
            id="inputNombre"
            className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
            {...register("nombre", {
              required: { value: true, message: `Nombre es requerido` },
            })}
          />
          {errors.nombre && (
            <div className="invalid-feedback">{errors.nombre.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="inputApellido" className="form-label fw-bold">
            Apellidos:
          </label>
          <input
            type="text"
            id="inputApellido"
            className={`form-control ${errors.apellido ? "is-invalid" : ""}`}
            {...register("apellido", {
              required: { value: true, message: `Apellido es requerido` },
            })}
          />
          {errors.apellido && (
            <div className="invalid-feedback">{errors.apellido.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="inputId" className="form-label fw-bold">
            {labelId}:
          </label>
          <input
            type="text"
            id="inputId"
            className={`form-control ${errors.id ? "is-invalid" : ""}`}
            {...register("id", {
              required: { value: true, message: `${labelId} es requerido` },
            })}
          />
          {errors.id && (
            <div className="invalid-feedback">{errors.id.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="inputCorreo" className="form-label fw-bold">
            Correo:
          </label>
          <input
            type="text"
            id="inputCorreo"
            className={`form-control ${errors.correo ? "is-invalid" : ""}`}
            {...register("correo", {
              required: { value: true, message: `Correo es requerido` },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.correo && (
            <div className="invalid-feedback">{errors.correo.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password", {
              required: { value: true, message: "Contraseña es requerida" },
              minLength: {
                value: 6,
                message: "La contraseña debe ser mayor a 6 caracteres",
              },
            })}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="confirmarPassword" className="form-label fw-bold">
            Confirmar contraseña:
          </label>
          <input
            type="password"
            id="confirmarPassword"
            className={`form-control ${
              errors.confirmarPassword ? "is-invalid" : ""
            }`}
            {...register("confirmarPassword", {
              required: {
                value: true,
                message: "Confirmar contraseña es requerido",
              },
              validate: (value) =>
                value === getValues("password") ||
                "Las contraseñas no coinciden",
            })}
          />
          {errors.confirmarPassword && (
            <div className="invalid-feedback">
              {errors.confirmarPassword.message}
            </div>
          )}
        </div>

        {user !== "empresario" && (
          <div className="mb-3">
            <label htmlFor="inputTelefono" className="form-label fw-bold">
              Teléfono:
            </label>
            <input
              type="text"
              id="inputTelefono"
              className={`form-control ${errors.telefono ? "is-invalid" : ""}`}
              {...register("telefono", {
                required: { value: true, message: "Teléfono es requerido" },
              })}
            />
            {errors.telefono && (
              <div className="invalid-feedback">{errors.telefono.message}</div>
            )}
          </div>
        )}

        {user === "transportista" && (
          <div className="mb-3">
            <label htmlFor="selectTipo" className="form-label fw-bold">
              Tipo de transporte:
            </label>
            <select
              id="selectTipo"
              className={`form-select ${errors.tipo ? "is-invalid" : ""}`}
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
            {errors.tipo && (
              <div className="invalid-feedback">{errors.tipo.message}</div>
            )}
          </div>
        )}

        {user === "usuario" && (
          <div className="mb-3">
            <label htmlFor="inputDireccion" className="form-label fw-bold">
              Dirección:
            </label>
            <input
              type="text"
              id="inputDireccion"
              className={`form-control ${errors.direccion ? "is-invalid" : ""}`}
              {...register("direccion", {
                required: { value: true, message: "Dirección es requerida" },
              })}
            />
            {errors.direccion && (
              <div className="invalid-feedback">{errors.direccion.message}</div>
            )}
          </div>
        )}

        <p className="text-center mt-3">
          ¿Posees una cuenta?{" "}
          <a href={`/${rutaUser}/login`} className="text-decoration-none">
            Iniciar sesión
          </a>
        </p>

        <button type="submit" className="btn btn-primary w-100 fw-bold">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default FormCuenta;
