# Prompt para Claude en Excel

Crea un libro de Excel llamado "Control de Clientes y Carga Account One 2026" con la siguiente estructura y datos. El libro debe servir como control mensual de clientes, carga de contadoras, adiciones y churn.

---

## Estructura del libro

### Hoja 1: "Dashboard"

Un resumen anual con estos indicadores calculados automáticamente a partir de las hojas mensuales:

- Total de clientes actuales (tomar del último mes con datos)
- Clientes nuevos acumulados en 2026
- Churn acumulado en 2026
- Contadoras activas: 5 (Taina, Beliani, Yessica, Karina, Victoria) + Milka como freelance
- Una tabla resumen mes a mes con columnas: Mes | Total clientes | Nuevos | Churn | Neto
- Un gráfico de barras con la evolución mensual de clientes

### Hoja 2: "Carga Actual"

La foto actual de la distribución de clientes por contadora (estado de abril 2026):

| Contadora | Clientes | Cantidad |
|---|---|---|
| Taina | Blackbox, Impact, PSC, MSH, La Fragaria | 5 |
| Beliani | Mv Creative, Iris Laura, Maria Raquel, Oleica, Sosa Arquitectura, Suplident, La Charpente, Unfold | 8 |
| Yessica | Tic Tag, RB Raquel Bencosme, SAV, Enlaces, Kalma, Mj Inversiones | 6 |
| Karina (Gerente de Impuestos) | CLC, Vitalie, Fleximoney | 3 |
| Victoria | Gestaf, Grupisa, Kaizen, Polux, Dr. Maurice Morel, Louis Maurice Morel | 6 |
| Milka (freelance) | Mab Arquitectura | 1 |
| Sin asignar | Dior Legal, Igsan, Domingo Lizardi | 3 |

Incluir un gráfico de barras horizontales mostrando la carga de cada contadora.

Nota importante: Dr. Maurice Morel y Louis Maurice Morel son dos empresas distintas de la misma persona.

### Hojas 3 a 14: una hoja por mes ("Enero", "Febrero", ..., "Diciembre")

Cada hoja mensual debe tener:

1. **Encabezado:** nombre del mes, total de clientes al cierre del mes
2. **Sección "Clientes nuevos":** tabla con nombre del cliente nuevo ese mes
3. **Sección "Churn":** tabla con nombre del cliente que salió ese mes
4. **Sección "Asignación por contadora":** tabla con columnas Contadora | Cliente. Listar cada contadora y debajo sus clientes asignados ese mes.
5. **Sección "Notas":** campo de texto libre para observaciones del mes

### Datos por mes:

**Enero:**
- Total: 28
- Nuevos: La Fragaria, Polux
- Churn: Bonan, Grupo Lisman, Nomad
- Notas: Domingo Lizardi entró pero sigue sin contar como cliente nuevo (pendiente implementación). Beliani y Yessica aún no tenían clientes (en entrenamiento).
- Asignaciones:
  - Yolenny: Mv Creative, PSC, MSH, La Fragaria, Suplident, La Charpente, SAV, Mj Inversiones
  - Milka: Blackbox, Impact, Sosa Arquitectura, Mab Arquitectura
  - Taina: Iris Laura, Maria Raquel, Unfold
  - Yessica: Tricargo, Audiobap, RB Raquel Bencosme, Enlaces, Kalma
  - Karina: CLC, Vitalie, Fleximoney
  - Victoria: Gestaf, Grupisa, Kaizen

**Febrero:**
- Total: 27
- Nuevos: Dr. Maurice Morel, Louis Maurice Morel
- Churn: ninguno
- Notas: Beliani y Yessica en entrenamiento, sin clientes asignados todavía.
- Asignaciones:
  - Yolenny: Mv Creative, PSC, MSH, La Fragaria, Suplident, La Charpente, SAV, Mj Inversiones
  - Milka: Blackbox, Impact, Sosa Arquitectura, Mab Arquitectura
  - Taina: Iris Laura, Maria Raquel, Unfold
  - Yessica: Tricargo, Audiobap, RB Raquel Bencosme, Enlaces, Kalma
  - Karina: CLC, Vitalie, Fleximoney
  - Victoria: Gestaf, Grupisa, Kaizen, Dr. Maurice Morel, Louis Maurice Morel

**Marzo:**
- Total: 29
- Nuevos: Oleica, Tic Tag
- Churn: Tricargo, Audiobap
- Notas: Último mes de Yolenny y Milka a tiempo completo. Beliani y Yessica empezaron entrenamiento en marzo, aún sin carga real.
- Asignaciones:
  - Yolenny: Mv Creative, PSC, MSH, La Fragaria, Suplident, La Charpente, SAV, Mj Inversiones
  - Milka: Blackbox, Impact, Sosa Arquitectura, Mab Arquitectura
  - Taina: Iris Laura, Maria Raquel, Unfold
  - Yessica: Tic Tag, RB Raquel Bencosme, Enlaces, Kalma
  - Karina: CLC, Vitalie, Fleximoney
  - Victoria: Gestaf, Grupisa, Kaizen, Polux, Dr. Maurice Morel, Louis Maurice Morel
  - Beliani: Oleica

**Abril (estado actual):**
- Total: 29
- Nuevos: Dior Legal, Igsan
- Churn: ninguno
- Notas: Rebalance de clientes. Yolenny salió de la empresa. Milka pasa a freelance (solo Mab Arquitectura). Clientes de Yolenny y Milka redistribuidos entre Taina, Beliani y Yessica. Dior Legal, Igsan y Domingo Lizardi pendientes de asignación.
- Asignaciones:
  - Taina: Blackbox, Impact, PSC, MSH, La Fragaria
  - Beliani: Mv Creative, Iris Laura, Maria Raquel, Oleica, Sosa Arquitectura, Suplident, La Charpente, Unfold
  - Yessica: Tic Tag, RB Raquel Bencosme, SAV, Enlaces, Kalma, Mj Inversiones
  - Karina: CLC, Vitalie, Fleximoney
  - Victoria: Gestaf, Grupisa, Kaizen, Polux, Dr. Maurice Morel, Louis Maurice Morel
  - Milka (freelance): Mab Arquitectura
  - Sin asignar: Dior Legal, Igsan, Domingo Lizardi

**Mayo a Diciembre:** hojas vacías con la estructura lista para llenar.

---

## Formato y estilo

- Colores de encabezado: azul marino (#1e3a5f) con texto blanco
- Fuente: Calibri 11pt para datos, 14pt bold para títulos de sección
- Bordes finos en todas las tablas
- Columnas de conteo con formato numérico, centradas
- Condicional: pintar en verde claro las celdas de clientes nuevos, en rojo claro las de churn
- Anchos de columna ajustados al contenido
- Congelar la primera fila en cada hoja para que los encabezados siempre se vean

## Fórmulas clave

- En Dashboard: que el total de cada mes se jale automáticamente de la hoja del mes correspondiente
- En Dashboard: que "Nuevos" y "Churn" cuenten las filas de las secciones correspondientes de cada hoja mensual
- En Carga Actual: que la cantidad por contadora se calcule con COUNTA de la lista de clientes
- Totales generales con SUM
