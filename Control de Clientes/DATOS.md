# Diccionario de datos y reglas de negocio

## Contadoras activas (abril 2026)

| Nombre | Rol | Clientes | Serv. Total | Nota |
|---|---|---|---|---|
| Taina | Contadora | 5 | 400 | |
| Beliani | Contadora | 8 | 600 | Entró en marzo, recibió carga en abril |
| Yessica | Contadora | 6 | 350 | Entró en marzo, recibió carga en abril |
| Karina Sánchez | Gerente de Impuestos | 3 | 150 | Maneja clientes por tipo de cuenta, no por volumen |
| Victoria | Contadora | 6 | 300 | |
| Milka | Freelance | 1 | 50 | Solo Mab Arquitectura. Antes era empleada a tiempo completo |

## Contadoras que ya no están

| Nombre | Periodo | Qué pasó |
|---|---|---|
| Yolenny | Ene — Mar 2026 | Salió de la empresa. Tenía 9 clientes que se redistribuyeron en abril |
| Milka (tiempo completo) | Ene — Mar 2026 | Pasó a freelance en abril. Tenía 5 clientes, se quedó solo con Mab |

## Campos por cliente

- **Serv. Contratado**: valor del servicio contratado con el cliente (lo que debería facturar).
- **Según Adm**: valor según lo registrado en Adm Cloud (lo que realmente se está procesando). La diferencia entre ambos puede indicar que un cliente tiene menos actividad de la esperada.

## Reglas de negocio

### Conteo de clientes
- Un cliente cuenta como activo desde que se asigna a una contadora.
- Los clientes "sin asignar" se incluyen en el total pero no en la carga de ninguna contadora.
- Domingo Lizardi entró en enero pero sigue sin contar como cliente nuevo (pendiente implementación).

### Churn
- Un cliente se marca como churn el mes en que efectivamente deja de recibir servicio.
- Tricargo y Audiobap: salieron de la cartera de Yessica/Yolenny en marzo, pero el churn se contabiliza en abril (que es cuando dejaron de ser clientes formalmente).

### Rebalance de abril 2026
- Yolenny salió → sus 9 clientes se repartieron entre Taina, Beliani y Yessica.
- Milka pasó a freelance → sus 4 clientes (menos Mab) se repartieron. Mab se quedó con ella.
- Beliani y Yessica recibieron su primera carga real de clientes en abril.

### Notas sobre clientes específicos
- **Dr. Maurice Morel** y **Louis Maurice Morel**: son dos empresas distintas de la misma persona. Cuentan como dos clientes.
- **Kaizen** (Victoria): no requiere facturación mensual, pero sí atención. Cuenta como cliente activo.
- **Dior Legal, Igsan, Domingo Lizardi**: pendientes de asignación a una contadora.

## Evolución mensual 2026

| Mes | Total | Nuevos | Churn | Serv. | Adm |
|---|---|---|---|---|---|
| Enero | 27 | 2 | 3 | 1,800 | 1,665 |
| Febrero | 29 | 2 | 0 | 1,900 | 1,765 |
| Marzo | 31 | 2 | 0 | 2,000 | 1,790 |
| Abril | 29 | 2 | 2 | 2,000 | 1,780 |

## KPI Scorecard

### Contadoras con KPI

| Contadora | Tier | Objetivo Tx | Nota |
|---|---|---|---|
| Beliani | Contadora I | 1,000 | |
| Yessica | Contadora I | 1,000 | |
| Taina | Contadora II | 500 | Clientes con conciliación bancaria |
| Victoria | Pendiente definir | 500 (provisional) | Ajustar cuando se defina su capacidad |

Karina y Milka no llevan KPI.

### Componentes del KPI

| Componente | Peso | Escala | Puntos máx. |
|---|---|---|---|
| Digitación de transacciones | 50% | 0-10 | 50 |
| Resúmenes de declaración | 30% | 0-10 | 30 |
| Video / Reunión | 20% | 0-10 | 20 |

Total máximo: 100 puntos.

### Reglas de cada componente

**Digitación (50%)**
- Se evalúa: transacciones digitadas del mes vs transacciones asignadas (Según Adm).
- Fecha límite: día 5 del mes siguiente.
- Score = (digitadas / asignadas) × 10, máximo 10.

**Resúmenes de declaración (30%)**
- Se evalúa: resumen entregado por cada cliente asignado.
- Fecha límite: día 25 del mes siguiente.
- Score = (clientes completados / total clientes) × 10, máximo 10.

**Video / Reunión (20%)**
- Ciclo trimestral: meses 1 y 2 del trimestre = video; mes 3 = reunión.
  - Q1: Ene (video), Feb (video), Mar (reunión)
  - Q2: Abr (video), May (video), Jun (reunión)
  - Q3: Jul (video), Ago (video), Sep (reunión)
  - Q4: Oct (video), Nov (video), Dic (reunión)
- Debe realizarse entre el día 20 y 30 del mes.
- Binario: 10 si se realizó, 0 si no.

### Escala de evaluación y bonos

| Rango | Categoría | % del bono | Consecuencia |
|---|---|---|---|
| 90-100 | Excelente | 100% | Bono completo |
| 80-89 | Bueno | 75% | Bono parcial |
| 70-79 | Aceptable | 50% | Bono mínimo |
| 0-69 | Sin bono | 0% | Conversación de mejora |

### Bono trimestral

- Fórmula: 1/3 del salario mensual.
- Ciclo: trimestral (cierre en marzo, junio, septiembre, diciembre).

| Contadora | Salario | Bono base (100%) |
|---|---|---|
| Beliani | 45,000 | 15,000 |
| Yessica | 45,000 | 15,000 |
| Victoria | 45,000 | 15,000 |
| Taina | 60,000 | 20,000 |

Karina y Milka no llevan bono.

### Persistencia de datos

Los datos del KPI se guardan en localStorage del navegador (clave: `accountone_kpi_v2_2026`). Cada contadora puede llenar sus campos y los datos persisten entre sesiones en el mismo navegador.

## Fuente de datos

El Excel oficial vive en SharePoint:
`Documentos compartidos / Equipos y Departamentos / Contador@s / Contador de Clientes y Carga Contadora.xlsx`
