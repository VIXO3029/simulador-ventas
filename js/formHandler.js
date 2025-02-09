import { saveData, loadSavedData, clearData } from './storage.js';
import { updateChart } from './chartManager.js';
import { updateStats } from './statsPanel.js';

const feedbackMessage = document.getElementById('feedback-message'); // Reutilizamos este elemento

export function initForm() {
    const form = document.getElementById('salesForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const month = document.getElementById('month').value;
        const salesAmount = parseFloat(document.getElementById('salesAmount').value); // Aseguramos que sea un número

        if (isNaN(salesAmount) || salesAmount < 0) {
            showFeedback('El monto de ventas debe ser un número positivo.', 'error');
            return;
        }

        const savedData = loadSavedData();
        const existingEntryIndex = savedData.findIndex(entry => entry.month === month);

        if (existingEntryIndex !== -1) {
            showFeedback('Ya existe un registro para este mes. Si quieres actualizarlo, hazlo manualmente.', 'error');
            return;
        }

        saveData(month, salesAmount);
        showFeedback('Ventas agregadas correctamente.', 'success');
        
        const updatedData = loadSavedData();
        updateChart(updatedData);
        updateStats(updatedData);
    });
}

export function resetChart() {
    clearData();
    updateChart([]);
    updateStats([]);
    showFeedback('Gráfico reseteado correctamente.', 'success');
}

// Función para mostrar los mensajes de retroalimentación
function showFeedback(message, type) {
    feedbackMessage.textContent = message;
    feedbackMessage.className = `feedback-message ${type}`;
    feedbackMessage.style.display = 'block';

    setTimeout(() => {
        feedbackMessage.style.display = 'none';
    }, 3000);
}
