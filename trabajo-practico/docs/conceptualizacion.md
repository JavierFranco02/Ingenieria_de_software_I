---
title: "Conceptualización"
layout: default
---

[← Volver al inicio](index.md)

# Entrega 1 · Conceptualización

> *Punto de partida: entender el problema y encuadrar el proyecto.*

---

## 1. Presentación del proyecto

**Nombre del sistema:** ChipeSoft - Sistema Web de Gestión y Ventas para Chipería

**Integrantes del grupo:**

| Nombre | Rol |
|---|---|
| Javier De Jesús Franco Vega | Líder del Proyecto y Desarrollador Backend |
| Adan Sebastián Estigarribia Vargas | Desarrollador Frontend y Diseño de Interfaz |
| Ángel David Invernizzi Franco | Administrador de Base de Datos |
| Brahian Osvaldo Peralta Correa | Control de calidad (QA) |
| Fabián Andrés Giménez Garcete | Desarrollador Fullstack |

**Usuario / cliente real:** La chipería "Chiperia la Caraguateña" de la ciudad de Caraguatay (Cordillera). Es un negocio familiar tradicional dedicado a la elaboración y venta de chipas, operando tanto en un local físico (mostrador) como a través de vendedores ambulantes (canasteros).

---

## 2. Definición del problema

Actualmente, la chipería "Chiperia la Caraguateña" realiza la gestión de sus procesos de forma manual. Las ventas de mostrador se registran a lápiz en cuadernos, el arqueo de caja se calculan sumando el efectivo a mano, el panadero lleva el control de la producción de memoria y las entregas a los canasteros se anotan en hojas sueltas.

Esta falta de un sistema informático genera problemas concretos en el día a día del negocio:
1. **Descuadres en la caja:** Ocurren diferencias frecuentes entre el dinero recaudado y lo anotado en los cuadernos, principalmente por errores al calcular vueltos o ventas no registradas durante las horas de mayor clientela.
2. **Dificultad en el control de stock:** El cajero no tiene visibilidad en tiempo real de cuántas chipas quedan disponibles. Esto provoca que a veces se pierdan ventas por falta de producto, o que se produzca de más y el excedente se desperdicie.
3. **Inconsistencias en las liquidaciones con revendedores:** Resulta complicado calcular el monto exacto que cada canastero debe entregar al finalizar su jornada, ya que los registros en papel de las chipas que llevaron y devolvieron suelen perderse o ser confusos.
4. **Ausencia de estadísticas de venta:** El propietario no cuenta con información rápida y clara sobre cuáles son sus días de mayor venta o los productos más rentables, dificultando la toma de decisiones.

---

## 3. Propósito y objetivos

**Objetivo general:**

Desarrollar un sistema web para la chipería "Chiperia la Caraguateña" que permita agilizar las ventas en mostrador, controlar el stock de producción diaria y facilitar la liquidación de los vendedores ambulantes.

**Objetivos específicos:**

1. **Registrar** las ventas diarias mediante un módulo de Punto de Venta (POS) intuitivo que calcule automáticamente los totales y vueltos.
2. **Controlar** la cantidad de productos terminados, registrando los lotes de producción ("horneadas") para mantener actualizado el stock del mostrador.
3. **Gestionar** las salidas y devoluciones de los canasteros, calculando de forma automática el dinero que deben rendir al final del día.
4. **Generar** reportes visuales básicos para que el propietario pueda consultar los ingresos diarios y semanales del negocio.

---

## 4. Alcance del proyecto

**Incluye (dentro del alcance):**

- **Módulo de Caja (Punto de Venta):** Interfaz para registrar los productos vendidos, calcular totales/vueltos, registrar la forma de pago (efectivo, tarjeta) y realizar la apertura, el arqueo de caja y cierre.
- **Módulo de Producción y Stock:** Opción para registrar el ingreso de nuevas "horneadas" de chipa y mantener un conteo actualizado de los productos listos para la venta.
- **Módulo de Canasteros y Pedidos:** Registro de las unidades entregadas a cada vendedor ambulante por la mañana y las devueltas por la tarde, además de una agenda para pedidos de eventos con una seña.
- **Módulo de Usuarios y Reportes:** Sistema de acceso con usuarios (Cajero, Dueño, Producción) y un panel principal con gráficos de las ventas realizadas.

**No incluye (fuera de alcance):**

- **Control de materia prima:** El sistema no gestionará el inventario de insumos como bolsas de almidón, queso o harina.
- **Facturación electrónica de la SET:** No habrá integración con el sistema SIFEN; solo se generarán comprobantes de uso interno.
- **Pasarela de pagos en línea:** Las ventas cobradas con tarjetas o transferencias se anotarán de forma manual en el sistema como registro, sin conectarse directamente con entidades bancarias.
- **Aplicación móvil para clientes:** El sistema será de uso exclusivo para los empleados de la chipería y no contará con una tienda virtual pública.

---

## 5. Interesados (stakeholders)

