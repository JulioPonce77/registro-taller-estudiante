# Bitácora de repaso de Desarrollo Web

Completa una ficha por tema con tus palabras. No copies párrafos de los sitios consultados.

## HTML
- Resumen propio (2–3 frases): HTML es el lenguaje de marcado fundamental que define la estructura semántica y la organización de todo el contenido en la web. A través de etiquetas jerárquicas, estructura encabezados, párrafos, formularios, tablas y enlaces para que los navegadores puedan interpretarlos de forma accesible. No se encarga del diseño visual ni de la lógica de procesamiento, sino del esqueleto estructurado del documento.
- Dos términos clave y su explicación:
  - **Etiqueta semántica:** Elemento HTML (como `<header>`, `<main>`, `<section>` o `<article>`) cuyo nombre describe explícitamente su propósito y el tipo de contenido que alberga, facilitando la accesibilidad y el posicionamiento.
  - **Atributo:** Parámetro configurador que se incluye en la etiqueta de apertura (por ejemplo `id`, `name`, `type` o `required`) para definir el comportamiento, identidad o restricciones del elemento.
- Ejemplo de código explicado:
  ```html
  <label for="correo">Correo electrónico</label>
  <input type="email" id="correo" name="correo" required>
  ```
  La etiqueta `<label>` se asocia de forma directa y accesible al campo de texto mediante el atributo `for="correo"` que coincide con `id="correo"`. Por su parte, la etiqueta `<input>` exige una sintaxis válida de correo gracias a `type="email"`, define la clave con la que viajará la información mediante `name="correo"` e impide el envío del formulario si está vacío con `required`.
- Pregunta que podría aparecer en el examen: ¿Qué atributo conecta de forma accesible una etiqueta `<label>` con su control de formulario correspondiente?

## CSS
- Resumen propio (2–3 frases): CSS es el lenguaje que controla toda la presentación estética, diagramación y diseño visual de una página web. Permite separar el contenido de su apariencia, gestionando colores, tipografías, alineaciones y espacios entre elementos. Además, permite construir interfaces responsivas que se ajustan dinámicamente a pantallas de computadoras, tabletas y teléfonos móviles.
- Dos términos clave y su explicación:
  - **Modelo de caja (Box Model):** Estructura base donde todo elemento HTML se interpreta como una caja rectangular conformada por el contenido central, el relleno interno (*padding*), el borde (*border*) y el margen exterior (*margin*).
  - **Media Query:** Regla condicional (`@media`) que evalúa parámetros del dispositivo (como el ancho de la ventana gráfica) para aplicar estilos visuales adaptados a cada resolución.
- Ejemplo de código explicado:
  ```css
  @media (max-width: 600px) {
    .formulario-grid {
      grid-template-columns: 1fr;
    }
  }
  ```
  Esta regla comprueba si el ancho de la pantalla es igual o inferior a 600 píxeles. Si la condición se cumple, transforma la cuadrícula del formulario en una sola columna vertical (`1fr`), garantizando que los campos se lean con claridad en dispositivos móviles sin desbordar la pantalla.
- Pregunta que podría aparecer en el examen: ¿Cuál es la diferencia entre `padding` y `margin` en el modelo de caja de CSS?

## JavaScript y DOM
- Resumen propio (2–3 frases): JavaScript es el lenguaje de programación encargado de aportar dinamismo, lógica interactiva y comportamiento a la aplicación web. Permite escuchar las acciones del usuario en tiempo real y manipular el contenido visual de la página sin necesidad de recargarla. También gestiona la comunicación asíncrona con el servidor mediante `fetch` para transferir datos en segundo plano.
- Dos términos clave y su explicación:
  - **DOM (Document Object Model):** Estructura de árbol creada por el navegador que representa cada elemento del documento HTML como un objeto programable desde JavaScript.
  - **`addEventListener`:** Método que registra un escuchador sobre un elemento de la interfaz para disparar una función cuando ocurre un evento determinado (como un clic, pulsación de tecla o envío).
