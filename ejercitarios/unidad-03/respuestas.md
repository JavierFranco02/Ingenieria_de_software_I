# Respuestas — Ejercitario Unidad 03

> Completen cada pregunta debajo de su enunciado. Pueden borrar este bloque de instrucciones una vez que empiecen.

---

## Tema 1 · El significado de proceso

**1. Define en tus propias palabras qué es un proceso de software.**

_Respuesta: Una serie de actividades que se relacionan para la creación, desarrollo y mantenimiento de un producto de software.


**2. Explica la diferencia entre proceso, metodología y modelo de proceso, con un ejemplo de cada uno.**

_Respuesta:
| Un proceso es una secuencia de pasos o actividades relacionadas para lograr un objetivo, una metodología es el conjunto de reglas, métodos y prácticas que guían cómo aplicar esos pasos, y un modelo de proceso es la representación abstracta o marco teórico que estructura y organiza dicho proceso. |
|---|
| 1. Proceso |
| • Definición: Es la serie de acciones, tareas o fases encadenadas que transforman una entrada en un resultado o producto final. |
| • Enfoque: En el qué se debe hacer de forma general para cumplir una meta. |
| • Ejemplo: El proceso de desarrollo de software (que incluye planificar, analizar, diseñar, codificar, probar y desplegar). |
| 2. Metodología |
| • Definición: Es el conjunto coherente de métodos, técnicas, normas y filosofías que dictan cómo se deben coordinar y ejecutar las tareas dentro de un proyecto o trabajo. |
| • Enfoque: En la guía práctica, la filosofía de trabajo y las pautas específicas de colaboración. |
| • Ejemplo: La metodología Scrum (dentro del desarrollo ágil, que define roles como Scrum Master, artefactos como el Product Backlog y ceremonias como las reuniones diarias). |
| 3. Modelo de Proceso |
| • Definición: Es la representación esquemática, conceptual o simplificada de un proceso que muestra el orden y la relación lógica de sus fases. |
| • Enfoque: En la estructura visual o teórica de cómo fluye el trabajo (si es paso a paso o flexible). |
| • Ejemplo: El modelo en cascada (Waterfall), que representa el proceso de desarrollo de software de forma estrictamente secuencial, donde una fase (como el diseño) debe terminar por completo antes de que empiece la siguiente. |


**3. Enumera las cinco actividades genéricas del marco de trabajo de Pressman.**

_Respuesta:Las cinco actividades genéricas del marco de trabajo del proceso de software, según el autor Roger Pressman en su libro Ingeniería del Software: Un enfoque práctico, son las siguientes:
1. Comunicación: Esta fase inicial implica una colaboración intensa con los clientes y otras partes interesadas. El objetivo es comprender las metas del proyecto y definir los requisitos del software.
2. Planeación: En esta actividad se crea el mapa de ruta para el viaje del desarrollo. Incluye la estimación de riesgos, la definición de los recursos necesarios, los productos de trabajo y el calendario de actividades.
3. Modelado: Consiste en la creación de modelos que permiten al desarrollador y al cliente entender mejor los requisitos del software y el diseño que los satisfará. Se divide en análisis de requisitos y diseño arquitectónico.
4. Construcción: Esta actividad combina la generación de código (programación) y las pruebas necesarias para descubrir errores en el código.
5. Despliegue: El software se entrega al cliente, quien lo evalúa y proporciona comentarios basados en dicha evaluación.


**4. Menciona dos actividades "de la sombrilla" y explica por qué se dice que "cubren" todo el proceso.**

_Respuesta:
| Dos actividades sombrilla: |
|---|
| • Seguimiento y control del proyecto: Permite evaluar el progreso real frente al plan establecido y tomar medidas correctivas para cumplir con la programación. |
| • Gestión del riesgo: Identifica, analiza y mitiga posibles problemas técnicos, de costos o de calendario antes de que afecten el proyecto. |
| ¿Por qué se dice que cubren todo el proceso? |
| • No son secuenciales: A diferencia de las fases principales (como diseño o construcción), no ocurren en un solo momento específico. |
| • Son paralelas y continuas: Se ejecutan de principio a fin durante todas las etapas del ciclo de vida del proyecto. |
| • Brindan soporte global: Su función es supervisar, proteger y asegurar la calidad y el control de todas las actividades estructurales del desarrollo. |


---

## Tema 2 · Modelos de proceso

**5. Completen el siguiente cuadro indicando en qué situación conviene usar cada modelo de proceso visto en clase.**

| Modelo | ¿Cuándo conviene usarlo? |
|---|---|
| Cascada | |
| Incremental | |
| Evolutivo (prototipos) | |
| Evolutivo (espiral) | |
| Concurrente | |

**6. Ejercicio de relación** (completá con el número que corresponda a cada letra):

| Modelo de proceso | Característica principal |
|---|---|
| A. Cascada | ___ |
| B. Incremental | ___ |
| C. Prototipos | ___ |
| D. Espiral | ___ |
| E. Concurrente | ___ |

1. Combina iteración con análisis explícito de riesgo en cada vuelta.
2. Enfoque secuencial y lineal, actividad por actividad.
3. Representa actividades ocurriendo en paralelo, no en secuencia estricta.
4. Entrega el producto en porciones funcionales cada vez más completas.
5. Construye una versión parcial y rápida para validar requisitos poco claros.

**7. Elegí un proyecto de software (hipotético o real) y justificá qué modelo de proceso usarías para desarrollarlo y por qué.**

Elijo Tetravago, un sistema web de reservación de hoteles con búsqueda, reseñas y comentarios de usuarios, donde el administrador puede gestionar varios hoteles.

