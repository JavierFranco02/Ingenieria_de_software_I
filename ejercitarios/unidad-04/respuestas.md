# Respuestas — Ejercitario Unidad 04

> Completen cada pregunta debajo de su enunciado. Pueden borrar este bloque de instrucciones una vez que empiecen.

---

## Tema 1 · El proceso de requerimientos

**1. Define en tus propias palabras qué es la ingeniería de requerimientos.**

_Respuesta:La ingeniería de requerimientos es el proceso estructurado para definir, documentar y gestionar las necesidades y restricciones que un sistema o software debe cumplir para satisfacer los objetivos de un negocio y las expectativas de los usuarios. Actúa como un puente fundamental entre los clientes y los equipos técnicos.


**2. Explica la diferencia entre "requerimiento", "especificación de requisitos" e "ingeniería de requisitos", con un ejemplo de cada uno.**

_Respuesta:La diferencia principal radica en que un requerimiento es una necesidad puntual expresada por el usuario, la especificación de requisitos es el documento formal y detallado de esas necesidades, y la ingeniería de requisitos es el proceso completo y metódico para obtener, analizar y gestionar dichos elementos.
1. Requerimiento (o Requisito)
• Qué es: Es la condición, necesidad o deseo básico expresado por el cliente o usuario sobre lo que el sistema debe lograr (el "qué").

• Ejemplo: "El usuario necesita una forma rápida de iniciar sesión en la aplicación móvil con su huella digital."

2. Especificación de Requisitos
• Qué es: Es el documento técnico formal, detallado y sin ambigüedades que traduce el requerimiento en reglas claras, alcances y criterios de aceptación para los desarrolladores.

• Ejemplo: El documento oficial de software especifica: "El módulo de autenticación debe soportar biometría mediante la API de huella digital de Android e iOS, devolviendo un error si el escaneo falla tres veces seguidas."

3. Ingeniería de Requisitos
• Qué es: Es la disciplina y el conjunto de fases ordenadas (obtención, análisis, especificación, validación y gestión) que permiten descubrir y mantener los requisitos a lo largo del proyecto.

• Ejemplo: El proceso completo en el que un analista entrevista a los clientes del banco, analiza la viabilidad técnica de la biometría, redacta el documento de especificación y controla los futuros cambios de la app.


---

## Tema 2 · Tipos de requerimientos

**3. Ejercicio de relación** (completen con el número que corresponda a cada letra):

| Tipo de requerimiento | Descripción |
|---|---|
| A. Funcional | 2 |
| B. No funcional | 3 |
| C. Del dominio | 1 |

1. Proviene de las reglas o restricciones propias del área o dominio de negocio.
2. Describe una función o servicio concreto que el sistema debe realizar.
3. Restringe cómo debe comportarse el sistema (desempeño, seguridad, usabilidad, etc.).

**4. Completen el siguiente cuadro comparando los requerimientos de usuario y los requerimientos de sistema.**

| Aspecto | Requerimientos de usuario | Requerimientos de sistema |
|---|---|---|
| Audiencia principal | | |
| Nivel de detalle | | |
| Lenguaje utilizado | | |

**5. Elegí un sistema que conozcas (una app, una plataforma, un sistema de tu universidad o trabajo) y da un ejemplo propio de un requerimiento funcional y uno no funcional para ese mismo sistema.**

_Respuesta: Sistema de control de Llegadas y Salidas
| Aspecto | Requerimientos de usuario | Requerimientos de sistema |
|---|---|---|
| Audiencia principal |La audiencia principal son los usuarios o empleados |Tener vinculada una cuenta o registrar un email de respaldo, tener datos o acceso a internet|
| Nivel de detalle |Simple pero funcional, responde a la experiencia de usuario |Cumple con sus funcionalidades sin bugs |
| Lenguaje utilizado |Java Script |Java Script |

---

## Tema 3 · Características de los requerimientos

**6. Completen el siguiente cuadro indicando qué pregunta permite verificar cada característica de un buen requerimiento.**

| Característica | Pregunta que permite verificarla |
|---|---|
| Correcto | ¿El requisito describe fielmente una necesidad real, válida y autorizada del usuario o negocio? |
| No ambiguo | ¿Tiene el requisito una única interpretación posible para todos los lectores y desarrolladores? |
| Completo | ¿Contiene toda la información necesaria, restricciones, condiciones de borde y respuestas ante excepciones? |
| Verificable | ¿Existe un método objetivo y factible de prueba (test, inspección o demostración) para comprobar que el sistema lo cumple? |

**7. Tomá el requerimiento "El sistema debe ser rápido" y reescribilo de forma que cumpla con las características de un buen requerimiento vistas en clase.**