- Ejemplo de código explicado:
  ```javascript
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const datos = new FormData(formulario);
  });
  ```
  El método escucha el envío del formulario. La instrucción `evento.preventDefault()` detiene la recarga automática que hace el navegador por defecto, permitiendo que la clase `FormData` extraiga los valores de los controles para procesarlos o enviarlos por la red mediante código.
- Pregunta que podría aparecer en el examen: ¿Para qué se utiliza `preventDefault()` dentro del evento `submit` de un formulario?

## Node.js, Express y API
- Resumen propio (2–3 frases): Node.js es el entorno que permite ejecutar código JavaScript del lado del servidor, fuera del navegador web. Express es un framework que complementa a Node.js facilitando la creación de servidores web y APIs mediante una gestión sencilla de rutas y peticiones HTTP. Juntos permiten recibir información del cliente, aplicar validaciones y comunicarse con bases de datos para entregar respuestas estructuradas.
- Dos términos clave y su explicación:
  - **Middleware:** Función intermedia que inspecciona o transforma las solicitudes entrantes antes de que alcancen la ruta definitiva (como `express.json()`, que convierte el cuerpo JSON en un objeto dentro de `req.body`).
  - **API REST:** Estilo de arquitectura cliente-servidor que organiza las funciones del sistema en recursos identificados por URLs y operados mediante verbos HTTP estándar (GET, POST, PUT, DELETE).
- Ejemplo de ruta o solicitud explicado:
  ```javascript
  app.get("/api/inscripciones", (req, res) => {
    res.json(inscripciones);
  });
  ```
  Define un punto de entrada con el método HTTP GET en la dirección `/api/inscripciones`. Cuando un cliente hace una consulta a esa URL, el servidor responde entregando la lista de inscripciones en formato JSON y cierra el ciclo de comunicación con estado exitoso.
- Pregunta que podría aparecer en el examen: ¿Qué middleware de Express debe declararse obligatoriamente para poder leer el cuerpo de una petición POST enviada en formato JSON?

## SQL
- Resumen propio (2–3 frases): SQL es el lenguaje estándar para administrar, consultar y manipular bases de datos relacionales estructuradas en tablas de filas y columnas. Asegura que los datos se guarden de forma permanente en el disco físico, evitando la pérdida de información al reiniciar o detener el servidor. Proporciona herramientas tanto para definir la estructura de las tablas como para gestionar sus registros.
- Explica SELECT, INSERT, UPDATE y DELETE:
  - **`SELECT`:** Consulta y devuelve registros guardados en una o varias tablas según los filtros solicitados.
  - **`INSERT`:** Inserta y almacena nuevas filas de información dentro de una tabla.
  - **`UPDATE`:** Modifica los valores de registros existentes que cumplan con una condición específica.
  - **`DELETE`:** Remueve de manera permanente uno o varios registros de la tabla.
- ¿Qué son una clave primaria y una clave foránea?
  - **Clave primaria (PK):** Columna o conjunto de columnas cuyo valor es único e irrepetible, sirviendo para identificar inequívocamente cada fila de una tabla (por ejemplo, `id`).
  - **Clave foránea (FK):** Columna que almacena la referencia a la clave primaria de otra tabla, permitiendo relacionar registros entre diferentes entidades de forma consistente.
- Pregunta que podría aparecer en el examen: ¿Qué sentencia SQL se utiliza para consultar registros existentes dentro de una tabla?

## Git y GitHub
- Resumen propio (2–3 frases): Git es una herramienta local de control de versiones que registra el historial cronológico y los cambios de un proyecto mediante instantáneas llamadas commits. GitHub es una plataforma en la nube diseñada para hospedar, respaldar y compartir esos repositorios remotos. Juntos permiten rastrear modificaciones, evitar pérdidas de código y colaborar en equipo.
- Explica add, commit y push:
  - **`git add`:** Coloca los archivos modificados en el área de preparación (*staging area*), seleccionándolos para el siguiente guardado.
  - **`git commit`:** Guarda de forma permanente una instantánea de los cambios preparados en el historial local del proyecto, acompañada de un mensaje explicativo.
  - **`git push`:** Envía y sincroniza los commits guardados en la máquina local hacia el repositorio remoto alojado en GitHub.
