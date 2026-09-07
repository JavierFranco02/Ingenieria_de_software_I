# Guía de Contribución y Flujo de Trabajo

El presente documento establece el flujo de trabajo colaborativo para este repositorio. Con el fin de asegurar la integridad del proyecto y minimizar conflictos de integración, se establece como **norma estricta** no realizar confirmaciones (*commits*) de manera directa sobre la rama `main`. 

**Principio fundamental de ramas:** La rama `main` representa en todo momento la versión oficial, estable y más reciente del proyecto. Por lo tanto, toda nueva rama de trabajo (*branch*) debe crearse única y exclusivamente a partir de una versión actualizada de `main`.

Toda contribución debe desarrollarse en ramas independientes (*branches*) y ser integrada al proyecto principal mediante *Pull Requests* (PR). 

A continuación, se detallan los dos métodos de contribución permitidos.

---

## Método 1: Contribución mediante la interfaz web de GitHub
*Uso recomendado: Correcciones ortográficas, actualizaciones menores de documentación o respuestas a ejercitarios.*

1. Navegar a través de la estructura del repositorio hasta el archivo `.md` deseado.
2. Hacer clic en el ícono de edición (lápiz) ubicado en la esquina superior derecha de la vista del archivo.
3. Realizar las modificaciones necesarias en el editor integrado.
4. Al finalizar, seleccionar el botón **"Commit changes..."** en la parte superior derecha.
5. Completar el formulario de confirmación con un mensaje descriptivo y conciso de los cambios realizados.
6. ⚠️ **Requisito obligatorio:** Seleccionar la opción **"Create a new branch for this commit and start a pull request"**. (No elegir la opción *commit directly to main*).
7. Asignar un nombre representativo a la nueva rama (ej. `nombre/ejercitario-u1`) y seleccionar **Propose changes**.
8. Completar la creación del *Pull Request (PR)*  para habilitar la revisión e integración por parte del equipo. <br>
Está prohibido auto-aprobarse los cambios. Una vez creado el PR, notificar al equipo para que el encargado designado realice la revisión y la fusión (*Merge*) oficial hacia la rama `main`.
---

## Método 2: Trabajo en entorno local (Git CLI)
*Uso recomendado: Creación o modificación de diagramas, reestructuración de directorios, carga de múltiples archivos o desarrollo de código fuente.*

