const express = require("express");
const path = require("path");
const db = require("./database");

const app = express();
const PORT = 3000;

// Middlewares obligatorios
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Función auxiliar para limpiar cadenas de texto
const texto = (valor) => (typeof valor === "string" ? valor.trim() : "");

// 1. GET: Consultar todas las inscripciones desde la base de datos
app.get("/api/inscripciones", (req, res) => {
  try {
    const filas = db.prepare(
      "SELECT id, nombre, correo, telefono, taller, " +
      "horario, modalidad, nivel_experiencia, fecha_registro " +
      "FROM inscripciones ORDER BY id DESC"
    ).all();
    res.json(filas);
  } catch (error) {
    res.status(500).json({ error: "Error al consultar las inscripciones." });
  }
});

// 2. POST: Validar y registrar una nueva inscripción
app.post("/api/inscripciones", (req, res) => {
  const cuerpo = req.body ?? {};

  const datos = {
    nombre: texto(cuerpo.nombre),
    correo: texto(cuerpo.correo),
    telefono: texto(cuerpo.telefono),
    taller: texto(cuerpo.taller),
    horario: texto(cuerpo.horario),
    modalidad: texto(cuerpo.modalidad),
    nivel_experiencia: texto(cuerpo.nivel_experiencia)
  };

  // Validación de campos obligatorios
  if (Object.values(datos).some((valor) => !valor)) {
    return res.status(400).json({ error: "Completa todos los campos obligatorios." });
  }

  // Validación de formato de correo
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo);
  if (!correoValido) {
    return res.status(400).json({ error: "Escribe un correo electrónico válido." });
  }

  try {
    const insertar = db.prepare(
      "INSERT INTO inscripciones " +
      "(nombre, correo, telefono, taller, horario, modalidad, nivel_experiencia) " +
      "VALUES (?, ?, ?, ?, ?, ?, ?)"
    );

    const resultado = insertar.run(
      datos.nombre,
      datos.correo,
      datos.telefono,
      datos.taller,
      datos.horario,
      datos.modalidad,
      datos.nivel_experiencia
    );

    return res.status(201).json({
      mensaje: "Inscripción guardada correctamente.",
      id: Number(resultado.lastInsertRowid)
    });
  } catch (error) {
    return res.status(500).json({ error: "Error al guardar en la base de datos." });
  }
});

// 3. PUT: Validar y actualizar una inscripción existente
app.put("/api/inscripciones/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: "Id inválido." });
  }

  const cuerpo = req.body ?? {};

  const datos = {
    nombre: texto(cuerpo.nombre),
    correo: texto(cuerpo.correo),
    telefono: texto(cuerpo.telefono),
    taller: texto(cuerpo.taller),
    horario: texto(cuerpo.horario),
    modalidad: texto(cuerpo.modalidad),
    nivel_experiencia: texto(cuerpo.nivel_experiencia)
  };

  if (Object.values(datos).some((valor) => !valor)) {
    return res.status(400).json({ error: "Completa todos los campos obligatorios." });
  }

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo);
  if (!correoValido) {
    return res.status(400).json({ error: "Correo inválido." });
  }

  try {
    const resultado = db.prepare(
      "UPDATE inscripciones SET nombre=?, correo=?, telefono=?, taller=?, horario=?, modalidad=?, nivel_experiencia=? WHERE id=?"
    ).run(
      datos.nombre,
      datos.correo,
      datos.telefono,
      datos.taller,
      datos.horario,
      datos.modalidad,
      datos.nivel_experiencia,
      id
    );

    if (resultado.changes === 0) {
      return res.status(404).json({ error: "No se encontró la inscripción." });
    }

    return res.json({ mensaje: "Inscripción actualizada correctamente." });
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar la inscripción." });
  }
});

// 4. DELETE: Eliminar una inscripción por su ID
app.delete("/api/inscripciones/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: "Id inválido." });
  }

  try {
    const resultado = db.prepare("DELETE FROM inscripciones WHERE id=?").run(id);

    if (resultado.changes === 0) {
      return res.status(404).json({ error: "No se encontró la inscripción." });
    }

    return res.json({ mensaje: "Inscripción eliminada correctamente." });
  } catch (error) {
    return res.status(500).json({ error: "Error al eliminar la inscripción." });
  }
});

// 5. GET: Resumen de reportes estadísticos
app.get("/api/reportes/resumen", (req, res) => {
  try {
    const total = db.prepare("SELECT COUNT(*) AS total FROM inscripciones").get().total;

    const porTaller = db.prepare(
      "SELECT taller, COUNT(*) AS cantidad FROM inscripciones GROUP BY taller ORDER BY cantidad DESC"
    ).all();

    const porHorario = db.prepare(
      "SELECT horario, COUNT(*) AS cantidad FROM inscripciones GROUP BY horario ORDER BY horario"
    ).all();

    const porModalidad = db.prepare(
      "SELECT modalidad, COUNT(*) AS cantidad FROM inscripciones GROUP BY modalidad ORDER BY cantidad DESC"
    ).all();

    res.json({ total, porTaller, porHorario, porModalidad });
  } catch (error) {
    res.status(500).json({ error: "Error al generar el reporte." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor disponible en http://localhost:${PORT}`);
});