El requerimiento "El sistema debe ser rápido" es ambiguo y no se puede verificar, porque no dice cuánto es "rápido". segun lo dado en clase seria algo así: "El sistema debe mostrar los resultados de una búsqueda en máximo 3 segundos, con hasta 100 usuarios conectados a la vez." Ahora es claro, no ambiguo, completo (dice qué acción, cuánto tiempo y bajo qué condiciones) y verificable, porque se puede medir con una prueba.


---

## Tema 4 · Obtención y análisis de requerimientos

**8. Enumera las cuatro etapas del ciclo de obtención y análisis de requerimientos vistas en clase.**

1.Descubrimiento de requerimientos.

2.Clasificación y organización.

3.Priorización y negociación.

4.Especificación de requerimientos.


**9. Ejercicio de relación** (completen con el número que corresponda a cada letra):

| Técnica de obtención | Situación en que conviene usarla |
|---|---|
| A. Entrevistas | 3 |
| B. Observación | 1 |
| C. Talleres / workshops | 2 |

1. Cuando el usuario no puede verbalizar fácilmente lo que necesita.
2. Cuando hay varios interesados con visiones distintas que negociar.
3. Cuando se quiere profundizar con un interesado en particular.

---

## Tema 5 · Técnicas de especificación de requerimientos

**10. Completen el siguiente cuadro indicando una ventaja y una limitación de cada técnica de especificación de requerimientos.**

| Técnica | Ventaja | Limitación |
|---|---|---|
| Lenguaje natural estructurado | Es sumamente accesible y fácil de leer para usuarios no técnicos gracias al uso de plantillas estandarizadas (ej. formato IEEE). | Puede volverse muy extenso y mantener cierta ambigüedad sintáctica si no se aplican reglas estrictas de redacción. |
| Casos de uso | Excelente para capturar el comportamiento funcional y modelar interacciones complejas, flujos alternativos y excepciones. | No están diseñados para plasmar requerimientos no funcionales ni detalles de diseño de interfaces. |
| Historias de usuario | Mantienen el foco en el valor del usuario final y promueven la flexibilidad y la comunicación continua en entornos ágiles. | Por sí solas carecen de profundidad técnica y estructural, requiriendo criterios de aceptación detallados para evitar malentendidos. |
| Diagramas (UML) | Proveen una representación visual, precisa y estandarizada que reduce drásticamente la ambigüedad conceptual. | Requieren conocimientos técnicos especializados para su interpretación, lo que dificulta su revisión directa con clientes o usuarios de negocio. |

---

## Tema 6 · Especificaciones formales

**11. ¿Qué es una especificación formal y en qué tipo de sistemas se justifica su uso? Da un ejemplo hipotético de un sistema donde la usarías.**

_Respuesta:_ Una especificación formal es redactar los requerimientos del sistema usando notaciones y fórmulas matemáticas estrictas en lugar de español o lenguaje común. Su gran ventaja es que elimina cualquier tipo de ambigüedad (cada regla matemática tiene un único significado posible). Sin embargo, escribirla y entenderla requiere formación avanzada, por lo que es un proceso muy costoso y complejo. Por esa razón, solo se justifica en sistemas críticos de seguridad (como en aviación, medicina o medicina nuclear), donde si el software falla, las consecuencias pueden ser fatales o generar pérdidas millonarias.
Ejemplo hipotético: El software encargado de controlar la dosificación automática de radioterapia en un equipo médico para pacientes con cáncer. En este caso, un error de interpretación en los requerimientos podría dosificar mal al paciente con consecuencias nefastas, así que se justifica al 100% usar matemáticas exactas para especificar cómo debe funcionar.

---

## Tema 7 · Prototipado de los requerimientos

**12. Explica la diferencia entre un prototipo desechable y un prototipo evolutivo, con un ejemplo de un proyecto donde usarías cada uno.**

_Respuesta:_ La diferencia está en qué se hace con el prototipo una vez que el cliente da su visto bueno:
El Prototipo Desechable se construye de forma súper rápida (muchas veces solo la parte visual o maquetas de pantallas) para que el cliente entienda qué se va a hacer y aclare dudas. Una vez que se aclaran los requerimientos, el prototipo se descarta y el sistema final se programa de cero con buena calidad.
Ejemplo de uso: Para el rediseño de la interfaz móvil de un banco. Se crean maquetas clicables para probar con los usuarios si entienden la navegación, y una vez validado el diseño, se desecha la maqueta y se pasa a desarrollar la app real.
Por otro lado, el Prototipo Evolutivo consiste en construir una primera versión funcional (aunque sea simple). A partir de ahí, se van agregando funciones y mejorándolo gradualmente hasta que se convierte en el producto final entregado al cliente.
Ejemplo de uso: Un sistema web de gestión de inventario para un negocio local. Se construye una primera versión básica que solo registra entradas y salidas de stock, y con el paso de las semanas se van agregando el módulo de ventas, reportes y facturación hasta completar el sistema.

