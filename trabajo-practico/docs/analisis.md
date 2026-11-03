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

**Actores:**

- **Usuario** (actor abstracto): generaliza a los tres actores siguientes; representa lo que tienen en común, que es iniciar sesión.
- **Cajero:** atiende el mostrador, maneja la caja, registra a los canasteros y los pedidos.
- **Maestro Chipero** (rol Producción): registra las horneadas.
- **Dueño:** consulta los reportes del negocio.
- El **Canastero** no es un actor: no usa el sistema, sus movimientos los registra el Cajero.

**Diagrama de casos de uso:**

![Diagrama de casos de uso de ChipeSoft](../diagramas/casos-de-uso.png)

*Notación: las líneas continuas son asociaciones entre actores y casos de uso; la flecha con triángulo hueco es la generalización de actores; las flechas punteadas son relaciones «include» (el caso de uso de origen siempre usa a CU-10) y «extend» (CU-11 amplía a CU-03 solo cuando el pago no es en efectivo).*

**Resumen de casos de uso:**

| ID | Caso de uso | Actor | Requisito |
|---|---|---|---|
| CU-01 | Iniciar sesión | Usuario (Cajero, Maestro Chipero, Dueño) | RF-01 |
| CU-02 | Abrir caja | Cajero | RF-02 |
| CU-03 | Registrar venta | Cajero | RF-04 |
| CU-04 | Arquear y cerrar caja | Cajero | RF-03 |
| CU-05 | Registrar horneada | Maestro Chipero | RF-05 |
| CU-06 | Registrar salida de canastero | Cajero | RF-06 |
| CU-07 | Registrar devolución y rendición | Cajero | RF-07 |
| CU-08 | Registrar pedido con seña | Cajero | RF-08 |
| CU-09 | Consultar reportes | Dueño | RF-09 |
| CU-10 | Actualizar stock (incluido) | Sistema | RF-05 |
| CU-11 | Registrar datos de pago electrónico (extensión) | Cajero | RF-04 |

**Especificación de casos de uso principales:**

### CU-03 · Registrar venta

- **Actor(es):** Cajero
- **Precondición:** El Cajero inició sesión, existe una caja abierta y los productos a vender tienen stock.
- **Flujo principal:**
  1. El Cajero ingresa al Punto de Venta (POS).
  2. Selecciona un producto e indica la cantidad (repite este paso por cada producto).
  3. El sistema verifica el stock, muestra el subtotal de cada línea y el total de la venta.
  4. El Cajero elige la forma de pago: efectivo.
  5. El Cajero ingresa el monto recibido y el sistema calcula el vuelto.
  6. El Cajero confirma la venta.
  7. El sistema registra la venta en la caja abierta, actualiza el stock (CU-10) y emite el comprobante interno.
- **Flujos alternativos:**
  - *3a. Stock insuficiente:* el sistema informa las unidades disponibles y el Cajero corrige la cantidad o quita el producto.
  - *4a. Pago con tarjeta o transferencia:* se ejecuta CU-11 (el Cajero anota la referencia del pago) y el flujo continúa en el paso 6, sin cálculo de vuelto.
  - *5a. Monto recibido menor al total:* el sistema rechaza el monto y solicita uno válido.
  - *6a. El Cajero cancela la venta:* no se registra nada y el stock no cambia.
- **Postcondición:** La venta queda registrada en la caja abierta y el stock de los productos vendidos está descontado.

### CU-04 · Arquear y cerrar caja

- **Actor(es):** Cajero
- **Precondición:** El Cajero inició sesión y tiene una caja abierta.
- **Flujo principal:**
  1. El Cajero solicita el cierre de la caja.
  2. El sistema muestra el efectivo esperado (monto inicial más las ventas en efectivo y las rendiciones de canasteros).
  3. El Cajero cuenta el dinero e ingresa el efectivo contado.
  4. El sistema calcula la diferencia entre el efectivo contado y el esperado.
  5. El Cajero confirma el cierre.
  6. El sistema registra el arqueo, marca la caja como cerrada y muestra el resumen del día por forma de pago.
