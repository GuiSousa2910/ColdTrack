const labels = ['Porta1', 'Porta2', 'Porta3', 'Porta4', 'Porta5'];
const dataBar = {
    labels: labels,
    datasets: [{
        label: 'Gráfico de aberturas',
        data: [9, 13, 12, 21, 5],
        backgroundColor: [
            'rgb(179, 0, 18)',
            'rgb(224, 83, 7)',
            'rgb(196, 207, 4)',
            'rgb(18, 130, 5)',
            'rgb(13, 7, 135)'
        ],
        borderColor: [
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)'
        ],
        borderWidth: 1
    }]
};

const dataLine = {
    labels: ['04:00', '08:00', '12:00', '16:00', '20:00', '00:00'],
    datasets: [
        {
            label: 'Temperatura média',
            data: [2, 1, -2.5, 5, -0.7, 2],
            borderColor: 'rgb(245, 242, 86)',
            backgroundColor: 'rgb(245, 242, 86, 0.1)',
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 10
        },
        {
            label: 'Temperatura Máxima',
            data: [4, 4, 4, 4, 4, 4],
            borderColor: 'rgb(179, 0, 18)',
            backgroundColor: 'rgb(179, 0, 18, 0.2)',
            pointStyle: 'circle',
            pointRadius: 2,
            pointHoverRadius: 10
        },
        {
            label: 'Temperatura Mínima',
            data: [-3, -3, -3, -3, -3, -3],
            borderColor: 'rgb(13, 7, 135)',
            backgroundColor: 'rgb(13, 7, 135, 0.2)',
            pointStyle: 'circle',
            pointRadius: 2,
            pointHoverRadius: 7
        }
    ]
};

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const dataDon = {
    labels: ['Carne moída', 'Picanha', 'Coxão mole', 'Maminha', 'Alcatra'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [9, 13, 12, 21, 5],
            backgroundColor: [
                'rgb(179, 0, 18)',
                'rgb(224, 83, 7)',
                'rgb(196, 207, 4)',
                'rgb(18, 130, 5)',
                'rgb(13, 7, 135)'
            ],
            borderColor: [
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)'
            ],
            hoverOffset: 15
        },
    ]
};

const configBar = {
    type: 'bar',
    data: dataBar,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de abertura',
                color: '#ffffff'
            },
            legend: {
                labels: {
                    display: false
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#ffffff'
                }
            }, x: {
                ticks: {
                    color: '#ffffff'
                }
            }
        },
    }
};

const configLine = {
    type: 'line',
    data: dataLine,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: (ctx) => 'Gráfico de temperatura : ',
                color: '#ffffff'
            },
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: '#ffffff'
                }
            },
            x: {
                ticks: {
                    color: '#ffffff'
                }
            }
        }
    }
};

const configDon = {
    type: 'doughnut',
    data: dataDon,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ffffff'
                }
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart',
                color: '#ffffff'
            }
        }
    },
};

const chartBar = new Chart(
    document.getElementById('chart1'),
    configBar
);

const chartLine = new Chart(
    document.getElementById('chart2'),
    configLine
);

const charDon = new Chart(
    document.getElementById('chart3'),
    configDon
);
