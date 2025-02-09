let myChart;

export function initChart(data, type = 'bar') {
    const ctx = document.getElementById('salesChart')?.getContext('2d');
    if (!ctx) {
        console.error("Error: No se pudo obtener el contexto del gráfico.");
        return; // Si no podemos obtener el contexto, no creamos el gráfico
    }

    // Si no hay un gráfico, lo creamos
    if (!myChart) {
        myChart = new Chart(ctx, {
            type: type,
            data: {
                labels: data.map(entry => entry.month),
                datasets: [{
                    label: 'Ventas Mensuales',
                    data: data.map(entry => entry.salesAmount),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,  // Responsividad para dispositivos móviles
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                animation: {
                    duration: 1000, // Animación al actualizar
                    easing: 'easeInOutQuad'
                },
                plugins: {
                    tooltip: {
                        mode: 'index', // Muestra el valor cuando pasa el ratón por encima
                        intersect: false
                    }
                }
            }
        });
    } else {
        // Si el gráfico ya existe, lo actualizamos con el nuevo tipo de gráfico y los datos
        myChart.destroy();  // Destruir el gráfico anterior
        myChart = new Chart(ctx, {
            type: type,  // Cambiar el tipo de gráfico
            data: {
                labels: data.map(entry => entry.month),
                datasets: [{
                    label: 'Ventas Mensuales',
                    data: data.map(entry => entry.salesAmount),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeInOutQuad'
                },
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                }
            }
        });
    }
}

export function updateChart(data, type = 'bar') {
    const ctx = document.getElementById('salesChart')?.getContext('2d');
    if (!ctx) {
        console.error("Error: No se pudo obtener el contexto del gráfico.");
        return; // Si no podemos obtener el contexto, no actualizamos el gráfico
    }

    // Si el gráfico ya existe, lo actualizamos
    if (myChart) {
        myChart.destroy();  // Destruir el gráfico anterior
        myChart = new Chart(ctx, {  // Crear un nuevo gráfico con el nuevo tipo
            type: type,
            data: {
                labels: data.map(entry => entry.month),
                datasets: [{
                    label: 'Ventas Mensuales',
                    data: data.map(entry => entry.salesAmount),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeInOutQuad'
                },
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                }
            }
        });
    } else {
        // Si el gráfico no existe, lo inicializamos
        initChart(data, type);
    }
}
