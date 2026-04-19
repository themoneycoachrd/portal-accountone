# Diccionario de datos - Portal de Ventas

## Fuente de datos

El Excel oficial de ventas vive en SharePoint:
`Documentos compartidos / Equipos y Departamentos / Contador@s / Contador de Clientes y Carga Contadora.xlsx`

La segunda hoja de ese Excel tiene el ROAS histórico. Los datos de pipeline se cargan de la hoja principal de leads.

## Campos por lead

| Campo | Tipo | Descripción |
|---|---|---|
| Nombre (n) | texto | Nombre del contacto |
| Tipo de Empresa (t) | texto | Giro o categoría del negocio |
| Empresa (e) | texto | Nombre de la empresa |
| Temperatura (temp) | Caliente / Tibio / Frio | Qué tan probable es el cierre |
| Fecha Demo (demo) | fecha | Fecha de la demo o primer contacto |
| Paso del Funnel (f) | select | Estado actual en el proceso de venta |
| Implementación (impl) | número | Monto de implementación cotizado en US$ |
| Facturación Electrónica (fe) | número | Monto de FE cotizado en US$ |
| Servicio (serv) | número | Monto de servicio mensual en US$ |
| Software (soft) | número | Monto del software en US$ |
| Descuento (desc) | número | Porcentaje de descuento sobre impl + FE. Default: 25% |
| Notas (notas) | texto | Observaciones libres |

## Pasos del funnel

Los posibles estados de un lead en el proceso de venta:

| Paso | Qué significa |
|---|---|
| Esperando Demo | Se agendó pero todavía no se ha hecho la demo |
| Esperando Cotización | Ya se hizo la demo, falta enviar cotización |
| Cotización Enviada | Se envió la cotización, esperando respuesta |
| Seguimiento | Se está dando seguimiento activo |
| Cerrado Ganado | El lead se convirtió en cliente |
| Cerrado Perdido | El lead decidió no avanzar |
| No Show | No se presentó a la demo |
| No Aplica | No era un prospecto real o se descartó |

## Temperaturas

| Temperatura | Criterio |
|---|---|
| Caliente | Alta probabilidad de cierre, contacto activo |
| Tibio | Interesado pero sin urgencia, puede necesitar seguimiento |
| Frío | Poco interés, contacto mínimo o perdido |

## Campos ROAS por mes

| Campo | Descripción |
|---|---|
| leads | Cantidad total de leads generados ese mes |
| presupuesto | Presupuesto planificado de publicidad en US$ |
| ejecutado | Monto realmente gastado en publicidad en US$ |
| cierres | Cantidad de leads cerrados como ganados |
| vendido | Monto total vendido (facturado) en US$ |
| cotizado | Monto total cotizado (propuestas enviadas) en US$ |
| cpa | Costo por adquisición: ejecutado / cierres |
| retorno | Ganancia neta: vendido - ejecutado |
| roas | Return on Ad Spend: vendido / ejecutado |

## Reglas de negocio

### Cálculo de vendido

El vendido de un lead se calcula así:

`vendido = (impl × (1 - descuento)) + (fe × (1 - descuento))`

El servicio nunca entra en la fórmula del vendido porque no se cobra el primer mes. El software tampoco entraba originalmente, pero a partir de marzo 2026 se empezó a incluir en el vendido (sin descuento).

Resumen por mes:
- Enero y febrero: vendido = impl + fe (sin descuento en enero porque desc=0%, con descuento de 25% en febrero)
- Marzo en adelante: vendido = (impl + fe) × (1 - desc) + software

### Descuento

El descuento estándar es 25% y aplica solo sobre implementación y facturación electrónica. En enero 2026 no se aplicaba descuento (todos los leads tienen desc=0). A partir de febrero se empezó a usar el 25%.

### Ordenamiento de leads

Los leads se muestran en este orden:
1. Cerrado Ganado (arriba de todo)
2. Caliente
3. Tibio
4. Frío

Dentro de cada grupo de temperatura, el orden es el de ingreso.

### Presupuestos futuros

| Periodo | Presupuesto mensual |
|---|---|
| Enero - Febrero 2026 | US$ 500 |
| Marzo - Abril 2026 | US$ 1,000 |
| Mayo - Agosto 2026 | US$ 2,000 |
| Septiembre - Diciembre 2026 | US$ 3,000 |

## Datos verificados

### Enero 2026
- 28 leads totales, 6 cerrados ganados
- Vendido: US$ 11,500 (verificado contra Excel)
- Leads ganados: Oleica Jimenez ($1,000), Nadime Bacha ($2,500), Marie Tic Tag ($2,500), Lizardi Gonzalez ($2,500), Paloma Viajes Pat ($1,500), Carolina Arbaje ($1,500)
- Ejecutado en publicidad: US$ 600
- ROAS: 18.17x

### Febrero 2026
- 25 leads totales, 1 cierre (Phillip Escoto: impl $1,160 + FE $290 = vendido $2,000 con 25% desc... verificar)
- Nota: Febrero tiene registradas 3 entradas de Cerrado Ganado (Phillip Escoto, Johanna Simpson CLC, Johanna Simpson Vitalie, Leinny Jimenez), pero el ROAS del Excel dice 1 cierre y $2,000 vendido. Revisar con Felix si las de Johanna y Leinny se contaron diferente.
- Ejecutado: US$ 495
- ROAS: 3.04x

### Marzo 2026
- 28 leads totales, 6 cerrados ganados
- Vendido: US$ 3,806 (incluye software desde este mes)
- Ejecutado: US$ 949.83
- ROAS: 3.01x

### Abril 2026 (en progreso)
- 15 leads hasta ahora, 2 cierres
- Vendido: US$ 4,698
- Ejecutado: US$ 400
- ROAS: 10.75x

## Persistencia

Los datos se guardan en localStorage del navegador con la clave `accountone_ventas_2026`. El formato es un objeto JSON con dos propiedades: `pipeline` (objeto con un array de leads por cada mes) y `roas` (objeto con métricas por cada mes).

Si se borra el localStorage o se abre en otro navegador, el portal carga los datos semilla (SEED_PIPELINE y SEED_ROAS) que están embebidos en el HTML.
