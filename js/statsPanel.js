export function initStats(data) {
    updateStats(data);
}

export function updateStats(data) {
    if (data.length === 0) {
        document.getElementById('totalSales').textContent = "0";
        document.getElementById('averageSales').textContent = "0";
        return; // Si no hay datos, mostramos cero en ambos campos
    }

    // Calculamos el total de ventas sumando todos los valores de salesAmount
    const totalSales = data.reduce((sum, entry) => sum + parseFloat(entry.salesAmount), 0);

    // Calculamos el promedio de ventas
    const averageSales = (totalSales / data.length).toFixed(2);

    // Formateamos el total de ventas para mostrarlo con comas
    const formattedTotalSales = totalSales.toLocaleString();

    // Mostramos el total y el promedio en el DOM
    document.getElementById('totalSales').textContent = formattedTotalSales;
    document.getElementById('averageSales').textContent = averageSales;
}
