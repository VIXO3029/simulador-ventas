import { initForm, resetChart } from './formHandler.js';
import { initChart, updateChart } from './chartManager.js';
import { loadSavedData, exportData } from './storage.js';
import { updateStats, initStats } from './statsPanel.js';

// Función para manejar eventos de forma segura
function safeExecute(fn) {
    try {
        fn();
    } catch (error) {
        console.error("Error en la ejecución:", error);
    }
}

// Función para optimizar el filtrado (debounce para evitar recargas innecesarias)
function debounce(func, delay = 300) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    // Cargar datos guardados
    const savedData = loadSavedData();
    safeExecute(() => initChart(savedData));
    safeExecute(() => initForm());
    safeExecute(() => initStats(savedData));

    // Resetear gráfico
    document.getElementById('resetChart').addEventListener('click', () => {
        safeExecute(resetChart);
    });

    // Cambiar tipo de gráfico
    document.getElementById('chartType').addEventListener('change', (event) => {
        const chartType = event.target.value;
        const savedData = loadSavedData();
        safeExecute(() => updateChart(savedData, chartType));
    });

    // Exportar datos
    document.getElementById('exportData').addEventListener('click', () => {
        safeExecute(exportData);
    });

    // Filtrar ventas mayores al valor ingresado
    document.getElementById('filterAmount').addEventListener('input', debounce((event) => {
        const filterAmount = parseFloat(event.target.value) || 0;
        const savedData = loadSavedData();
        const filteredData = savedData.filter(entry => entry.salesAmount > filterAmount);
        
        safeExecute(() => {
            // Asegurarnos de que el gráfico y las estadísticas se actualicen con los datos filtrados
            updateChart(filteredData);
            updateStats(filteredData);
        });
    }, 300));
});