---

## Tema 8 · Técnicas de construcción rápida

**13. Menciona dos técnicas de construcción rápida de prototipos vistas en clase y explica brevemente en qué consiste cada una.**

_Respuesta:_

- Componentes reutilizables: En lugar de programar todo desde cero, se ensambla el prototipo reutilizando bibliotecas, módulos, plantillas o código que ya fue creado previamente para otros proyectos (por ejemplo, usar un módulo de inicio de sesión ya hecho).
- Generación automática de interfaces: Consiste en usar herramientas de software que leen cómo se tiene organizados los datos y crean de forma automática las pantallas, tablas y formularios de entrada sin necesidad de diseñar ni programar cada botón a mano.

---

## Tema 9 · Validación de requerimientos

**14. Completen el siguiente cuadro relacionando cada técnica de validación con el tipo de problema que detecta mejor.**

Técnicas de Validación de Requisitos:

1. Revisión técnica: El equipo lee el documento de requisitos junto.
Detecta: requisitos ambiguos, incompletos o contradictorios.

2. Prototipo: Se hace una maqueta rápida del sistema para mostrar al cliente.
Detecta: malentendidos con el cliente y requisitos que faltan.

3. Casos de prueba: Se crean pruebas a partir de cada requisito.
Detecta: requisitos que no se pueden probar o que no son realistas.

4. Checklist: Se usa una lista de preguntas para verificar.
Detecta: requisitos que no se pueden rastrear y falta de estándares.
---

## Tema 10 · Administración de requerimientos

**15. Explica con tus palabras qué es la trazabilidad de requerimientos y por qué es importante en un proyecto real.**

_Respuesta:_
Es poder seguirle el rastro a un requisito desde donde nació hasta donde termina. 
Desde la idea del cliente, hasta el diseño, el código y la prueba.


---

## Tema 11 · Medición de requerimientos

**16. Menciona dos métricas que se pueden aplicar a los requerimientos de un proyecto y qué información le aporta cada una al equipo.**

_Respuesta:_
1. Estabilidad de requisitos:
Mide cuánto cambian los requisitos. 
Formula: (Requisitos que no cambiaron / Total de requisitos) x 100
Si te da bajo, tu proyecto es muy inestable.

2. Completitud:
Mide si todos los requisitos fueron diseñados y probados.
Formula: (Requisitos con prueba / Total de requisitos) x 100
Lo ideal es que sea 100%, significa que todo lo pedido está cubierto.

**17. Reflexión final:** pensá en un proyecto de software (hipotético o real). Describí qué técnica de obtención, qué técnica de especificación y qué técnica de validación usarías para sus requerimientos, y justificá tu elección considerando el tipo de proyecto y de usuarios.

_MotoGestión_

Un sistema web y móvil diseñado para la administración de stock de repuestos, gestión de turnos y seguimiento de órdenes de trabajo en talleres mecánicos de motocicletas. Sus usuarios clave son los mecánicos (perfil operativo con poco tiempo) y los administradores del taller (enfoque en control financiero y de procesos).

_Técnica de Obtención:_ Observación en Campo y Entrevistas Semiestructuradas

Consiste en realizar shadowing (acompañar al mecánico durante su jornada laboral en el taller) para observar cómo interactúan con las motos, herramientas y registros actuales, complementado con entrevistas breves.

Justificación: Los usuarios operativos suelen omitir detalles cotidianos en una oficina o cuestionario. Ver el flujo real en el taller permite descubrir necesidades críticas del entorno (por ejemplo, que necesitan interfaces con botones grandes o lectura de códigos porque tienen las manos con grasa).

_Técnica de Especificación:_ Historias de Usuario con Prototipos de Baja Fidelidad

Redactar los requerimientos funcionales en formato ágil ("Como mecánico, quiero buscar repuestos escaneando un código de barras para no interrumpir el armado"), acompañados de bocetos esquemáticos de pantallas.

Justificación: Este enfoque mantiene el foco en el valor del usuario y es altamente comprensible tanto para el equipo de desarrollo como para los dueños del taller, facilitando iteraciones rápidas sobre la interfaz.

_Técnica de Validación:_ Prototipado Interactivo y Revisiones (Walkthroughs)

Presentar un prototipo navegable a los usuarios clave para simular escenarios reales de uso (como registrar el ingreso de una moto siniestrada).

Justificación: Al ser un entorno dinámico, validar mediante prototipos visuales permite detectar malentendidos, requerimientos ambiguos o funciones innecesarias antes de escribir código, asegurando que el producto final sea exacto y útil.
