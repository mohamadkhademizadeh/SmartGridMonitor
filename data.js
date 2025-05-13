// Simulate live power data
function generateSensorData() {
    const now = new Date().toLocaleTimeString();
    const load = 80 + Math.random() * 40;
    const generation = 50 + Math.random() * 30;
    return { time: now, load: parseFloat(load.toFixed(2)), gen: parseFloat(generation.toFixed(2)) };
}
