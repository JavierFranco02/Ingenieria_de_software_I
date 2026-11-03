# Respuestas — Ejercitario Unidad 05

> Completen cada pregunta debajo de su enunciado. Pueden borrar este bloque de instrucciones una vez que empiecen.
> Las imágenes (diagramas, capturas, wireframes) se suben a esta misma carpeta y se enlazan así: `![descripción](nombre-archivo.png)`

---

## Tema 1 · El diseño en la ingeniería de software

**1. Explica con tus palabras la diferencia entre diseño conceptual y diseño técnico (detallado). Da un ejemplo de una decisión de cada tipo para un sistema de gestión de una biblioteca.**

_Respuesta:_


**2. Completa el siguiente cuadro sobre los elementos del modelo de diseño.**

| Elemento del diseño | ¿Qué define? | Ejemplo en un sistema de inscripciones |
|---|---|---|
| Diseño de datos |  |  |
| Diseño arquitectónico |  |  |
| Diseño de interfaces |  |  |
| Diseño de componentes |  |  |


---

## Tema 2 · Conceptos fundamentales de diseño

**3. Ejercicio de relación** (completen con el número que corresponda a cada letra):

| Concepto | Número |
|---|---|
| A. Abstracción | ___ |
| B. Refinamiento progresivo | ___ |
| C. Ocultamiento de información | ___ |
| D. Separación de intereses | ___ |
| E. Patrón | ___ |
| F. Refactorización | ___ |

1. Mejorar la estructura interna sin cambiar el comportamiento externo.
2. Cada módulo esconde sus decisiones internas y solo expone su interfaz.
3. Solución probada a un problema de diseño que se repite en un contexto dado.
4. Concentrarse en lo esencial e ignorar los detalles irrelevantes en ese nivel.
5. Dividir un problema en partes que se puedan resolver y modificar de forma independiente.
6. Agregar detalle en pasos sucesivos, partiendo de una descripción general.

**4. Aplica refinamiento progresivo a la tarea "Registrar una venta en un comercio": escribí al menos tres niveles de detalle, refinando en el tercer nivel uno de los pasos del segundo.**

_Respuesta:_


---

## Tema 3 · Descomposición y modularidad

**5. Explica por qué no conviene dividir un sistema ni en muy pocos ni en demasiados módulos. ¿Qué costos aumentan en cada extremo?**

_Respuesta:_


**6. Para un sistema de gestión de un consultorio médico, propone dos descomposiciones distintas e indica qué módulos tendría cada una.**

| Estrategia | Módulos propuestos |
|---|---|
| Por capas | Presentación (Interfaz web/móvil para médicos y pacientes), Lógica de negocio (Gestión de turnos, validación de historias clínicas y reglas de atención), y Acceso a datos (Consultas y transacciones con la base de datos de pacientes, médicos y recetas) |
| Por dominio | Módulo de Pacientes (admisión e historia clínica), Módulo de Citas/Agendamiento (gestión de turnos y agendas médicas), Módulo de Facturación (cobros, obras sociales y pagos), y Módulo de Farmacia/Recetas (emisión de recetas y control de medicamentos). |


---

## Tema 4 · Cohesión y acoplamiento

**7. Indica el tipo de cohesión de cada módulo (coincidental, lógica, temporal, procedimental, comunicacional, secuencial o funcional) y justifica brevemente.**

| Módulo | Tipo de cohesión y justificación |
|---|---|
| a) "Utilidades": FormatearFecha, EnviarCorreo y CalcularIVA. | Coincidental: Agrupa tareas sin relación entre sí por mera casualidad. |
| b) "IniciarSistema": abre la conexión a la base, carga la configuración y borra archivos temporales. | Temporal: Las tareas están agrupadas únicamente porque ocurren en el mismo momento (durante el arranque). |
| c) "CalcularPromedioAlumno": obtiene las notas de un alumno y devuelve su promedio. | Funcional: Todas las partes del módulo contribuyen a una única tarea bien definida. |
| d) "ProcesarOperacion": recibe un código y, según su valor, imprime, guarda o elimina un registro. | Lógica: Agrupa elementos lógicamente relacionados donde la ejecución de uno u otro es seleccionada por un parámetro o selector interno. |
| e) Lee un registro, lo valida y, con el registro ya validado, calcula su total. | Secuencial: Las salidas o datos procesados en un paso sirven como entrada para el siguiente paso dentro de una secuencia lógica. |