- Diferencia entre Git y GitHub:
  - **Git** es el programa local instalado en la computadora que administra las versiones y el historial de cambios del código.
  - **GitHub** es el servicio web en la nube que aloja los repositorios de Git para mantener copias de seguridad en internet y facilitar el trabajo colaborativo.
- Pregunta que podría aparecer en el examen: ¿Cuál es el orden secuencial correcto de comandos para registrar localmente un cambio y enviarlo al servidor remoto?


## Actividad Trazar el recorrido
Imagina que Ana completa el formulario y presiona Registrar. Escribe en tu bitácora qué componente participa en cada paso:

- ¿Qué presenta los campos?
  - El HTML
- ¿Qué evita que el navegador recargue la página?
  - JavaScript que es la que escucha el envío
- ¿Qué componente recibe el JSON?
  - El servidor Express
- ¿Qué parte puede guardar el registro?
  - La base de datos

## Actividad: Investiga y aplica - Atributos de formulario

Completa en bitacora.md qué hacen name, type y required.
- **`name`:** Identifica el campo al enviar el formulario; define la clave con la que el servidor o JavaScript lee el dato (por ejemplo, `{ "nombre": "valor" }`).
- **`type`:** Define la naturaleza del campo y cómo se comporta visual y funcionalmente (por ejemplo, `text`, `email`, `tel`, adaptando teclados móviles y validaciones nativas).
- **`required`:** Obliga a que el usuario complete o seleccione un valor en el campo antes de permitir el envío del formulario.

## Actividad: Video HTML desde cero
Mira del minuto 10:52 al 15:22. Pausa y escribe en tu bitácora dos etiquetas semánticas y para qué sirven:

- Etiquetas semánticas
  - `<html>` y `<body>`
- ¿Para qué sirve la etiqueta `<html>`?
  - Es el elemento raíz de toda la página web que delimita el documento y contiene todos los demás elementos.
- ¿Para qué sirve la etiqueta `<body>`?
  - Define el cuerpo del documento y encierra todos los elementos y contenidos visibles para el usuario en el navegador.

  ## Explícalo con tus palabras

- **¿Qué información ya aparece en el HTML?**  
  Ya está toda la parte visual del formulario: las cajas de texto, los menús desplegables para elegir taller y horario, y el botón para registrarse.

- **¿Qué falta para guardar el registro?**  
  Falta la lógica: el JavaScript que capture lo que escribió el usuario para enviarlo sin recargar la página, y el servidor con la base de datos para recibir la información y guardarla.

  ## Controles de formulario: type="email" y type="tel" (MDN)

- **`type="email"`:** Se usa cuando el campo requiere obligatoriamente una dirección de correo. MDN destaca que incluye validación automática en el navegador (comprueba que tenga formato válido con `@` y dominio) y en dispositivos móviles activa teclados adaptados con la tecla `@` y el `.com`.

- **`type="tel"`:** Se usa exclusivamente para capturar números telefónicos. A diferencia de `email`, el navegador no aplica una validación sintáctica estricta por defecto (porque los formatos telefónicos cambian en cada país), pero su gran ventaja es que en móviles despliega directamente el teclado numérico de marcación.

## Mejora aplicada al formulario

- **Mejora:** Texto de ayuda y accesibilidad con `aria-describedby` en el correo.
- **Motivo:** Le da claridad al usuario indicándole para qué se usará su correo y vincula la explicación con lectores de pantalla para que el formulario sea más accesible.

## Práctica guiada: Estilos CSS y modelo de caja

- **¿Qué espacio cambió al modificar padding y margin?**
  - **`padding`:** Modificó el espacio interior de `.panel`, alejando los campos y textos de los bordes del recuadro blanco.
  - **`margin`:** Modificó el espacio exterior alrededor de `.panel`, aumentando la separación respecto al encabezado superior y la lista inferior.

### Regla CSS propia
```css
input:hover, select:hover { border-color: #087e83; } 
```

## Identificación de regla CSS (Video)

- **Selector:** `h2`  
  Indica qué elemento o elementos HTML se van a modificar (en este caso, los encabezados de nivel 2).
- **Propiedad:** `color`  
  Define la característica visual que se quiere cambiar (el color del texto).
