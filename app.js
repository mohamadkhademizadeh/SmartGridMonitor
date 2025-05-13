const ctx = document.getElementById('powerChart').getContext('2d');

const powerChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Load (kW)',
                data: [],
                borderColor: 'red',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Generation (kW)',
                data: [],
                borderColor: 'green',
                borderWidth: 2,
                fill: false
            }
        ]
    },
    options: {
        animation: false,
        scales: {
            x: { title: { display: true, text: 'Time' } },
            y: { title: { display: true, text: 'kW' }, beginAtZero: true }
        }
    }
});

function updateChart() {
    const data = generateSensorData();

    if (powerChart.data.labels.length > 15) {
        powerChart.data.labels.shift();
        powerChart.data.datasets[0].data.shift();
        powerChart.data.datasets[1].data.shift();
    }

    powerChart.data.labels.push(data.time);
    powerChart.data.datasets[0].data.push(data.load);
    powerChart.data.datasets[1].data.push(data.gen);
    powerChart.update();

    const alertDiv = document.getElementById('alerts');
    if (data.load > 100) {
        alertDiv.innerText = `⚠️ High Load Detected: ${data.load} kW at ${data.time}`;
    } else {
        alertDiv.innerText = '';
    }
}

setInterval(updateChart, 2000);
