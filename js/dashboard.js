document.addEventListener("DOMContentLoaded", function () {
    Chart.defaults.color = '#7a7d8a';
    Chart.defaults.font.family = "'Nunito', sans-serif";

  
    const ctxLinha = document.getElementById('graficoLinha').getContext('2d');

    // Dados simulados para 6 e 12 meses
    const dados6Meses = {
        labels: ['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'],
        valores: [12000, 19000, 15000, 22000, 18000, 25000]
    };

    const dados12Meses = {
        labels: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'],
        valores: [8000, 9500, 11000, 10500, 14000, 13500, 12000, 19000, 15000, 22000, 18000, 25000]
    };

    // Criação do gradiente para preenchimento da linha
    let gradientArea = ctxLinha.createLinearGradient(0, 0, 0, 400);
    gradientArea.addColorStop(0, 'rgba(108, 99, 255, 0.4)');
    gradientArea.addColorStop(1, 'rgba(108, 99, 255, 0.0)');

    // Instância do Gráfico de Linha
    let chartLinha = new Chart(ctxLinha, {
        type: 'line',
        data: {
            labels: dados6Meses.labels, 
            datasets: [{
                label: 'Receita (R$)',
                data: dados6Meses.valores,
                borderColor: '#6c63ff',
                backgroundColor: gradientArea,
                borderWidth: 3,
                pointBackgroundColor: '#1a1c23',
                pointBorderColor: '#6c63ff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.4 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#16181f',
                    titleColor: '#fff',
                    bodyColor: '#e2e2e2',
                    borderColor: '#2a2c35',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return 'R$ ' + context.parsed.y.toLocaleString('pt-BR');
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false, drawBorder: false }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
                    ticks: {
                        callback: function(value) { return 'R$ ' + (value / 1000) + 'k'; }
                    }
                }
            }
        }
    });

    // Lógica para o Filtro de Período
    const filtroSelect = document.getElementById('filtroPeriodo');
    filtroSelect.addEventListener('change', function(e) {
        const periodo = e.target.value;
        if (periodo === '6') {
            chartLinha.data.labels = dados6Meses.labels;
            chartLinha.data.datasets[0].data = dados6Meses.valores;
        } else {
            chartLinha.data.labels = dados12Meses.labels;
            chartLinha.data.datasets[0].data = dados12Meses.valores;
        }
        chartLinha.update();
    });

    // 2. LÓGICA DO GRÁFICO DE ROSCA (Tipos)
    const ctxRosca = document.getElementById('graficoRosca').getContext('2d');

    new Chart(ctxRosca, {
        type: 'doughnut',
        data: {
            labels: ['Landing Pages', 'E-commerce', 'Sistemas', 'Outros'],
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                    '#6c63ff', // Roxo HavyCode
                    '#20c997', // Verde
                    '#ffb84d', // Laranja
                    '#3a3f58'  // Cinza escuro
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%', 
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e2e2e2',
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            size: 14 
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#16181f',
                    bodyFont: { size: 14 },
                    padding: 12,
                    borderColor: '#2a2c35',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return ' ' + context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
});