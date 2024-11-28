import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

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

  // Estado del modal
  const [modal, setModal] = useState({ show: false, message: "" });

  // Envio del form
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const account = testAccounts[user];
    if (account.id === data.id) {
      if (account.password === data.password) {
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
        setModal({ show: true, message: "Contraseña incorrecta" });
        setValue("password", "");
      }
    } else {
      setModal({ show: true, message: "Usuario no encontrado" });
      reset();
    }
  });

  return (
    <div className="container mt-4 px-3">
      <form
        onSubmit={onSubmit}
        className="bg-light p-4 rounded shadow-sm"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <h1 className="text-center mb-4">{user}</h1>
        <div className="mb-3">
          <label htmlFor="inputId" className="form-label fw-bold">
            {labelId}
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
          <label htmlFor="inputPassword" className="form-label fw-bold">
            Contraseña
          </label>
          <input
            type="password"
            id="inputPassword"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password", {
              required: { value: true, message: "Contraseña es requerida" },
            })}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>
        <p className="text-center mt-3">
          ¿No tienes una cuenta?{" "}
          <a href={`/${rutaUser}/registro`} className="text-decoration-none">
            Cree una
          </a>
        </p>
        <button
          type="submit"
          className="btn btn-primary w-100 fw-bold"
          style={{ fontSize: "1rem" }}
        >
          Ingresar
        </button>
      </form>
      {/* Modal de Bootstrap */}
      {modal.show && (
        <Modal titulo={"Error"} mensaje={modal.message} setModal={setModal} />
      )}
    </div>
  );
}

export default FormLogin;