**8. Indica el tipo de acoplamiento en cada caso (de datos, por estampado, de control, externo, común o de contenido).**

| Situación | Tipo de acoplamiento |
|---|---|
| a) El módulo A llama a B pasándole solo el idAlumno. | De datos: Se pasan únicamente los datos necesarios como parámetros simples. |
| b) A le pasa a B una bandera modo = "imprimir" / "guardar" que decide qué hace B. | De control: Un módulo le pasa a otro un indicador o bandera que controla el flujo y la lógica interna del receptor. |
| c) Varios módulos leen y modifican la variable global TotalVentas. | Común: Múltiples módulos comparten y dependen de un mismo bloque de datos globales. |
| d) A modifica directamente un atributo privado de B. | De contenido: Un módulo accede o modifica directamente los datos internos de otro, violando el ocultamiento de información. |
| e) A le pasa a B el objeto Alumno completo, aunque B solo usa la fecha de nacimiento. | Por estampado: Se pasa una estructura de datos completa (objeto compuesto) aunque el módulo receptor solo utilice una porción de ella. |

**9. Explica por qué la alta cohesión y el bajo acoplamiento suelen ir de la mano. Da un ejemplo.**

_Respuesta:_

La alta cohesión implica que un módulo se enfoca en una única responsabilidad bien definida. Al estar tan enfocado y autocontenido, necesita intercambiar poca información con el exterior y requiere mínimos detalles de otros componentes, lo que de forma natural reduce sus dependencias (bajo acoplamiento). Por el contrario, un módulo mal cohesionado que mezcla múltiples tareas dispersas inevitablemente requerirá múltiples datos y llamadas externas, elevando su acoplamiento.
Ejemplo: Un módulo funcional dedicado exclusivamente a ValidarMatriculaMedico solo necesita recibir el número de matrícula y consultar la base de datos de forma directa y limpia (alta cohesión y bajo acoplamiento). Si el mismo módulo se encargara además de cobrar la consulta, enviar correos y actualizar el inventario (baja cohesión), se vería obligado a acoplarse con múltiples subsistemas y variables globales de la aplicación.

---

## Tema 5 · Arquitectura y estilos arquitectónicos clásicos

**10. Ejercicio de relación** (completen con el número que corresponda a cada letra):

| Estilo arquitectónico | Número |
|---|---|
| A. En capas | 5 |
| B. Cliente-servidor | 4 |
| C. Centrado en datos (repositorio) | 2 |
| D. Tuberías y filtros | 1 |
| E. Modelo-Vista-Controlador | 3 |

1. Un compilador: análisis léxico → sintáctico → semántico → generación de código.
2. Un entorno de desarrollo donde editor, depurador y analizador comparten un modelo central del proyecto.
3. Una aplicación web donde un controlador recibe el pedido, actualiza el modelo y elige qué vista mostrar.
4. Un cajero automático que consulta al servidor del banco para cada operación.
5. Un sistema contable organizado en presentación, lógica de negocio y acceso a datos.

**11. Dibujá o describí la arquitectura en capas de un sistema que conozcas (de tu trabajo, de la universidad o una app de uso diario), indicando la responsabilidad de cada capa. Si lo dibujan, agreguen la imagen al repositorio y enlácenla en la respuesta.**
Sistema elegido: sistema de reservación de hoteles en la web (tipo Trivago).

Presentación	Mostrar la información al usuario (búsqueda de hoteles, detalle de habitaciones, formulario de reserva) y recibir sus acciones. No contiene reglas de negocio ni accede directo a la base de datos.

Lógica de negocio	Aplicar las reglas del sistema: verificar que la habitación esté disponible en las fechas pedidas, calcular el precio total, impedir reservas superpuestas y confirmar la reserva.

