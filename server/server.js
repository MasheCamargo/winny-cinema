require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api", require("./routes/userRouter"));

const URI = process.env.MONGODB_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión establecida con la base de datos");
  } catch (error) {
    console.error("Error en la conexión a la base de datos:", error);
  }
}

connectToDatabase();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("El servidor ha arrancado en el puerto: ", port);
});
