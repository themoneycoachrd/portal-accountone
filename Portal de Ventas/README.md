# Portal de Ventas - Account One

## Qué es esto

Un dashboard para trackear el pipeline de ventas de Account One y medir el retorno sobre la inversión publicitaria (ROAS) mes a mes. Todo en un solo archivo HTML que corre en el navegador sin necesidad de servidor.

## Cómo usarlo

Abrir `ventas.html` en cualquier navegador. No necesita instalación ni conexión a internet (excepto la primera carga de Chart.js desde CDN).

Los datos se guardan automáticamente en el localStorage del navegador con la clave `accountone_ventas_2026`. Esto significa que los datos persisten entre sesiones en el mismo navegador, pero no se comparten entre navegadores o dispositivos distintos.

## Estructura del portal

El portal tiene dos tabs principales:

**Tab ROAS**: Muestra el rendimiento de la inversión publicitaria. Arriba tiene dos filas de tarjetas resumen (Leads, CPL, Cierres, CPA, % de Cierre en la primera; Ejecutado, Monto Vendido, Retorno y ROAS en la segunda). Abajo una tabla mensual con detalle por mes, solo mostrando los meses que ya tienen datos. Las celdas de la tabla son editables: haces clic en un valor, lo cambias y se guarda.

**Tab Pipeline**: El pipeline de leads mes a mes. Cada mes muestra estadísticas de ROAS compactas (Total Leads, Cierres, % Cierre, Total Cotizado, Invertido, Total Vendido, Ganancia, ROAS), un desglose visual del funnel, y la tabla de leads con todos sus detalles. Puedes agregar leads nuevos, editarlos, eliminarlos y buscar por nombre.

## Navegación

Cada tab tiene pestañas de mes (enero a diciembre). En el Pipeline, hay una barra de búsqueda para filtrar leads por nombre, empresa o tipo de empresa. Los leads se ordenan automáticamente: primero los cerrados ganados, luego por temperatura (Caliente, Tibio, Frío).

## Fórmulas clave

**Vendido por lead**: Se calcula como (Implementación + FE) multiplicado por (1 - descuento). El servicio nunca se incluye en el vendido. El software se incluye solo a partir de marzo 2026.

**Descuento**: Por defecto es 25% y aplica solo sobre implementación y FE. Los leads de enero tienen descuento en 0% porque en ese mes no se aplicaba descuento.

**ROAS**: Total Vendido dividido entre el Presupuesto Ejecutado del mes.

**Ganancia**: Total Vendido menos Invertido.

## Datos precargados

El portal viene con datos reales de enero a abril 2026, tanto en ROAS como en Pipeline. Los meses de mayo a diciembre están vacíos, listos para llenarse. Los presupuestos futuros están pre-configurados: mayo a agosto en $2,000 y septiembre a diciembre en $3,000.

Si ya tienes datos guardados en localStorage y se actualiza el archivo con nuevos datos semilla, el sistema detecta meses vacíos y los llena automáticamente sin pisar lo que ya editaste.

## Dependencias

Una sola: Chart.js 4.4.1, cargada desde CDN de Cloudflare. Todo lo demás es HTML, CSS y JavaScript vanilla.

## Moneda

Todos los valores están en dólares estadounidenses (US$).
