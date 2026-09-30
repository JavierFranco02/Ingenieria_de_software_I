# Repositorio — Ingeniería de Software I, 4<sup><small>to</small></sup>B T.M.

¡Bienvenidos! Este repositorio centraliza todo el trabajo académico de nuestro grupo para la asignatura **Ingeniería de Software**. Para mantener el orden y facilitar la evaluación, hemos dividido nuestro trabajo en dos grandes ramas: el **Trabajo Práctico Integrador (TPI)** y las resoluciones de los **Ejercitarios** de cada unidad.

**Navegación rápida:**
* [Estructura del Repositorio](#estructura-del-repositorio)
* [Trabajo Práctico Integrador](#trabajo-práctico-integrador)
* [Ejercitarios de la Asignatura](#ejercitarios-de-la-asignatura)
* [¿Cómo aportar al proyecto?](CONTRIBUTING.md)

---

## Estructura del Repositorio

Para separar el código, la documentación web y las tareas teóricas, organizamos las carpetas de la siguiente manera:

```
/ (Raíz del repositorio)
│
├─ /ejercitarios          → Resoluciones de los ejercicios teóricos por unidad.
│   ├─ /unidad-01         → Carpeta específica de la unidad (contiene respuesta.md).
│   └─ /unidad-02
│
└─ /trabajo-practico      → Todo lo relacionado al proyecto principal del semestre.
    ├─ /docs              → Documentación en Markdown (Sitio web oficial de entrega).
    │   ├─ index.md       → Página de inicio del sitio.
    │   ├─ conceptualizacion.md
    │   ├─ analisis.md      
    │   └─ diseno.md
    ├─ /diagramas         → Archivos fuente e imágenes de modelos (UML, mockups, etc.).
    └─ /src               → Código fuente (si se decide implementar el sistema).
```

---

## Trabajo Práctico Integrador

Esta sección contiene el análisis, modelado y diseño del sistema **ChipeSoft**. 

El sitio publicado mediante GitHub Pages a partir de la carpeta `/trabajo-practico/docs` constituye nuestra entrega oficial. **No se enviarán archivos impresos ni copias por otros medios.**

🔗 **Sitio web oficial del proyecto:** `https://javierfranco02.github.io/Ingenieria_de_software_I/`

### Equipo de Trabajo

| Nombre completo | Rol / Responsabilidad principal | Usuario de GitHub |
|---|---|---|
| Javier De Jesús Franco Vega | Líder del Proyecto y Desarrollador Backend | [@JavierFranco02](https://github.com/JavierFranco02) |
| Adan Sebastián Estigarribia Vargas | Desarrollador Frontend y Diseño de Interfaz | [@AdanNat](https://github.com/AdanNat) |
| Ángel David Invernizzi Franco | Administrador de Base de Datos | [@PES-LEGENDARY](https://github.com/PES-LEGENDARY) |
| Brahian Osvaldo Peralta Correa | Control de calidad (QA) | [@peraltabrahian56-bit](https://github.com/peraltabrahian56-bit) |
| Fabián Andrés Giménez Garcete | Desarrollador Fullstack | [@Usu-htan](https://github.com/Usu-htan) |

### Contexto del Proyecto

#### Usuario / cliente real

**Dueña de Chipería "Chiperia la Caraguateña"** — La propietaria de una chipería tradicional ubicada en la ciudad de Caraguatay necesita el sistema para informatizar la gestión comercial de su negocio familiar, reemplazando el registro manual en cuadernos por una herramienta digital que le permita controlar con precisión las ventas de mostrador, el stock de chipas horneadas y las rendiciones diarias de dinero de sus canasteros.

#### Metodología de diseño y desarrollo elegida

**Scrum adaptado al proyecto académico (con artefactos UML)**

Elegimos esta metodología ágil porque se adapta perfectamente al tiempo del semestre universitario y al trabajo en equipo de 5 integrantes. Nos permite organizar el desarrollo en iteraciones cortas (Sprints), donde en cada etapa entregaremos módulos funcionales y probados. 

Esta elección se justifica por las siguientes razones:
1. **Entregas incrementales:** Nos permite priorizar el Producto Mínimo Viable (los módulos de Caja y Stock) para asegurar un sistema funcional a tiempo, dejando reportes y ajustes para sprints posteriores.
2. **División clara del trabajo:** Facilita la distribución de tareas específicas según el rol de cada uno de los 5 integrantes (Backend, Frontend, Base de Datos, QA).
3. **Flexibilidad ante cambios:** Si durante las revisiones con el cliente o el profesor surgen ajustes en los requerimientos, la metodología nos permite adaptarnos sin rehacer todo el proyecto desde cero.

### Entregables del Sistema

| Fase | Estado | Enlace al Documento |
|---|:---:|---|
| 1. Conceptualización | 🔲 Pendiente / ✅ Entregado | [Ver documento](trabajo-practico/docs/conceptualizacion.md) |
| 2. Análisis | 🔲 Pendiente / ✅ Entregado | [Ver documento](trabajo-practico/docs/analisis.md) |
| 3. Diseño | 🔲 Pendiente / ✅ Entregado | [Ver documento](trabajo-practico/docs/diseno.md) |

---

## Ejercitarios de la Asignatura

Aquí alojamos las respuestas grupales a los ejercitarios teóricos y prácticos de cada unidad de la materia. 

### Registro de Actividades

| Unidad | Documento Original de la Cátedra | Resolución del Grupo |
|:---:|---|---|
| **1** | [Guía del ejercitario 01](ejercitarios/unidad-01/unidad-01-vision-previa.pdf) | [Ver respuestas.md](ejercitarios/unidad-01/respuestas.md) |
| **2** | [Guía del ejercitario 02](ejercitarios/unidad-02//unidad-02-ingenieria-de-sistemas.pdf) | [Ver respuestas.md](ejercitarios/unidad-02/respuestas.md) |
| **3** | [Guía del ejercitario 03](ejercitarios//unidad-03/unidad-03-procesos-del-software.pdf) | [Ver respuestas.md](ejercitarios/unidad-03/respuestas.md) |
| **4** | [Guía del ejercitario 04](ejercitarios/unidad-04/unidad-04-requerimientos.pdf) | [Ver respuestas.md](ejercitarios/unidad-04/respuestas.md) |

### Dinámica de Entrega para el Grupo
1. Ingresar al archivo `respuesta.md` de la unidad correspondiente.
2. Editar el archivo y completar las preguntas antes de la fecha límite establecida por la cátedra.
3. Guardar los cambios (*commit*). **El historial de commits en la rama `main` servirá como comprobante de entrega en tiempo y forma.** Ver [CONTRIBUTING.md](CONTRIBUTING.md) para ver cómo aportar al proyecto.

---