Usaría el modelo incremental, por estas razones:

Se puede dividir en módulos funcionales. Cada incremento entrega algo utilizable: 1) registro de usuarios y gestión de hoteles, 2) búsqueda y reserva de habitaciones, 3) reseñas y comentarios, 4) panel de administración multi-hotel.
Entrega valor temprano. Con el primer incremento ya se puede mostrar un sistema básico que funciona, sin esperar al producto completo.
Los requisitos principales están claros (reservar, buscar, administrar), pero pueden aparecer mejoras por el camino (filtros, pagos, notificaciones). El incremental permite sumarlas en incrementos posteriores sin rehacer todo.
Es más flexible que cascada, que obligaría a definir todo desde el principio, y más simple que el espiral, que resulta excesivo para un proyecto de este tamaño.
Reduce riesgos, porque se prueba y valida cada módulo por separado antes de integrarlo.


---

## Tema 3 · Iteración de procesos

**8. Explica con tus palabras por qué la mayoría de los procesos modernos son iterativos.**

La mayoría de los procesos modernos son iterativos porque los requisitos casi nunca se conocen completos ni se mantienen estables al inicio de un proyecto. El cliente cambia de opinión, el mercado se modifica o recién entiende lo que necesita cuando ve algo funcionando. Si se intenta planificar y construir todo de una sola vez, un error de comprensión se descubre recién al final, cuando corregirlo es muy costoso.

Con la iteración, el software se construye en ciclos repetidos (planear, diseñar, construir, probar y evaluar). En cada vuelta se obtiene retroalimentación del cliente, se corrigen errores temprano y se ajusta el rumbo. Además, se reducen los riesgos, se entrega valor más rápido y el producto va mejorando de forma progresiva en lugar de depender de una gran entrega final

**9. Menciona una ventaja y una desventaja de trabajar con iteraciones cortas.**

Ventaja	Permiten obtener retroalimentación rápida del cliente y detectar errores o malentendidos a tiempo, cuando corregirlos es barato. También dan sensación de avance constante, ya que siempre hay algo nuevo para mostrar.

Desventaja	Generan más carga de planificación, reuniones y pruebas, porque cada ciclo repite esas tareas. Además, si no hay buena disciplina, la documentación puede quedar descuidada y el diseño global puede degradarse por los cambios continuos

---

## Tema 4 · Especificación, diseño, implementación, validación y evolución

**10. Describan brevemente qué implica cada una de las cuatro actividades fundamentales del proceso de software, según Sommerville.**

| Actividad | Qué implica |
|---|---|
| Especificación | |
| Diseño e implementación | |
| Validación | |
| Evolución | |

**11. Relaciona estas cuatro actividades con las cinco fases del ciclo del software vistas en la Unidad 1 (análisis, diseño, implementación, pruebas, mantenimiento). ¿En qué se parecen y en qué se diferencian?**

_Respuesta:_


---

## Tema 5 · Herramientas y técnicas para modelado de procesos

**12. Menciona dos formas de representar un proceso (no un sistema) y explica brevemente cada una.**

_Respuesta:_


**13. ¿Qué es un patrón de proceso? Da un ejemplo hipotético de un problema recurrente en un proyecto y su solución.**

_Respuesta:_
Un patrón de proceso describe una solución probada a un problema recurrente en el desarrollo de software. Es una plantilla de actividades.

Tipos y ejemplos:

 •  Patrones de Tareas: Definen el detalle de una tarea. Ej: Patrón de Revisión de Requisitos - Pasos: Planificar revisión, distribuir documentos, reunión formal, reportar defectos.
 •  Patrones de Fase: Definen flujo de una fase. Ej: Patrón de Fase de Análisis - Secuencia: Comunicar -> Planificar -> Modelar requisitos -> Construir prototipo -> Validar.
 •  Patrones de Producto: Definen artefactos. Ej: Patrón de Desarrollo Iterativo - Cada iteración produce un incremento ejecutable del producto.


---

## Tema 6 · Ayuda automatizada al proceso

**14. Explica la diferencia entre herramientas Upper-CASE y Lower-CASE.**

_Respuesta:_
UPPER-CASE es la herramienta que se usa al inicio del proyecto, 
en el análisis y el diseño. Sirve para planificar y dibujar qué va a hacer el sistema. Es para el analista. No se programa nada, solo se modela. Ejemplo: cuando haces diagramas UML o el modelo de base de datos en Visual Paradigm o StarUML.

LOWER-CASE es la herramienta que se usa al final, 
cuando ya se va a programar, probar e implementar. Sirve para construir el sistema. Es para el programador. Ejemplo: VS Code para escribir código, GitHub para guardar versiones, JUnit para probar.


**15. Menciona tres herramientas que consideren CASE (de su propia experiencia o investigación) y clasifíquenlas según la categoría a la que pertenecen.**

| Herramienta | Categoría (Upper / Lower / I-CASE) |
UPPER - Para Analizar:
Visual Paradigm, StarUML -> hacen diagramas UML y base de datos.

LOWER - Para Programar:
VS Code, Eclipse -> para escribir código.
Git / GitHub -> para guardar versiones.
JUnit / Selenium -> para probar.

I-CASE - Hace todo:
Enterprise Architect -> hace análisis y código en uno.

**16. Reflexión final:** de los modelos de proceso vistos en esta unidad, ¿cuál elegirían para un proyecto personal? Justifiquen su elección considerando el tamaño del proyecto, el tiempo disponible y el nivel de certeza sobre los requisitos.

_Respuesta:_

