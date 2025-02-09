# Simulador de Ventas Mensuales

Este proyecto es una aplicación web interactiva que permite a los usuarios simular y visualizar las ventas mensuales de una empresa. Los usuarios pueden ingresar datos de ventas para cada mes, visualizarlos en un gráfico interactivo y obtener estadísticas básicas como el total y el promedio de ventas.

## Características Principales

- **Formulario interactivo**: Permite ingresar el monto de ventas para cada mes.
- **Gráficos dinámicos**: Visualiza los datos en gráficos de barras, líneas o pastel.
- **Persistencia de datos**: Los datos se guardan en `localStorage` y persisten al recargar la página.
- **Estadísticas**: Muestra el total y el promedio de ventas.
- **Exportación de datos**: Permite exportar los datos a un archivo JSON.
- **Filtrado de datos**: Filtra los meses con ventas superiores a un valor específico.
- **Diseño responsive**: Interfaz adaptada para dispositivos móviles y de escritorio.

## Estructura del Proyecto
/proyecto-simulador-ventas
│
├── /css
│ └── styles.css
│
├── /js
│ ├── main.js (Punto de entrada principal)
│ ├── chartManager.js (Manejo de gráficos)
│ ├── formHandler.js (Manejo del formulario)
│ ├── storage.js (Manejo de localStorage)
│ ├── statsPanel.js (Panel de estadísticas)
│ └── utils.js (Funciones utilitarias)
│
├── index.html
└── README.md

Copy

## Tecnologías Utilizadas

- **HTML**: Estructura de la página.
- **CSS**: Estilos y diseño responsive.
- **JavaScript**: Lógica de la aplicación.
- **Chart.js**: Librería para la creación de gráficos interactivos.
- **localStorage**: Almacenamiento persistente en el navegador.

## Instrucciones de Uso

1. **Ingresar datos**:
   - Selecciona un mes en el menú desplegable.
   - Ingresa el monto de ventas en el campo correspondiente.
   - Haz clic en "Agregar Ventas" para guardar los datos.

2. **Visualizar gráfico**:
   - Los datos se mostrarán automáticamente en el gráfico.
   - Puedes cambiar el tipo de gráfico (barras, líneas o pastel) desde el menú desplegable.

3. **Estadísticas**:
   - El panel lateral muestra el total y el promedio de ventas.

4. **Filtrar datos**:
   - Ingresa un valor en el campo "Filtrar por monto" para mostrar solo los meses con ventas superiores a ese valor.

5. **Exportar datos**:
   - Haz clic en "Exportar Datos" para descargar un archivo JSON con los datos ingresados.

6. **Resetear gráfico**:
   - Haz clic en "Resetear Gráfico" para borrar todos los datos y reiniciar la aplicación.

## Cómo Ejecutar el Proyecto

1. Clona o descarga el proyecto.
2. Abre la carpeta en Visual Studio Code o cualquier editor de texto.
3. Abre el archivo `index.html` en tu navegador.

## Capturas de Pantalla

![Captura de Pantalla 1](screenshots/screenshot1.png)
*Formulario y gráfico de ventas.*

![Captura de Pantalla 2](screenshots/screenshot2.png)
*Panel de estadísticas y filtrado de datos.*

## Contribuciones

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes hacerlo de las siguientes maneras:

- Reportar errores o sugerir mejoras.
- Implementar nuevas funcionalidades.
- Mejorar el diseño o la experiencia de usuario.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

¡Gracias por usar el Simulador de Ventas Mensuales! 😊