- **Valor:** `blue`  
  Especifica el ajuste o resultado exacto aplicado a la propiedad (color azul).

## Desafío: Flexbox Froggy y Media Queries

- **Propiedades utilizadas en Flexbox Froggy:**
  - **`justify-content`:** Alinea y distribuye los elementos a lo largo del eje principal (horizontal por defecto), permitiendo centrarlos (`center`), pegarlos a los extremos (`flex-end`) o separarlos con espacio entre ellos (`space-between`).
  - **`align-items`:** Alinea los elementos en el eje secundario o transversal (vertical por defecto), permitiendo alinearlos arriba, al centro (`center`) o abajo (`flex-end`).

- **Comprobación del media query de 640px:**
  - Al reducir el ancho de la ventana del navegador a menos de 640 píxeles, el contenedor principal y el panel reducen sus márgenes y rellenos interiores para adaptarse a pantallas móviles sin desbordar el contenido.

  ## Flexbox y Media Queries

- **Propiedad de Flexbox:** `justify-content: center;`
  - **Cambio visual que produce:** Mueve y alinea los elementos horizontalmente hacia el centro del contenedor, repartiendo el espacio sobrante por igual a los lados.

- **Regla de Media Query:** `@media (max-width: 640px) { ... }`
  - **Cambio visual que produce:** Se activa únicamente cuando la pantalla mide 640 píxeles de ancho o menos (como en celulares), reduciendo el tamaño de márgenes y paddings para que el diseño no se desborde ni se corte en pantallas pequeñas.

  ## JavaScript base: Variables y toma de decisiones
Cambia inscritos a 20. Antes de ejecutar, responde: ¿se ejecutará inscritos++? ¿Qué devuelve hayCupo()?
- **Reto de lectura (inscritos = 20):**  
  - `hayCupo()` devuelve `false` porque 20 no es menor que 20.  
  - No se ejecuta `inscritos++` porque la condición del `if` no se cumple.

- **Predicción de Resultados del Video:**  
  - Ejemplo 1: a; y b=2;
  - Predicción al mostrar en consola: Error y 2
  - Resultado: undefined y 2  
  
  - Ejemplo 2: a; y a=10;
  - Predicción al mostrar en consola: undefined y 10
  - Resultado: undefined y 10  

- **Cuándo usar `const`:**  
  Para valores fijos que no deben cambiar a lo largo del programa, como la cantidad de cupos máximos de un taller (`const cuposMaximos = 20`) o la referencia a un elemento del formulario en el DOM.

- **Cuándo usar `let`:**  
  Para variables cuyo valor cambiará durante la ejecución, como un contador de personas registradas (`let inscritos = 0`) que va aumentando cada vez que alguien envía el formulario.

  ## DOM y eventos: sigue el orden

- **1. Buscar el formulario por su ID:**  
  Se utiliza `document.querySelector("#formulario-registro")` para seleccionar el formulario desde el DOM.

- **2. Escuchar el evento submit:**  
  Se usa `formulario.addEventListener("submit", ...)` para detectar cuando la persona intenta enviar el formulario.

- **3. ¿Para qué usamos `preventDefault()`?**  
  Evita que el navegador recargue la página automáticamente al enviar el formulario[cite: 8], permitiendo controlar los datos con JavaScript en segundo plano.

- **4. Leer valores con `FormData`:**  
  Se instancia `new FormData(formulario)` para empaquetar los campos y se utiliza `datos.get("nombre")` para obtener y mostrar en consola el valor del campo con `name="nombre"`.

  ## Práctica JavaScript: Arreglos y Funciones

### Práctica en W3Schools (JS Introduction / DOM)
- **Ejercicio resuelto:** Selección de un elemento del documento HTML por su identificador.
```javascript
document.getElementById('demo').innerHTML
```
- **Método utilizado:** `getElementById`
- **Explicación:** Permite localizar de forma precisa un elemento mediante su atributo `id` único para interactuar con su contenido (`innerHTML` o `textContent`).

---