- **Flujos alternativos:**
  - *4a. La diferencia es distinta de cero:* el sistema solicita una observación obligatoria antes de permitir la confirmación.
  - *5a. El Cajero cancela el cierre:* la caja permanece abierta.
- **Postcondición:** La caja queda cerrada con su arqueo registrado y no admite nuevas ventas.

### CU-05 · Registrar horneada

- **Actor(es):** Maestro Chipero
- **Precondición:** El Maestro Chipero inició sesión con rol Producción.
- **Flujo principal:**
  1. El Maestro Chipero ingresa al módulo de Producción.
  2. Selecciona el producto que terminó de hornear.
  3. Ingresa la cantidad de unidades de la horneada.
  4. Confirma el registro.
  5. El sistema guarda la horneada con fecha, hora y usuario, y suma las unidades al stock (CU-10).
  6. El sistema muestra el stock actualizado del producto.
- **Flujos alternativos:**
  - *3a. Cantidad inválida (cero, negativa o no entera):* el sistema muestra un error y solicita corregirla.
  - *4a. El Maestro Chipero cancela:* no se registra nada.
- **Postcondición:** La horneada queda registrada y el stock del producto aumentó en la cantidad ingresada.

### CU-07 · Registrar devolución y rendición

- **Actor(es):** Cajero
- **Precondición:** El Cajero inició sesión, hay una caja abierta y el Canastero tiene una salida del día pendiente de liquidar (CU-06).
- **Flujo principal:**
  1. El Cajero selecciona al Canastero.
  2. El sistema muestra la salida del día (productos y cantidades entregadas).
  3. El Cajero ingresa las cantidades devueltas de cada producto.
  4. El sistema suma las unidades devueltas al stock (CU-10) y calcula el monto a rendir: (entregadas − devueltas) × precio unitario.
  5. El Cajero ingresa el dinero que efectivamente entrega el Canastero.
  6. El sistema calcula la diferencia, registra la rendición, suma el dinero recibido al efectivo de la caja abierta y marca la salida como liquidada.
- **Flujos alternativos:**
  - *1a. El Canastero no tiene una salida pendiente:* el sistema lo informa y el caso de uso termina.
  - *1b. No hay una caja abierta:* el sistema no permite iniciar la rendición e indica que primero debe abrirse la caja (CU-02).
  - *3a. Cantidad devuelta mayor a la entregada:* el sistema rechaza el dato y solicita corregirlo.
  - *6a. La diferencia es distinta de cero:* el sistema registra la rendición con la diferencia y una observación.
- **Postcondición:** La salida queda liquidada con el monto a rendir y el monto recibido registrados, el stock refleja las devoluciones y el dinero recibido forma parte del efectivo de la caja.

### CU-08 · Registrar pedido con seña

- **Actor(es):** Cajero
- **Precondición:** El Cajero inició sesión.
- **Flujo principal:**
  1. El Cajero selecciona "Nuevo pedido".
  2. Ingresa el nombre y el teléfono del cliente.
  3. Selecciona los productos y las cantidades solicitadas.
  4. Indica la fecha de entrega.
  5. El sistema calcula el total del pedido.
  6. El Cajero ingresa el monto de la seña.
  7. El sistema valida los datos, registra el pedido como confirmado y muestra el saldo pendiente.
- **Flujos alternativos:**
  - *4a. Fecha de entrega anterior a la fecha actual:* el sistema la rechaza y solicita otra.
  - *7a. Seña igual a cero o mayor al total:* el sistema la rechaza y solicita un monto válido.
- **Postcondición:** El pedido queda registrado en la agenda como confirmado, con su seña y su saldo pendiente.

---

## 4. Modelo de dominio

**Diagrama de clases conceptual:**

`[Insertar imagen: diagramas/modelo-dominio.png]`

[Breve descripción de las entidades principales del negocio y cómo se relacionan entre sí, sin detalles de implementación.]

---

## 5. Diagramas de comportamiento

**Diagrama de secuencia / actividad — [Nombre del flujo principal]:**

`[Insertar imagen: diagramas/secuencia-flujo-principal.png]`

[Breve explicación del flujo representado.]

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
