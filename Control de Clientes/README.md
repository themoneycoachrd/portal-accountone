# Control de Clientes y Carga — Account One 2026

## Qué es esto

Una mini aplicación web que muestra el control mensual de clientes de Account One: cuántos hay, quién entró, quién salió, cómo está distribuida la carga entre contadoras, y cuántas transacciones maneja cada una.

Se abre directamente en el navegador. No necesita instalación, servidor ni internet (salvo para cargar la librería de gráficos Chart.js).

## Archivos

```
Control de Clientes/
├── README.md                  ← Este archivo (instrucciones)
├── index.html                 ← La aplicación (abrir en navegador)
├── control-clientes.jsx       ← Versión React para uso dentro de Cowork
├── prompt-excel.md            ← Prompt usado para generar el Excel base
└── DATOS.md                   ← Diccionario de datos y reglas de negocio
```

## Cómo abrir

Doble clic en `index.html`. Se abre en Chrome, Safari, Firefox o Edge. No necesita nada más.

## Cómo funciona

### Navegación

La app tiene tabs en la parte superior:

- **Dashboard** — Vista general del año: indicadores clave, gráficos de evolución, tabla resumen mensual.
- **Carga Actual** — Foto de la distribución actual de clientes y transacciones por contadora (basado en el último mes con datos).
- **Ene, Feb, Mar, ...** — Un tab por mes. Cada mes muestra: total de clientes, quién entró, quién salió, notas, carga por contadora y detalle de clientes con transacciones.

Los meses sin datos aparecen deshabilitados (grises).

### Datos que maneja

Por cada mes se registra:

1. **Total de clientes** al cierre del mes.
2. **Clientes nuevos** — nombres de los que entraron ese mes.
3. **Churn** — nombres de los que salieron ese mes.
4. **Notas** — observaciones relevantes (rebalances, cambios de personal, etc.).
5. **Asignaciones por contadora** — cada contadora con su lista de clientes, y por cada cliente dos valores:
   - **Serv. Contratado** — el valor del servicio contratado.
   - **Según Adm** — el valor según lo registrado en Adm Cloud.

### Indicadores del Dashboard

- **Clientes actuales**: total del último mes con datos.
- **Nuevos en 2026**: suma de todos los clientes nuevos del año.
- **Churn en 2026**: suma de todos los clientes que salieron en el año.
- **Contadoras activas**: cantidad de contadoras con carga (actualmente 5 + Milka como freelance).

### Gráficos

- **Evolución de clientes**: barras con el total por mes.
- **Nuevos vs Churn**: barras comparativas por mes.
- **Transacciones mensuales**: líneas de Serv. Contratado y Según Adm a lo largo del año.
- **Clientes por contadora**: barras horizontales en Carga Actual y en cada mes.
- **Transacciones por contadora**: barras horizontales dobles (Serv. vs Adm).

## Cómo actualizar los datos

Todos los datos viven en el objeto `DATA` dentro de `index.html`. Para agregar un mes nuevo o modificar datos:

1. Abrir `index.html` con un editor de texto.
2. Buscar el objeto `DATA` (está cerca del inicio del bloque `<script>`).
3. Agregar o editar el mes correspondiente siguiendo la estructura existente.

O pedirle a Claude que lo haga. Ejemplo: "Agrega mayo con 30 clientes, entró X, salió Y, y la carga quedó así..."

## Cómo se sincroniza con el Excel

El Excel en SharePoint (`Contador de Clientes y Carga Contadora.xlsx`) es la fuente oficial de datos. La app HTML es una visualización de esos datos. Cuando se actualice el Excel, hay que actualizar la app (o pedirle a Claude que lo haga leyendo el Excel).

El archivo `prompt-excel.md` tiene el prompt original para regenerar el Excel si se necesita.