### Práctica en OneCompiler (Funciones)
- **Ejercicio resuelto:** Definición y llamado de una función con parámetros e interpolación de texto.
```javascript
function greet(name) {
  console.log(`Welcome, ${name}!`);
}

greet("Alice");
greet(lines[0]);
```
- **Explicación:** Se define una función que recibe un argumento y muestra en consola un saludo dinámico usando comillas invertidas y `${name}`.

---

### Reto guiado en CodePen: "Cuenta las inscripciones"
- **Código HTML:**
```html
<div class="contenedor">
  <h2>Control de Taller</h2>
  <p id="total-inscripciones">Cargando...</p>
</div>
```

- **Código JavaScript:**
```javascript
// 2. Arreglo llamado inscripciones con tres nombres
const inscripciones = ["Carlos", "María", "Julio"];

// 3. Función que devuelve la cantidad con length
function contarInscripciones(lista) {
  return lista.length;
}

// 4. Muestra el resultado en un párrafo de HTML
const parrafo = document.querySelector("#total-inscripciones");
parrafo.textContent = `Total de inscripciones: ${contarInscripciones(inscripciones)}`;
```

- **Explicación paso a paso:**
  1. Se crea la lista de nombres en una constante `inscripciones`.
  2. La función `contarInscripciones` toma el arreglo y retorna el total de elementos accediendo a la propiedad `.length`.
  3. Mediante `document.querySelector("#total-inscripciones")` se selecciona el elemento de la página y se actualiza su texto con `textContent` mostrando el conteo final de forma dinámica.

  ## Entorno de desarrollo: Node.js, npm, VS Code y dependencias

### Diferencias entre herramientas
- **Node.js:** Es el entorno de ejecución (runtime) que permite correr código JavaScript fuera del navegador, directamente en el sistema operativo o servidor.
- **npm (Node Package Manager):** Es el gestor de paquetes incluido con Node.js; se encarga de descargar, instalar, actualizar y administrar las librerías o dependencias externas que requiere el proyecto (como Express).
- **VS Code (Visual Studio Code):** Es el editor de código donde se escribe, organiza y depura el proyecto; actúa únicamente como la herramienta de trabajo visual para programar.

---

### La carpeta `node_modules`
- **¿Por qué aparece después de instalar?**  
  Aparece automáticamente cuando se ejecuta `npm install` (o al instalar un paquete específico). En esta carpeta npm descarga y guarda físicamente todo el código de las librerías instaladas junto con todas sus dependencias secundarias necesarias para que funcionen.
- **¿Por qué no debe subirse a GitHub?**  
  1. **Peso excesivo:** Contiene miles de archivos pequeños y puede llegar a pesar cientos de megabytes, ralentizando innecesariamente las operaciones de Git y saturando el repositorio.
  2. **Es redundante y reproducible:** El archivo `package.json` (junto con `package-lock.json`) ya guarda la lista exacta de dependencias y versiones necesarias. Cualquier persona que clone el repositorio puede reconstruir la carpeta completa ejecutando simplemente `npm install`.
  3. **Buena práctica:** Se incluye dentro del archivo `.gitignore` para evitar que Git rastree sus cambios.

## API con Express

### Video de apoyo: Conceptos clave de rutas y respuestas
- **Definición de rutas:** Se configuran usando los métodos del servidor Express (`app.get()`, `app.post()`), indicando el camino o ruta relativa (`path`) y una función controladora (`(req, res) => { ... }`).
- **Envío de respuestas:** Se utiliza el objeto de respuesta (`res`) mediante métodos como `res.send()` o `res.json()` para transferir los datos solicitados y cerrar el ciclo de la petición.

---

### ¿Qué es una ruta?
Una ruta es la asociación entre un método HTTP (como GET o POST), un camino o identificador de recurso en la URL (`path`) y una función controladora que se encarga de procesar la solicitud del cliente y devolver una respuesta adecuada.

---

### Ejemplos de implementación en Express

#### Ejemplo GET (Consultar información)
```javascript
app.get("/api/inscripciones", (req, res) => {
  res.json(inscripciones);
});
```

