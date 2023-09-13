import React, { useState } from "react";
import axios from "axios";

function RegisterForm({ onRegistrationSuccess }) {
  const [formData, setFormData] = useState({
    dni: "",
    user: "",
    name: "",
    lastname: "",
    date: "",
    phone: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const capitalizeFirstLetter = (str) => {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };

        const newUser = {
          name: capitalizeFirstLetter(formData.name),
          lastname: capitalizeFirstLetter(formData.lastname),
          role: capitalizeFirstLetter(formData.role),
        };

        console.log("Respuesta:", newUser);

        onRegistrationSuccess(newUser);
      } else {
        console.error("Error al enviar los datos al servidor");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Registro de usuarios </p>
      <p className="message">
        Registrate ahora y disfruta de todo nuestro contenido.
      </p>
      <div className="flex">
        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required=""
            id="dni"
            name="dni"
            onChange={handleChange}
          />
          <span>DNI</span>
        </label>
        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required=""
            id="user"
            name="user"
            onChange={handleChange}
          />
          <span>Usuario</span>
        </label>
      </div>
      <div className="flex">
        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required=""
            id="name"
            name="name"
            onChange={handleChange}
          />
          <span>Nombre</span>
        </label>

        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required=""
            id="lastname"
            name="lastname"
            onChange={handleChange}
          />
          <span>Apellido</span>
        </label>
      </div>
      <label>
        <input
          className="input"
          type="date"
          placeholder=""
          required=""
          id="date"
          name="date"
          onChange={handleChange}
        />
        <span>Fecha de nacimiento</span>
      </label>
      <label>
        <input
          className="input"
          type="tel"
          placeholder=""
          required=""
          id="phone"
          name="phone"
          onChange={handleChange}
        />
        <span>Teléfono</span>
      </label>

      <label>
        <input
          className="input"
          type="email"
          placeholder=""
          required=""
          id="email"
          name="email"
          onChange={handleChange}
        />
        <span>Correo electrónico</span>
      </label>

      <label>
        <input
          className="input"
          type="password"
          placeholder=""
          required=""
          name="password"
          id="password"
          onChange={handleChange}
        />
        <span>Contraseña</span>
      </label>
      <label>
        <select
          className="form-select"
          id="role"
          name="role"
          required
          onChange={handleChange}
        >
          <option value="">Selecciona un rol</option>
          <option value="Administrador">Administrador</option>
          <option value="Empleado">Empleado</option>
          <option value="Cliente">Cliente</option>
        </select>
      </label>

      <button className="submit">Registrar</button>
    </form>
  );
}

export default RegisterForm;
