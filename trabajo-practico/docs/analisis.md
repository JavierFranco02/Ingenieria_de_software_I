---
title: "Análisis"
layout: default
---

[← Volver al inicio](../../index.md)

# Entrega 2 · Análisis

> *Qué debe hacer el sistema, desde la perspectiva del negocio y del usuario.*

---

## 1. Requisitos funcionales

| ID | Requisito | Prioridad |
|---|---|---|
| RF-01 | [El sistema debe permitir...] | Alta |
| RF-02 | [El sistema debe permitir...] | Alta |
| RF-03 | [El sistema debe permitir...] | Media |
| RF-04 | [El sistema debe permitir...] | Baja |

---

## 2. Requisitos no funcionales

| ID | Requisito | Categoría |
|---|---|---|
| RNF-01 | [ej. El sistema debe responder en menos de 2s] | Rendimiento |
| RNF-02 | [ej. Las contraseñas deben almacenarse cifradas] | Seguridad |
| RNF-03 | [ej. La interfaz debe ser utilizable sin capacitación previa] | Usabilidad |

---

## 3. Modelo de casos de uso

**Diagrama de casos de uso:**

`[Insertar imagen: diagramas/casos-de-uso.png]`

**Especificación de casos de uso principales:**

### CU-01 · [Nombre del caso de uso]

- **Actor(es):** [actor principal / secundarios]
- **Precondición:** [qué debe cumplirse antes]
- **Flujo principal:**
  1. [Paso 1]
  2. [Paso 2]
  3. [Paso 3]
- **Flujos alternativos:** [qué pasa si algo falla o se desvía]
- **Postcondición:** [estado del sistema al finalizar]

*(Repetir esta estructura para cada caso de uso principal.)*

---

## 4. Modelo de dominio

**Diagrama de clases conceptual:**

![Diagrama de clases conceptual del modelo de dominio](../diagramas/modelo-dominio.png)

**Descripción de las entidades:**

- **Usuario:** persona que usa el sistema; su rol (Cajero, Dueño o Producción) define a qué módulos accede. Un Usuario abre Cajas (si es Cajero) y registra Horneadas (si es del área de Producción).
- **Caja:** turno de trabajo del Cajero, desde su apertura con un monto inicial hasta su cierre. Contiene las Ventas del turno y, al cerrarse, queda asociada a un **Arqueo de Caja**, donde se compara el efectivo contado con el esperado.
- **Venta / Detalle de Venta:** una Venta es la compra de un cliente en el mostrador (Punto de Venta) y se compone de una o más líneas, cada una referida a un Producto.
- **Producto:** tipo de chipa a la venta, con su precio y su stock actual. Es el eje del modelo: se vende, se hornea, se entrega a los canasteros y se pide para eventos.
- **Horneada:** lote de unidades de un Producto retirado del horno, que aumenta el stock.
- **Canastero / Salida de Canastero / Detalle de Salida:** el Canastero retira productos por la mañana y devuelve lo que no vendió por la tarde. La Salida guarda lo entregado y lo devuelto de cada Producto, y de ahí se calcula el monto a rendir.
- **Pedido / Detalle de Pedido:** reserva de productos de un cliente para una fecha futura, garantizada con una Seña.

---

## 5. Diagramas de comportamiento
Cada caso de uso principal tiene un diagrama: secuencia para CU-03, CU-05 y CU-08 (donde importa la interacción entre usuario y sistema) y actividad con calles (*swimlanes*) para CU-04 y CU-07 (donde hay decisiones y responsabilidades repartidas entre el Cajero y el Sistema).

### 5.1 Diagrama de secuencia · CU-03 Registrar venta

![Diagrama de secuencia CU-03 Registrar venta](../diagramas/secuencia-cu03-registrar-venta.png)

El Cajero carga los productos en el POS. El sistema consulta el stock antes de agregar cada línea; si alcanza, continúa hasta confirmar y guardar la venta con el descuento de stock en una sola operación, y si no alcanza, avisa al Cajero (flujo alternativo 3a).

### 5.2 Diagrama de actividad con calles · CU-04 Arquear y cerrar caja

![Diagrama de actividad CU-04 Arquear y cerrar caja](../diagramas/actividad-cu04-cierre-caja.png)

Las dos calles separan lo que hace el Cajero (solicitar el cierre, contar el efectivo, registrar la observación y confirmar) de lo que hace el Sistema (mostrar el efectivo esperado, calcular la diferencia y registrar el arqueo). Si la diferencia no es cero, el Cajero debe registrar una observación antes de confirmar; si no confirma, la caja sigue abierta (flujos alternativos 4a y 5a).

### 5.3 Diagrama de secuencia · CU-05 Registrar horneada

![Diagrama de secuencia CU-05 Registrar horneada](../diagramas/secuencia-cu05-registrar-horneada.png)

El Maestro Chipero informa lo que terminó de hornear; el sistema valida la cantidad y, si es correcta, guarda la horneada y actualiza el stock disponible para el mostrador.

### 5.4 Diagrama de actividad con calles · CU-07 Registrar devolución y rendición

![Diagrama de actividad CU-07 Registrar devolución y rendición](../diagramas/actividad-cu07-rendicion-canastero.png)

Muestra la liquidación del canastero al final de la jornada. El Cajero selecciona al canastero e ingresa lo devuelto y el dinero recibido; el Sistema verifica que haya una salida pendiente, valida las cantidades (RN-08), actualiza el stock, calcula el monto a rendir (RN-07) y registra la rendición, con una observación si la diferencia no es cero.

### 5.5 Diagrama de secuencia · CU-08 Registrar pedido con seña

![Diagrama de secuencia CU-08 Registrar pedido con seña](../diagramas/secuencia-cu08-pedido-con-sena.png)

El sistema calcula el total del pedido y solo lo confirma si la seña y la fecha cumplen las reglas del negocio (RN-05 y RN-06).





---

## 6. Prototipo de interfaz (mockups)

**Pantalla — [Nombre de la pantalla]:**

`[Insertar imagen: diagramas/mockup-pantalla1.png]`

[Breve descripción de la interacción que ilustra este mockup.]

*(Repetir para cada pantalla principal.)*

---

## 7. Reglas del negocio

| ID | Regla |
|---|---|
| RN-01 | [ej. Un usuario no puede registrar dos reservas superpuestas] |
| RN-02 | [Regla 2] |

---

## 8. Matriz de trazabilidad

| Requisito | Caso(s) de uso relacionado(s) |
|---|---|
| RF-01 | CU-01 |
| RF-02 | CU-02, CU-03 |
| RF-03 | CU-01 |

---

[← Anterior: Conceptualización](conceptualizacion.md) · [Siguiente: Diseño →](diseno.md)