Para operar mediante este método, es necesario tener instalado el cliente de línea de comandos de Git (Git CLI) en el sistema local. Si aún no cuentan con él, deben descargarlo e instalarlo desde su sitio web oficial: <br>
🔗 **Descargar Git aquí:** [https://git-scm.com/downloads](https://git-scm.com/downloads)

### 0. Nociones Básicas de Navegación en la Terminal (Pre-requisito fundamental)
Para utilizar Git en el entorno local (mediante CMD, PowerShell o Git Bash), es indispensable comprender cómo desplazarse por las carpetas del sistema operativo mediante comandos de texto, ya que la terminal no posee una interfaz gráfica (ventanas).

Al iniciar la terminal, esta se abre por defecto en la carpeta principal de tu usuario (por ejemplo, `C:\Usuarios\TuNombre`). Para dirigir la terminal hasta la ubicación exacta donde deseas descargar o modificar el proyecto, debes utilizar el comando `cd` (*Change Directory* / Cambiar Directorio).

**Comandos básicos de navegación:**
* `cd NombreDeLaCarpeta`: Ingresa a una subcarpeta específica que se encuentre dentro de tu ubicación actual. (Ejemplo: `cd Documentos` o `cd Desktop`).
  > 💡 *Tip de productividad (Autocompletado):* Si escribes las primeras letras de una carpeta y presionas la tecla `TAB` en tu teclado, la terminal escribirá el resto del nombre automáticamente. Se recomienda evitar guardar el proyecto en carpetas que tengan espacios en su nombre para facilitar la navegación.
* `cd ..`: Retrocede un nivel hacia la carpeta contenedora anterior. 
  >*(⚠️ **Importante:** Existe un espacio en blanco obligatorio entre la palabra `cd` y los dos puntos `..`).*
* `ls` (en Git Bash) o `dir` (en CMD / PowerShell): Lista todos los archivos y carpetas que existen en tu ubicación actual. Sirve para "mirar a tu alrededor" y verificar que los archivos del proyecto efectivamente están allí.

⚠️ **Aclaración crítica para futuras sesiones de trabajo:**
La terminal no tiene memoria. Una vez que el proyecto esté clonado en tu computadora, la terminal no recordará esa ubicación al cerrarse. **Cada vez que abras la terminal en un nuevo día de trabajo**, deberás navegar de forma manual hasta la carpeta del proyecto antes de poder ejecutar cualquier comando de Git.  
*Ejemplo de ingreso con ruta directa:* `cd Documentos/Universidad/nombre-del-repositorio`

### 1. Clonación del repositorio (Ejecución única inicial)
Descargar el repositorio al entorno local (tu computadora) y acceder al directorio principal del proyecto. Esta acción crea una copia exacta del proyecto vinculada al repositorio oficial:
```bash
git clone https://github.com/JavierFranco02/Ingenieria_de_software_I.git
```
Al ejecutar este comando, se creará automáticamente una carpeta con el nombre del proyecto (en este caso *Ingenieria_de_software_I*). Inmediatamente, **es obligatorio ingresar a esa carpeta** escribiendo:
```bash
cd Ingenieria_de_software_I
```
>*(Nota: El comando `clone` se ejecuta una sola vez para obtener la copia del repositorio. Posteriormente, en futuros días de trabajo, ya no se descarga el proyecto; solo es necesario abrir la terminal y navegar hacia la localización local usando el comando `cd ruta-de-la-carpeta`, como se explica en el [Paso 0](#0-nociones-básicas-de-navegación-en-la-terminal-pre-requisito-fundamental)).*

### 2. Sincronización del entorno local (Pre-requisito de toda tarea)
Antes de iniciar cualquier desarrollo, es fundamental asegurar que la versión local de la rama principal (`main`) esté perfectamente alineada con los últimos avances subidos por el equipo al repositorio remoto:
```bash
git switch main
git pull origin main
```
>*(Nota detallada: Se utiliza `git switch main` para asegurar que estamos posicionados en la rama correcta. Luego, `git pull origin main` descarga e integra las últimas actualizaciones de la nube a tu computadora. Omitir este paso es la principal causa de conflictos de código, ya que se trabajaría sobre una base desactualizada).*

### 3. Creación y transición a una nueva rama de trabajo
Para aislar los cambios y no afectar el código estable, primero se debe crear una nueva rama a partir del `main` actualizado, y luego cambiar el entorno de trabajo hacia ella:

```bash
git branch nombre/descripcion-corta
git switch nombre/descripcion-corta
```
>*(Nota descriptiva: El comando `git branch` únicamente crea la nueva rama, pero el usuario permanece posicionado en `main`. El comando `git switch` es el que efectúa el cambio, moviendo el entorno de trabajo hacia esa nueva rama para poder empezar a editar).*

*(Ejemplos válidos: `git branch javier/diagrama-clases` y luego `git switch javier/diagrama-clases`)*

> 💻 **Fase de Desarrollo:** Una vez posicionados en la nueva rama, **este es el momento exacto para pausar el uso de la terminal y realizar el trabajo.** Pueden abrir los archivos, modificar el texto, agregar imágenes o escribir código utilizando su editor preferido. <br>
> Una vez finalizadas todas las modificaciones, y cuando estén completamente listos para guardar los avances, recién entonces continúen con el [Paso 4](#4-preparación-de-los-cambios-staging).

> *⚠️ Si por algún motivo apagan la PC o cierran la terminal durante esta fase, recuerden que al volver a abrirla deben usar nuevamente el comando `cd` para ingresar a la carpeta del proyecto antes de ejecutar cualquier comando de Git.* <br>

### 4. Preparación de los cambios (*Staging*)
Habiendo finalizado las modificaciones en los archivos, se debe indicar a Git cuáles de esos cambios serán empaquetados. A esto se le llama llevar los archivos al área de preparación:
```bash
git add .
```
>*(Nota: El uso del punto `.` indica la inclusión de todos los archivos modificados, creados o eliminados dentro del directorio actual y sus subdirectorios. **Importante:** Existe un espacio en blanco obligatorio entre la palabra `add` y el punto).*

### 5. Confirmación de los cambios (*Commit*)
Una vez preparados los archivos, se procede a empaquetarlos de forma permanente. Esto equivale a tomar una "fotografía" del estado del proyecto en ese momento exacto:
```bash
git commit -m "Agrega diagrama de casos de uso para el módulo de facturación"
```
>*(Nota: El parámetro `-m` permite adjuntar un mensaje, el cual debe ir siempre entre comillas dobles `""`. Este mensaje es crucial, ya que le explica al resto del equipo qué modificaciones exactas contiene este paquete de cambios).*

### 6. Publicación de la rama en el repositorio remoto
Hasta este punto, todos los cambios existen únicamente de forma local en tu computadora. Para que el equipo pueda verlos, se debe subir la rama al servidor de GitHub. **Reemplazar `nombre-de-la-rama` por el nombre exacto elegido en el [Paso 3](#3-creación-y-transición-a-una-nueva-rama-de-trabajo)**:
```bash
git push origin nombre-de-la-rama
```
>*(Nota explicativa: El comando `git push` toma el paquete de cambios confirmado en el [Paso 5](#5-confirmación-de-los-cambios-commit) y lo empuja hacia el servidor remoto —al cual Git llama internamente `origin`—. De esta forma, la rama y sus modificaciones quedan publicadas en GitHub).*

*(Ejemplo: `git push origin javier/diagrama-clases`)*
### 7. Integración (Pull Request)
Una vez que la rama ha sido subida a GitHub, se debe solicitar formalmente su integración a la rama `main`. Para ello:

1. Acceder a la página principal del repositorio en GitHub.
2. **Localizar la rama subida:**
   * *Vía rápida:* En la parte superior suele aparecer un aviso automático en color amarillo o verde indicando el reciente envío de la rama. Hacer clic en el botón verde **"Compare & pull request"**.
   * *Vía manual (si no aparece el aviso):* Ir a la pestaña **"Pull requests"** (ubicada debajo del nombre del repositorio) y hacer clic en el botón **"New pull request"**. Asegurarse de que en la opción *base* figure `main`, y en la opción *compare* seleccionar la rama recién creada a través del menú desplegable.
3. **Completar la solicitud:** Se abrirá un formulario. Verificar que el título sea descriptivo y, de ser necesario, agregar detalles adicionales sobre los cambios realizados en el cuadro de texto inferior (opcional).
4. Hacer clic en el botón verde **"Create pull request"**.
5. **Fase de Revisión:** Una vez creado el *Pull Request*, tu parte del proceso ha terminado. **Por regla estricta del equipo, ningún integrante debe auto-aprobar o fusionar (*merge*) sus propias ramas.**
6. **Aprobación y Fusión:** Se debe notificar al equipo que el PR está listo. Únicamente el encargado designado del repositorio revisará los cambios y será quien presione el botón **"Merge pull request"** para unirlo al `main` oficial.

---

## Directrices y Buenas Prácticas del Repositorio

* **Restricción de la rama principal:** Queda terminantemente prohibido ejecutar un `git push` directamente hacia la rama `main`. Todo código o texto debe pasar por el proceso de PR.
* **Sincronización previa:** Ejecutar siempre `git pull origin main` antes de crear una nueva rama. Esto previene la generación de ramas a partir de versiones obsoletas del proyecto.
* **Nomenclatura de ramas:** Adoptar convenciones estructuradas para los nombres de las ramas, tal como `nombre/trabajo-a-realizar` *(ej: javier/respuestas-unidad1)*.
* **Gestión de conflictos:** Ante un conflicto de fusión (*merge conflict*), detener la operación y coordinar con el equipo de desarrollo para una resolución manual consensuada.