Acceso a datos	Ejecutar las consultas y transacciones necesarias (guardar una reserva, buscar habitaciones libres), ocultando a la capa de negocio los detalles de la base de datos.

Base de datos	Almacenar de forma persistente los hoteles, habitaciones, clientes y reservas.


Reglas del estilo: cada capa solo usa la capa inmediatamente inferior. Si se cambia el motor de base de datos, solo se modifica el acceso a datos. Si se agrega una app móvil, se reutiliza la lógica de negocio existente.

---

## Tema 6 · Estilos actuales y estrategia de selección

**12. Completa el siguiente cuadro comparativo.**

| Aspecto | Monolito modular | Microservicios |
|---|---|---|
| Despliegue | Una sola unidad: simple de publicar. | Cada servicio se despliega por separado: requiere automatización. |
| Escalado |Se escala la aplicación completa.  |  Se escala solo el servicio que lo necesita.|
| Complejidad operativa | Baja. | Alta: red, monitoreo, trazas y fallos parciales. |
| ¿Cuándo conviene? | Equipos chicos y dominio aún cambiante. | Equipos grandes y autónomos, o partes con cargas muy distintas. |

**13. Una empresa nueva con tres desarrolladores quiere empezar su producto directamente con quince microservicios. ¿Qué le recomendarías y por qué?**

1. Complejidad operativa desproporcionada. Quince servicios implican quince despliegues, monitoreo, trazas y manejo de fallos parciales de red. Tres desarrolladores gastarían más tiempo en infraestructura que en el producto.
   
2. El dominio todavía está cambiando. En una empresa nueva los límites del negocio se descubren con el tiempo. Si se separan mal los servicios, corregirlo es caro porque hay que mover datos y contratos entre servicios.
   
3. Consistencia de datos. Con una base por servicio, las transacciones simples pasan a ser un problema difícil. En un monolito hay una sola base y transacciones simples.
   
4. Escala real inexistente. Los microservicios se justifican cuando hay equipos grandes y autónomos o partes con cargas muy distintas, y ninguna de esas condiciones se da aquí.

Recomendación concreta: un monolito dividido en módulos con límites claros (alta cohesión y bajo acoplamiento, organizados por dominio). Más adelante, si un módulo necesita escalar de forma independiente o el equipo crece, ese módulo puede extraerse como microservicio. Esto aplica el principio KISS: la solución más simple que resuelve el problema suele ser la mejor.


**14. Para cada escenario, indica el atributo de calidad prioritario y un estilo arquitectónico que lo favorezca.**

| Escenario | Atributo prioritario | Estilo que lo favorece |
|---|---|---|
| Plataforma de venta de entradas con picos enormes de demanda al abrir la venta. | Escalabilidad (junto con disponibilidad) | Microservicios o arquitectura orientada a eventos, con componentes sin estado que se escalan por separado (por ejemplo, el servicio de compra). |
| Sistema bancario de transferencias entre cuentas. | Seguridad (junto con confiabilidad y consistencia de datos) | Arquitectura en capas, con controles en los bordes y mínima superficie expuesta, sobre una base de datos transaccional única. |
| Sistema académico cuyas reglas de inscripción cambian cada semestre. | Mantenibilidad | Arquitectura en capas o monolito modular, con la lógica de negocio aislada en su propia capa o módulo, de alta cohesión y bajo acoplamiento, para cambiar las reglas sin tocar el resto. |


---

## Tema 7 · Características de un buen diseño

**15. Menciona las tres directrices de calidad de Pressman para un buen diseño y explica una de ellas con un ejemplo propio.**
Según Pressman, un buen diseño debe cumplir como mínimo estas tres condiciones:

1. Implementar los requerimientos. Debe satisfacer todos los requerimientos explícitos del modelo de requerimientos y también los implícitos que el cliente espera.
   
2. Ser legible y comprensible. Debe poder ser entendido por quienes van a construirlo, probarlo y mantenerlo.

3. Dar una visión completa. Debe describir los datos, las funciones y el comportamiento desde la perspectiva de la implementación.

Explicación de una directriz con un ejemplo propio: “Implementar los requerimientos”