| Interesado | Descripción | Interés en el proyecto |
|---|---|---|
| **Cajero / Vendedor** | Empleado encargado de la atención en el local. | Requiere un sistema ágil que calcule correctamente los montos para evitar faltantes de dinero en su turno. |
| **Dueño de la Chipería** | Propietario y administrador del negocio. | Busca tener un mayor control de los ingresos diarios, evitar pérdidas de productos y monitorear el rendimiento comercial. |
| **Maestro Chipero** | Encargado del área de cocina y horneado. | Necesita una función simple para registrar rápidamente las cantidades de chipa que terminan de cocinarse. |
| **Canastero (Revendedor)** | Vendedor ambulante que comercializa los productos en la vía pública. | Espera un proceso de rendición claro y sin errores al finalizar su jornada para evitar malentendidos sobre el dinero a entregar. |
| **Equipo de Desarrollo** | Estudiantes de Ingeniería de Software responsables del proyecto. | Desean desarrollar una aplicación funcional, estable y bien documentada que cumpla con los requisitos académicos de la materia. |

---

## 6. Justificación / viabilidad

**Argumento de conveniencia:** La implementación de ChipeSoft transformará un negocio familiar administrado de forma empírica en un establecimiento informatizado y eficiente. Permitirá eliminar pérdidas económicas causadas por errores humanos en los cierres de caja y en la rendición de los canasteros, garantizando un control riguroso de las ganancias y proporcionando datos reales al propietario para impulsar el crecimiento de su chipería.

**Viabilidad técnica:** El grupo de estudiantes posee o está adquiriendo los conocimientos necesarios en lenguajes como Java y JavaScript, así como en el manejo de bases de datos relacionales, lo que garantiza la capacidad técnica para construir el sistema.

**Viabilidad operativa:** El sistema contará con una interfaz gráfica amigable, con opciones claras y botones accesibles (utilizando Bootstrap), lo que permitirá que el personal de la chipería aprenda a utilizarlo en poco tiempo, independientemente de su nivel de experiencia con computadoras.

**Viabilidad económica:** El proyecto es altamente factible económicamente. Se emplearán lenguajes de programación, frameworks y gestores de bases de datos de código abierto (Open Source), eliminando los costos de licencias de software, lo cual es ideal tanto para un trabajo universitario como para un negocio familiar.

---

## 7. Visión general de la solución

El sistema consistirá en una aplicación web accesible desde una computadora instalada en la chipería. 

Al iniciar el día, el cajero registrará la apertura de su caja. Durante la jornada, cada vez que el maestro chipero finalice una tanda de cocción, ingresará al sistema para sumar esas nuevas unidades al stock. Cuando los clientes compren en el local, el cajero utilizará la pantalla interactiva para seleccionar los productos; el sistema descontará el stock automáticamente y registrará el ingreso del dinero. 

Paralelamente, se registrará la cantidad de chipas que lleva cada canastero por la mañana. Al regresar por la tarde, se anotarán sus devoluciones, y el sistema calculará exactamente cuánto dinero en efectivo debe entregar. Finalmente, el dueño podrá ingresar con su usuario y observar un resumen gráfico de todas las ventas y movimientos del día.

---

## 8. Glosario de términos

| Término | Definición |
|---|---|
| **Horneada / Lote** | Cantidad de productos (chipas) terminados que se retiran del horno en una sola tanda para su comercialización. |
| **Canastero / Revendedor** | Vendedor ambulante que retira productos del local para comercializarlos en la vía pública.|
| **Arqueo de Caja** | Proceso de verificar que el dinero físico en la caja registradora coincida con el total de ventas registrado por el sistema. |
| **Punto de Venta (POS)** | Interfaz principal del sistema donde el cajero registra los productos que adquiere el cliente y efectúa el cobro. |
| **Seña** | Pago anticipado y parcial que realiza un cliente para reservar un pedido grande para una fecha futura. |

---

## 9. Riesgos iniciales

| Riesgo | Impacto | Estrategia de mitigación |
|---|---|---|
**Dificultad de los empleados para adaptarse al nuevo sistema informático.** | Alto | Diseñar una interfaz visualmente limpia y organizar capacitaciones cortas con simulaciones de uso antes de implementar el sistema de forma oficial. |
| **Retrasos en el desarrollo durante el semestre.** | Medio | Dividir el proyecto en etapas, priorizando los módulos de Caja y Stock (Producto Mínimo Viable) para asegurar una entrega funcional a tiempo. |
| **Cambios constantes en los requerimientos solicitados por el dueño.** | Medio | Validar y aprobar formalmente este documento de conceptualización con el cliente antes de iniciar la etapa de programación. |
| **Dificultades técnicas en la integración del Frontend (JS) con el Backend (Java).** | Medio | Utilizar una arquitectura basada en API REST y realizar pruebas de integración de manera frecuente entre los desarrolladores responsables. |

---

## 10. Selección tecnológica preliminar

| Componente | Elección | Justificación breve |
|---|---|---|
**Lenguaje de programación** | Backend: Java / Frontend: JavaScript | Java ofrece gran estabilidad y seguridad para la lógica de negocio y cálculos de ventas. JavaScript permite crear vistas dinámicas y rápidas para el usuario. |
| **Framework** | Spring Boot (Backend) / Bootstrap (Frontend) | Spring Boot agiliza la configuración del servidor y la conexión a la base de datos. Bootstrap facilita el diseño de pantallas adaptables y modernas de forma rápida. |
| **Base de datos** | PostgreSQL | Es un motor relacional gratuito, robusto y muy seguro, ideal para garantizar que no se pierda la información financiera del negocio. |


---

[← Volver al inicio](index.md) · [Siguiente: Análisis →](analisis.md)
