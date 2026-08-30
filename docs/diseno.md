---
title: "Diseño"
layout: default
---

[← Volver al inicio](index.md)

# Entrega 3 · Diseño

> *Cómo se construirá el sistema: arquitectura y detalle técnico.*

---

## 1. Arquitectura del sistema

**Estilo arquitectónico elegido:** [ej. Arquitectura en capas / Cliente-servidor / Microservicios]

**Diagrama de arquitectura:**

`[Insertar imagen: diagramas/arquitectura.png]`

**Justificación:** [por qué se eligió este estilo para este proyecto]

---

## 2. Diagrama de clases de diseño

`[Insertar imagen: diagramas/clases-diseno.png]`

[Breve descripción de las clases principales, sus responsabilidades y relaciones. Indicar patrones de diseño aplicados dentro de este modelo, si corresponde.]

---

## 3. Diseño de base de datos

**Modelo entidad-relación / diagrama físico:**

`[Insertar imagen: diagramas/modelo-er.png]`

**Diccionario de datos (tablas principales):**

### Tabla: [nombre_tabla]

| Campo | Tipo | Restricciones | Descripción |
|---|---|---|---|
| id | [tipo] | PK | [descripción] |
| [campo2] | [tipo] | [ej. NOT NULL] | [descripción] |
| [campo3] | [tipo] | [ej. FK → otra_tabla] | [descripción] |

*(Repetir para cada tabla principal.)*

**Nivel de normalización alcanzado:** [ej. 3FN — breve justificación]

---

## 4. Diagramas de secuencia de diseño

**[Nombre del flujo] — versión técnica:**

`[Insertar imagen: diagramas/secuencia-diseno-flujo1.png]`

[Detalle de clases, componentes y mensajes intercambiados.]

---

## 5. Diseño de interfaz de usuario

**[Nombre de la pantalla] — alta fidelidad:**

`[Insertar imagen o enlace a prototipo navegable: diagramas/ui-pantalla1.png]`

**Prototipo navegable (si aplica):** [enlace a Figma / similar]

---

## 6. Patrones de diseño aplicados

| Patrón | Dónde se aplica | Por qué |
|---|---|---|
| [ej. MVC] | [módulo o capa] | [beneficio que aporta] |
| [ej. Repository] | [módulo o capa] | [beneficio que aporta] |

---

## 7. Diagrama de despliegue

`[Insertar imagen: diagramas/despliegue.png]`

[Descripción de la infraestructura: servidores, servicios, dispositivos cliente y cómo se conectan.]

---

## 8. Plan de pruebas

| Tipo de prueba | Alcance | Criterio de éxito |
|---|---|---|
| Pruebas unitarias | [ej. lógica de negocio en el backend] | [ej. cobertura mínima del 70%] |
| Pruebas de integración | [ej. API ↔ base de datos] | [ej. todos los endpoints responden lo esperado] |
| Pruebas de aceptación | [ej. flujos principales con el usuario real] | [ej. el usuario valida cada caso de uso principal] |

---

## 9. Stack tecnológico final

| Componente | Tecnología confirmada | Justificación final |
|---|---|---|
| Lenguaje de programación | [tecnología] | [justificación] |
| Framework | [tecnología] | [justificación] |
| Base de datos | [tecnología] | [justificación] |
| Otras herramientas | [ej. control de versiones, CI/CD, hosting] | [justificación] |

---

[← Anterior: Análisis](analisis.md)
