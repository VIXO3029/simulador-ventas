const STORAGE_KEY = 'salesData';

// Función para guardar los datos de ventas
export function saveData(month, salesAmount) {
    // Verificar que salesAmount sea un número válido
    if (isNaN(salesAmount) || salesAmount < 0) {
        console.error("El monto de ventas debe ser un número positivo.");
        return;
    }

    const savedData = loadSavedData();

    // Verificar si el mes ya tiene datos guardados
    const existingEntryIndex = savedData.findIndex(entry => entry.month === month);

    if (existingEntryIndex !== -1) {
        // Si el mes ya tiene ventas registradas, actualizamos el monto de ventas
        savedData[existingEntryIndex].salesAmount = salesAmount;
    } else {
        // Si no existe un registro para el mes, lo agregamos
        savedData.push({ month, salesAmount });
    }

    // Guardar los datos actualizados en localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

// Función para cargar los datos desde el almacenamiento local
export function loadSavedData() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error("Error al cargar los datos desde el almacenamiento:", e);
        return [];
    }
}

// Función para limpiar los datos del almacenamiento local
export function clearData() {
    localStorage.removeItem(STORAGE_KEY);
}

// Función para exportar los datos a un archivo JSON
export function exportData() {
    const data = loadSavedData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ventas_mensuales.json';
    a.click();
    URL.revokeObjectURL(url);
}
