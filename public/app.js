// Referencias a los elementos del DOM
const formulario = document.querySelector("#formulario-registro");
const lista = document.querySelector("#lista-inscripciones");
const mensaje = document.querySelector("#mensaje");
const btnGuardar = document.querySelector("#btn-guardar");
const btnCancelar = document.querySelector("#btn-cancelar");

// Variable de estado para controlar si estamos creando o editando
let idEnEdicion = null;

// Función para mostrar mensajes de éxito o error en la interfaz
function mostrarNotificacion(texto, tipo = "exito") {
  mensaje.textContent = texto;
  mensaje.className = tipo; // Aplica la clase .exito o .error de styles.css
  
  // Limpia el mensaje después de 4 segundos
  setTimeout(() => {
    mensaje.textContent = "";
    mensaje.className = "";
  }, 4000);
}

// 1. GET: Cargar y renderizar la lista de participantes registrados
async function cargarInscripciones() {
  try {
    const respuesta = await fetch("/api/inscripciones");
    const filas = await respuesta.json();

    lista.replaceChildren();

    if (filas.length === 0) {
      const vacio = document.createElement("li");
      vacio.innerHTML = "<em>No hay inscripciones registradas todavía.</em>";
      lista.append(vacio);
      return;
    }

    filas.forEach((fila) => {
      const item = document.createElement("li");

      const texto = document.createElement("p");
      texto.innerHTML = `<strong>${fila.nombre}</strong> — ${fila.taller} <br><small>${fila.modalidad} | Horario: ${fila.horario} | Nivel: ${fila.nivel_experiencia} | ${fila.correo}</small>`;

      const contenedorAcciones = document.createElement("div");
      contenedorAcciones.className = "acciones";

      const btnEditar = document.createElement("button");
      btnEditar.type = "button";
      btnEditar.className = "btn-editar";
      btnEditar.textContent = "Editar";
      btnEditar.addEventListener("click", () => prepararEdicion(fila));

      const btnBorrar = document.createElement("button");
      btnBorrar.type = "button";
      btnBorrar.className = "btn-eliminar";
      btnBorrar.textContent = "Eliminar";
      btnBorrar.addEventListener("click", () => eliminarInscripcion(fila.id));

      contenedorAcciones.append(btnEditar, btnBorrar);
      item.append(texto, contenedorAcciones);
      lista.append(item);
    });
  } catch (error) {
    mostrarNotificacion("Error al cargar la lista de participantes.", "error");
  }
}

// 2. Preparar el formulario para actualizar un registro existente
function prepararEdicion(fila) {
  idEnEdicion = fila.id;

  // Llenar cada control del formulario con los valores del registro
  Object.entries(fila).forEach(([campo, valor]) => {
    const control = formulario.elements.namedItem(campo);
    if (control) control.value = valor;
  });

  btnGuardar.textContent = "Actualizar Inscripción";
  btnCancelar.style.display = "inline-block";
  formulario.scrollIntoView({ behavior: "smooth" });
}

// Cancelar el modo de edición y volver al modo de creación
btnCancelar.addEventListener("click", () => {
  formulario.reset();
  idEnEdicion = null;
  btnGuardar.textContent = "Guardar Inscripción";
  btnCancelar.style.display = "none";
});

// 3. DELETE: Eliminar una inscripción por su ID
async function eliminarInscripcion(id) {
  const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta inscripción?");
  if (!confirmacion) return;

  try {
    const respuesta = await fetch(`/api/inscripciones/${id}`, {
      method: "DELETE"
    });

    const resultado = await respuesta.json();

    if (respuesta.ok) {
      mostrarNotificacion(resultado.mensaje || "Inscripción eliminada correctamente.", "exito");
      // Si el registro eliminado estaba cargado en edición, limpiar el formulario
      if (idEnEdicion === id) {
        btnCancelar.click();
      }
      await cargarInscripciones();
      await cargarReportes();
    } else {
      mostrarNotificacion(resultado.error || "No se pudo eliminar el registro.", "error");
    }
  } catch (error) {
    mostrarNotificacion("Error de conexión al eliminar.", "error");
  }
}

// 4. POST / PUT: Guardar una nueva inscripción o actualizar una existente
formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  // Validación básica del navegador
  if (!formulario.checkValidity()) {
    mostrarNotificacion("Por favor, completa todos los campos requeridos.", "error");
    return;
  }

  const datos = Object.fromEntries(new FormData(formulario));
  const metodo = idEnEdicion ? "PUT" : "POST";
  const ruta = idEnEdicion ? `/api/inscripciones/${idEnEdicion}` : "/api/inscripciones";

  try {
    const respuesta = await fetch(ruta, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    });

    const resultado = await respuesta.json();

    if (respuesta.ok) {
      mostrarNotificacion(resultado.mensaje, "exito");
      formulario.reset();
      idEnEdicion = null;
      btnGuardar.textContent = "Guardar Inscripción";
      btnCancelar.style.display = "none";

      await cargarInscripciones();
      await cargarReportes();
    } else {
      mostrarNotificacion(resultado.error || "Ocurrió un error en el servidor.", "error");
    }
  } catch (error) {
    mostrarNotificacion("No se pudo conectar con el servidor.", "error");
  }
});

// 5. GET /api/reportes/resumen: Renderizar estadísticas y barras de porcentaje
async function cargarReportes() {
  try {
    const respuesta = await fetch("/api/reportes/resumen");
    const datos = await respuesta.json();

    // Actualizar el número total de inscripciones
    document.querySelector("#total").textContent = datos.total;

    // Función auxiliar para renderizar listas con barras de porcentaje
    const renderizarBarras = (selectorLista, coleccion, propiedadEtiqueta) => {
      const contenedor = document.querySelector(selectorLista);
      contenedor.replaceChildren();

      if (!coleccion || coleccion.length === 0) {
        const itemVacio = document.createElement("li");
        itemVacio.innerHTML = "<em>Sin registros</em>";
        contenedor.append(itemVacio);
        return;
      }

      // Hallar el valor mayor para calcular la proporción de la barra
      const mayor = Math.max(...coleccion.map((f) => Number(f.cantidad)), 1);

      coleccion.forEach((fila) => {
        const item = document.createElement("li");

        const encabezadoBarra = document.createElement("div");
        encabezadoBarra.className = "barra-etiqueta";
        encabezadoBarra.innerHTML = `<span>${fila[propiedadEtiqueta]}</span> <strong>${fila.cantidad}</strong>`;

        const fondoBarra = document.createElement("div");
        fondoBarra.className = "barra-fondo";

        const barra = document.createElement("div");
        barra.className = "barra";
        const porcentaje = Math.round((Number(fila.cantidad) / mayor) * 100);
        barra.style.width = `${porcentaje}%`;

        fondoBarra.append(barra);
        item.append(encabezadoBarra, fondoBarra);
        contenedor.append(item);
      });
    };

    // Renderizar las tres métricas requeridas
    renderizarBarras("#reporte-talleres", datos.porTaller, "taller");
    renderizarBarras("#reporte-horarios", datos.porHorario, "horario");
    renderizarBarras("#reporte-modalidades", datos.porModalidad, "modalidad");
  } catch (error) {
    console.error("Error al cargar reportes:", error);
  }
}

// Inicialización: cargar datos al abrir la página
cargarInscripciones();
cargarReportes();