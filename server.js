const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Este arreglo guarda los registros solo mientras el servidor está activo.
const inscripciones = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Esta ruta ya permite consultar la lista.
app.get("/api/inscripciones", (req, res) => {
  res.json(inscripciones);
});

app.post("/api/inscripciones", (req, res) => {
  // TODO 1: Extrae nombre, correo, telefono, taller y horario de req.body.
  const { nombre, correo, telefono, taller, horario } = req.body;

  // TODO 2: Revisa que todos los campos existan y no estén vacíos.
  if (!nombre || !correo || !telefono || !taller || !horario) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  // TODO 3: Comprueba que el correo tenga un formato válido.
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    return res.status(400).json({ error: "El correo electrónico no tiene un formato válido." });
  }

  // TODO 4: Crea un objeto con id y los cinco datos; agrégalo a inscripciones.
  const nuevoRegistro = {
    id: Date.now(),
    nombre,
    correo,
    telefono,
    taller,
    horario
  };
  inscripciones.push(nuevoRegistro);

  // TODO 5: Responde con estado 201 y el registro creado.
  return res.status(201).json(nuevoRegistro);
});

app.listen(PORT, () => {
  console.log(`Servidor disponible en http://localhost:${PORT}`);
});