#### Ejemplo POST (Crear y validar registros)
```javascript
app.post("/api/inscripciones", (req, res) => {
  const { nombre, correo, telefono, taller, horario } = req.body;

  // Validación de campos requeridos
  if (!nombre || !correo || !telefono || !taller || !horario) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  // Validación de formato de correo
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    return res.status(400).json({ error: "El correo electrónico no tiene un formato válido." });
  }

  // Registro del objeto y respuesta satisfactoria
  const nuevoRegistro = {
    id: Date.now(),
    nombre,
    correo,
    telefono,
    taller,
    horario
  };

  inscripciones.push(nuevoRegistro);
  return res.status(201).json(nuevoRegistro);
});
```

---

### Códigos de estado HTTP

- **`200 OK`:** Se emplea cuando una solicitud se procesa de forma exitosa y devuelve datos sin crear un nuevo elemento (por ejemplo, al solicitar la lista de inscripciones mediante GET).
- **`201 Created`:** Se utiliza cuando la petición tiene éxito y resulta en la creación de un nuevo recurso en el servidor (como guardar un nuevo registro de inscripción a través de POST).
- **`400 Bad Request`:** Se devuelve cuando la información enviada por el cliente es incorrecta, incompleta o no supera las validaciones requeridas (por ejemplo, faltan campos obligatorios o el formato del correo es inválido).

---

### Práctica guiada
- **Ruta GET consultada:** `http://localhost:3000/api/inscripciones`
- **JSON obtenido:** `[]` (arreglo vacío al inicio, comprobando el funcionamiento correcto de la lectura en memoria).
- **Uso de `express.json()`:** Middleware necesario para interpretar y transformar el cuerpo de las solicitudes entrantes en formato JSON, haciéndolo accesible desde `req.body`.

## 13. fetch y JSON

### Flujo cliente-servidor (4 pasos)
1. **Capturar:** Se obtienen los valores ingresados por el usuario en los controles del formulario desde el DOM.
2. **Enviar:** El cliente ejecuta `fetch()` mediante el método POST con la cabecera `"Content-Type": "application/json"` y serializa los datos con `JSON.stringify(datos)`.
3. **Procesar:** Express recibe la solicitud, el middleware `express.json()` convierte la cadena entrante a un objeto en `req.body` y se validan los campos.
4. **Responder:** El servidor envía un código de estado HTTP (`201` si fue exitoso o `400` ante errores) junto con la carga de datos en JSON.

---

### Diferencia entre `JSON.stringify()` y `response.json()`
- **`JSON.stringify()`:** Es un método nativo de JavaScript que toma un objeto de memoria y lo convierte en una **cadena de texto (string)** con formato JSON. Se utiliza en el cliente para preparar los datos antes de enviarlos por la red dentro del cuerpo (`body`) de la petición HTTP.
- **`response.json()`:** Es un método asíncrono de la API `fetch` que toma la respuesta sin procesar recibida del servidor (en formato de texto JSON) y la **parsea o transforma de vuelta en un objeto JavaScript** manejable para la interfaz.

---

### ¿Qué representa el estado 201?
El código de estado **`201 Created`** es una respuesta HTTP de éxito que indica que la solicitud fue procesada correctamente y que, como consecuencia directa de ella, **se creó con éxito un nuevo recurso en el servidor** (en este caso, una nueva inscripción registrada).

## Bases de Datos con SQL

### Conceptos clave
- **Tabla:** Estructura que organiza datos en filas (registros individuales) y columnas (atributos o campos).
- **Primary Key (PK):** Identificador único para cada fila dentro de una tabla (por ejemplo, `id`).
- **Foreign Key (FK):** Campo que guarda una referencia a la llave primaria de otra tabla para relacionar datos (por ejemplo, `taller_id` en una tabla de inscripciones).

---

### Diferencia entre DDL y DML

- **DDL (Data Definition Language):**  
  Lenguaje para definir y modificar la **estructura** de la base de datos (tablas, columnas, restricciones). No manipula los registros directamente, sino el esquema donde se almacenarán.  
  *Ejemplo:*
  ```sql
  CREATE TABLE talleres (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    horario TEXT
  );
  ```

