// Colores suaves para los gráficos
const colors = {
    background: [
        'rgba(75, 192, 192, 0.2)',  // Verde agua
        'rgba(255, 99, 132, 0.2)',   // Rosa
        'rgba(54, 162, 235, 0.2)',   // Azul
        'rgba(255, 206, 86, 0.2)',   // Amarillo
        'rgba(153, 102, 255, 0.2)',  // Morado
        'rgba(255, 159, 64, 0.2)',   // Naranja
    ],
    border: [
        'rgba(75, 192, 192, 1)',     // Verde agua
        'rgba(255, 99, 132, 1)',     // Rosa
        'rgba(54, 162, 235, 1)',     // Azul
        'rgba(255, 206, 86, 1)',     // Amarillo
        'rgba(153, 102, 255, 1)',    // Morado
        'rgba(255, 159, 64, 1)',     // Naranja
    ]
};

let myChart;

export function initChart(data, type = 'bar') {
    const ctx = document.getElementById('salesChart').getContext('2d');

    // Configuración del gráfico
    const config = {
        type: type,
        data: {
            labels: data.map(entry => entry.month),
            datasets: [{
                label: 'Ventas Mensuales',
                data: data.map(entry => entry.salesAmount),
                backgroundColor: colors.background.slice(0, data.length), // Aplica colores
                borderColor: colors.border.slice(0, data.length),         // Aplica bordes
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                datalabels: {
                    display: type === 'pie', // Muestra etiquetas solo en el gráfico de pastel
                    formatter: (value, context) => {
                        const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(2) + '%';
                        return percentage;
                    },
                    color: '#333', // Color del texto
                    font: {
                        weight: 'bold', // Negrita
                        size: 14        // Tamaño de la fuente
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        },
        plugins: [ChartDataLabels] // Añade el plugin
    };

    myChart = new Chart(ctx, config);
}

export function updateChart(data, type = 'bar') {
    if (myChart) {
        myChart.destroy();
    }
    initChart(data, type);
}