Esta directriz exige que el diseño cubra todo lo que el sistema debe hacer, incluso lo que el cliente no escribió pero da por hecho.

Ejemplo: en un sistema web de reservación de hoteles, el requerimiento explícito es “el usuario puede reservar una habitación para unas fechas”. El diseño debe cubrir eso, pero también los requerimientos implícitos: que el sistema no permita reservar dos veces la misma habitación en las mismas fechas, que los datos de pago viajen de forma segura y que el usuario reciba una confirmación. Si el diseño solo contempla el formulario de reserva y omite la verificación de disponibilidad, aunque nadie la haya pedido por escrito, no cumple la directriz.



**16. Ejercicio de relación** (completen con el número que corresponda a cada letra):

| Síntoma | Número |
|---|---|
| A. Rigidez | ___ |
| B. Fragilidad | ___ |
| C. Inmovilidad | ___ |
| D. Repetición innecesaria | ___ |

1. La misma lógica está copiada en varios lugares del sistema.
2. Cuesta reutilizar un componente porque arrastra demasiadas dependencias.
3. Un cambio simple obliga a modificar muchos módulos.
4. Un cambio rompe partes que aparentemente no tenían relación.


---

## Tema 8 · Principios SOLID

**17. Completa el cuadro con el nombre de cada principio y lo que propone, en una oración.**

| Letra | Principio | ¿Qué propone? |
|---|---|---|
| S |  |  |
| O |  |  |
| L |  |  |
| I |  |  |
| D |  |  |

**18. Analiza la siguiente clase: "ReporteVentas obtiene las ventas desde SQL Server, calcula los totales, arma un PDF y lo envía por correo". ¿Qué principio SOLID viola principalmente? Propone una mejor distribución de responsabilidades (nombres de clases o interfaces y qué hace cada una).**

_Respuesta:_


---

## Tema 9 · Evaluación y validación del diseño

**19. Explica la diferencia entre una revisión técnica del diseño y una prueba del software. ¿Por qué conviene revisar el diseño antes de programar?**

_Respuesta:_


**20. Completa la matriz de trazabilidad para un sistema de biblioteca, indicando qué elementos de diseño (módulos, clases, interfaces, pantallas) satisfacen cada requerimiento.**

| Req. | Descripción | Elementos de diseño que lo satisfacen |
|---|---|---|
| RF-01 | Registrar el préstamo de un libro a un socio. |  |
| RF-02 | Avisar por correo al socio cuando vence un préstamo. |  |
| RF-03 | Buscar libros por título, autor o tema. |  |
| RNF-01 | Solo el personal de la biblioteca puede registrar préstamos. |  |


---

## Tema 10 · Diseño de la interfaz de usuario

**21. Para cada regla de oro, da un ejemplo de una aplicación o sitio que la cumpla y otro que la viole.**

| Regla de oro | Ejemplo que la cumple | Ejemplo que la viola |
|---|---|---|
| Dar el control al usuario |  |  |
| Reducir la carga de memoria |  |  |
| Lograr una interfaz consistente |  |  |

**22. Realiza el análisis previo al diseño de la interfaz para la aplicación de autogestión de alumnos de la universidad.**

| Aspecto | Descripción |
|---|---|
| Usuarios |  |
| Tareas principales |  |
| Entorno de uso |  |


---

## Tema 11 · Usabilidad, accesibilidad y prototipos

**23. Evaluación heurística: elijan una pantalla real (de un sitio web o una app que usen), agreguen una captura al repositorio e identifiquen al menos tres problemas de usabilidad o accesibilidad.**

| Problema detectado | Heurística de Nielsen violada | Mejora propuesta |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |

**24. Elijan una pantalla clave del sistema de su Trabajo Práctico y dibujen su wireframe (puede ser la foto de un boceto en papel, agregada al repositorio). Indiquen qué regla de oro o heurística tuvieron en cuenta en al menos dos decisiones.**

_Respuesta:_


**25. Reflexión final: ¿qué estilo arquitectónico proponen para el sistema de su Trabajo Práctico y por qué? Justifiquen la elección con al menos dos atributos de calidad del sistema.**

_Respuesta:_
