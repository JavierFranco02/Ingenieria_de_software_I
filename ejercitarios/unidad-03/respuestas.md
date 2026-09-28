# Respuestas — Ejercitario Unidad 03

> Completen cada pregunta debajo de su enunciado. Pueden borrar este bloque de instrucciones una vez que empiecen.

---

## Tema 1 · El significado de proceso

**1. Define en tus propias palabras qué es un proceso de software.**

_Respuesta:_


**2. Explica la diferencia entre proceso, metodología y modelo de proceso, con un ejemplo de cada uno.**

_Respuesta:_


**3. Enumera las cinco actividades genéricas del marco de trabajo de Pressman.**

_Respuesta:_


**4. Menciona dos actividades "de la sombrilla" y explica por qué se dice que "cubren" todo el proceso.**

_Respuesta:_


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

_Respuesta:_


---

## Tema 3 · Iteración de procesos

**8. Explica con tus palabras por qué la mayoría de los procesos modernos son iterativos.**

_Respuesta:_


**9. Menciona una ventaja y una desventaja de trabajar con iteraciones cortas.**

_Respuesta:_


---

## Tema 4 · Especificación, diseño, implementación, validación y evolución

**10. Describan brevemente qué implica cada una de las cuatro actividades fundamentales del proceso de software, según Sommerville.**

| Actividad | Qué implica |
|---|---|
| Especificación | Definir qué debe hacer el sistema y sus restricciones de funcionamiento |
| Diseño e implementación | Diseñar la estructura del sistema y escribir el código para construirlo |
| Validación | Probar el software para asegurar que realmente hace lo que el cliente necesita |
| Evolución | Modificar y actualizar el software según cambien las necesidades del usuario o del mercado |

**11. Relaciona estas cuatro actividades con las cinco fases del ciclo del software vistas en la Unidad 1 (análisis, diseño, implementación, pruebas, mantenimiento). ¿En qué se parecen y en qué se diferencian?**

_Respuesta:_

Se parecen en que son prácticamente los mismos conceptos con otro agrupamiento:

- Especificación equivale a Análisis.
- Diseño e implementación agrupa Diseño + Implementación.
- Validación equivale a Pruebas.
- Evolución equivale a Mantenimiento.

La diferencia principal es que las 5 fases tradicionales suelen dar la idea de un camino rígido o secuencial (paso a paso), mientras que esas cuatro actividades se plantean como actividades fundamentales que ocurren de forma continua e iterativa dentro de cualquier proyecto.

---

## Tema 5 · Herramientas y técnicas para modelado de procesos

**12. Menciona dos formas de representar un proceso (no un sistema) y explica brevemente cada una.**

_Respuesta:_

- Diagramas de flujo de proceso: Gráficos que muestran el paso a paso de las actividades de trabajo y las decisiones que cambian el camino.
- Patrones de proceso: Plantillas que describen una solución probada ante un problema recurrente del equipo al desarrollar software, para reutilizarla en futuros proyectos.


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

Elegiría el modelo incremental (o evolutivo por prototipos).
- Tamaño y tiempo: Al ser un proyecto personal y pequeño, hacer una planificación rígida inicial (como en Cascada) quita mucho tiempo.
- Requisitos: Por lo general, en un proyecto propio los requisitos no están 100% claros al inicio. Ir construyendo entregas cortas y funcionales me permite probar la idea rápido e ir ajustándola sobre la marcha sin desperdiciar trabajo.