- **DML (Data Manipulation Language):**  
  Lenguaje para manipular los **datos o registros** contenidos dentro de las tablas (crear filas, leerlas, modificarlas o borrarlas).  
  *Ejemplos:*
  ```sql
  -- Insertar (crear)
  INSERT INTO talleres (nombre, horario) VALUES ('Desarrollo Web', 'Tarde');

  -- Consultar (leer)
  SELECT id, nombre, horario FROM talleres;

  -- Actualizar (modificar)
  UPDATE talleres SET horario = 'Mañana' WHERE id = 1;

  -- Eliminar (borrar)
  DELETE FROM talleres WHERE id = 1;
  ```

---

### Práctica en SQLite Fiddle
- Se creó la tabla `talleres` y se agregó el registro `'Desarrollo Web'` con horario `'Tarde'`.
- Al aplicar `UPDATE`, el horario cambió exitosamente a `'Mañana'` para el registro con `id = 1`.
- Al ejecutar `DELETE WHERE id = 1`, se removió la fila del taller registrado, dejando la consulta `SELECT` sin resultados.
- **Nota del proyecto:** El servidor actual mantiene las inscripciones en memoria volátil (un arreglo de JavaScript), por lo que se reinician al apagar el servidor; SQL representa la capa de persistencia en disco.

## Control de Versiones con Git: Estados y Práctica Guiada

### Estados de trabajo en Git
1. **Working tree (Árbol de trabajo):** Directorio local donde se crean, editan o eliminan los archivos.
2. **Staging area (Área de preparación):** Espacio intermedio donde se seleccionan con `git add` los cambios listos para ser guardados.
3. **Commit (Repositorio local):** Registro permanente e inmutable de una instantánea del proyecto.
4. **Push (Repositorio remoto):** Sincronización y subida de los commits locales a una plataforma en la nube (como GitHub).

---

### Diferencia entre `add`, `commit` y `push`
- **`git add`:** Selecciona y añade los archivos modificados a la zona de espera (*stage*).
- **`git commit`:** Guarda definitivamente los cambios del *stage* en el historial de la máquina local junto a un mensaje explicativo.
- **`git push`:** Transfiere los commits registrados en la máquina local hacia el repositorio remoto.

---

### Información que comunica un buen mensaje de commit
- Comunica con precisión **qué** se hizo y **por qué** se hizo el cambio, usando verbos claros en modo imperativo/presente (por ejemplo, *"Agrega estructura inicial"* o *"Completa formulario y estilos"*), evitando palabras genéricas como *"arreglos"* o *"actualización"*.

---

### Registro del ejercicio guiado (3 commits)
- **Verificación de `.gitignore`:** Excluye correctamente `node_modules/` y `.env` para evitar subir archivos pesados o credenciales sensibles.
- **Historial de versiones registrado:**
  1. `git commit -m "Agrega estructura inicial"`
  2. `git commit -m "Completa formulario y estilos"`
  3. `git commit -m "Implementa logica de inscripciones y rutas en API Express"`
- **Verificación:** Ejecutado `git log --oneline` para comprobar las tres versiones registradas en el historial local.


## Verificación de Pruebas de Persistencia y CRUD Final

### Matriz de Pruebas Realizadas

1. **Creación (POST):** Se registraron participantes de prueba con datos completos; el servidor respondió con estado 201 y los registros aparecieron inmediatamente en la lista y en los reportes estadísticos.
2. **Consulta (GET):** Se verificó la lectura de la tabla mediante `/api/inscripciones`, recibiendo las filas completas ordenadas por ID descendente.
3. **Actualización (PUT):** Se editaron los campos de taller y modalidad de un registro cargado en el formulario, confirmando la persistencia de los cambios tras pulsar "Actualizar Inscripción".
4. **Eliminación (DELETE):** Se ejecutó el borrado de una inscripción mediante confirmación interactiva, reflejando el decremento en las métricas de reportes y la actualización de la lista.
5. **Persistencia en Disco:** Se reinició el proceso de Node.js en la terminal (`Ctrl + C` y posterior `npm start`). Al recargar el navegador, las inscripciones guardadas se mantuvieron intactas gracias a SQLite.
6. **Diseño Responsivo:** Se verificó la transición fluida de dos columnas a una columna única mediante herramientas de desarrollador en pantallas inferiores a 600 px.