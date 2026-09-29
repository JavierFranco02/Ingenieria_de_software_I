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

**Usuario / cliente real:** La chipería "[Nombre de la Chipería]" de la ciudad de Caraguatay (Cordillera). Es un negocio familiar tradicional dedicado a la elaboración y venta de chipas, operando tanto en un local físico (mostrador) como a través de vendedores ambulantes (canasteros).

---

## 2. Definición del problema

Actualmente, la chipería "[Nombre de la Chipería]" realiza la gestión de sus procesos de forma manual. Las ventas de mostrador se registran a lápiz en cuadernos, el arqueo de caja se calculan sumando el efectivo a mano, el panadero lleva el control de la producción de memoria y las entregas a los canasteros se anotan en hojas sueltas.

Esta falta de un sistema informático genera problemas concretos en el día a día del negocio:
1. **Descuadres en la caja:** Ocurren diferencias frecuentes entre el dinero recaudado y lo anotado en los cuadernos, principalmente por errores al calcular vueltos o ventas no registradas durante las horas de mayor clientela.
2. **Dificultad en el control de stock:** El cajero no tiene visibilidad en tiempo real de cuántas chipas quedan disponibles. Esto provoca que a veces se pierdan ventas por falta de producto, o que se produzca de más y el excedente se desperdicie.
3. **Inconsistencias en las liquidaciones con revendedores:** Resulta complicado calcular el monto exacto que cada canastero debe entregar al finalizar su jornada, ya que los registros en papel de las chipas que llevaron y devolvieron suelen perderse o ser confusos.
4. **Ausencia de estadísticas de venta:** El propietario no cuenta con información rápida y clara sobre cuáles son sus días de mayor venta o los productos más rentables, dificultando la toma de decisiones.

---

## 3. Propósito y objetivos

**Objetivo general:**

Desarrollar un sistema web para la chipería "[Nombre de la Chipería]" que permita agilizar las ventas en mostrador, controlar el stock de producción diaria y facilitar la liquidación de los vendedores ambulantes.

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
| [Usuario final] | [quién es] | [qué espera del sistema] |
| [Cliente] | [quién es] | [qué espera del sistema] |
| [Administrador del sistema] | [quién es] | [qué espera del sistema] |

---

## 6. Justificación / viabilidad

**Viabilidad técnica:** [¿el grupo cuenta con el conocimiento o puede adquirirlo?]

**Viabilidad operativa:** [¿el usuario/cliente podrá usar y mantener el sistema?]

**Viabilidad económica (alto nivel):** [¿es razonable en términos de costo/esfuerzo para el contexto del proyecto?]

---

## 7. Visión general de la solución

[Descripción breve, en lenguaje llano y sin detalle técnico, de cómo el grupo imagina que el sistema resolverá el problema planteado.]

---

## 8. Glosario de términos

| Término | Definición |
|---|---|
| [Término 1] | [definición en el contexto del negocio] |
| [Término 2] | [definición en el contexto del negocio] |
| [Término 3] | [definición en el contexto del negocio] |

---

## 9. Riesgos iniciales

| Riesgo | Impacto | Estrategia de mitigación |
|---|---|---|
| [ej. Baja disponibilidad del cliente para validaciones] | [Alto/Medio/Bajo] | [cómo se planea mitigar] |
| [Riesgo 2] | [Alto/Medio/Bajo] | [cómo se planea mitigar] |

---

## 10. Selección tecnológica preliminar

| Componente | Elección | Justificación breve |
|---|---|---|
| Lenguaje de programación | [ej. Python / Java / TypeScript] | [por qué] |
| Framework | [ej. Django / Spring Boot / React] | [por qué] |
| Base de datos | [ej. PostgreSQL / MongoDB] | [por qué] |

---

[← Volver al inicio](index.md) · [Siguiente: Análisis →](analisis.md)
