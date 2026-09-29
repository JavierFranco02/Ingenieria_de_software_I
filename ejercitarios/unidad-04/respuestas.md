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
| A. Funcional | ___ |
| B. No funcional | ___ |
| C. Del dominio | ___ |

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

_Respuesta:_


---

## Tema 3 · Características de los requerimientos

**6. Completen el siguiente cuadro indicando qué pregunta permite verificar cada característica de un buen requerimiento.**

| Característica | Pregunta que permite verificarla |
|---|---|
| Correcto | |
| No ambiguo | |
| Completo | |
| Verificable | |

**7. Tomá el requerimiento "El sistema debe ser rápido" y reescribilo de forma que cumpla con las características de un buen requerimiento vistas en clase.**

_Respuesta:_


---

## Tema 4 · Obtención y análisis de requerimientos

**8. Enumera las cuatro etapas del ciclo de obtención y análisis de requerimientos vistas en clase.**

_Respuesta:_


**9. Ejercicio de relación** (completen con el número que corresponda a cada letra):

| Técnica de obtención | Situación en que conviene usarla |
|---|---|
| A. Entrevistas | ___ |
| B. Observación | ___ |
| C. Talleres / workshops | ___ |

1. Cuando el usuario no puede verbalizar fácilmente lo que necesita.
2. Cuando hay varios interesados con visiones distintas que negociar.
3. Cuando se quiere profundizar con un interesado en particular.

---

## Tema 5 · Técnicas de especificación de requerimientos

**10. Completen el siguiente cuadro indicando una ventaja y una limitación de cada técnica de especificación de requerimientos.**

| Técnica | Ventaja | Limitación |
|---|---|---|
| Lenguaje natural estructurado | | |
| Casos de uso | | |
| Historias de usuario | | |
| Diagramas (UML) | | |

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

_Respuesta:_
