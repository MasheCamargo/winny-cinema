const Users = require("../models/Users");

const UserControleler = {
  register: async (req, res) => {
    // Registrar usuarios
    try {
      const { dni, name, lastname, date, role, phone, email, password, user } =
        req.body;
      let newUserName = "";
      if (user) {
        newUserName = user.toLowerCase().replace(/ /g, "");
      }

      const user_name = await Users.findOne({ username: newUserName });
      if (user_name)
        return res.status(400).json({ msg: "Este usuario ya existe." });

      const user_email = await Users.findOne({ email });
      if (user_email)
        return res.status(400).json({ msg: "Este email ya está registrado." });

      const newUser = new Users({
        dni,
        name,
        lastname,
        date,
        role,
        phone,
        email,
        password,
        user: newUserName,
      });

      await newUser.save();

      res.json({
        msg: "Registro exitoso!",
        user: {
          ...newUser._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUser: async (req, res) => {
    try {
      // Obtener la lista de todos los usuarios
      const users = await Users.find({}, { password: 0 });

      res.json(users);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = UserControleler;
