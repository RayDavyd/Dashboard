Chart.defaults.color = '#8b8d97';
Chart.defaults.font.family = '"Nunito", sans-serif';

const ctxLinha = document.getElementById('graficoLinha').getContext('2d');
new Chart(ctxLinha, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
        datasets: [{
            label: 'Receita (R$)',
            data: [8000, 9200, 7500, 11000, 10200, 13500, 15500, 18420],
            borderColor: '#6c63ff', 
            borderWidth: 3,
            tension: 0.4, 
            pointBackgroundColor: '#6c63ff',
            pointBorderWidth: 2,
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: { display: false } 
        },
        scales: {
            y: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' } 
            },
            x: {
                grid: { display: false } 
            }
        }
    }
});

const ctxRosca = document.getElementById('graficoRosca').getContext('2d');
new Chart(ctxRosca, {
    type: 'doughnut', 
    data: {
        labels: ['Sites', 'Sistemas', 'E-comm', 'Outros'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: [
                '#ffb84d', 
                '#ff6b6b', 
                '#6c63ff', 
                '#20c997'  
            ],
            borderWidth: 0, 
            cutout: '75%' 
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 10 /* Dá um pequeno "respiro" para não colar no limite do cartão */
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: { 
                    padding: 20, /* O SEGREDO ESTÁ AQUI: Aumentar este valor empurra a legenda para longe do gráfico */
                    usePointStyle: true, 
                    boxWidth: 8 
                }
            }
        }
    }
});