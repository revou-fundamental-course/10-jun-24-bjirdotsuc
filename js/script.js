document.getElementById('temperature-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;
    let explanation;

    if (isNaN(temperature)) {
        result = 'Masukkan suhu yang valid.';
        explanation = '';
    } else {
        if (unit === 'celsius') {
            const fahrenheit = (temperature * 9/5 + 32).toFixed(2);
            result = `${temperature}° Celsius = ${fahrenheit}° Fahrenheit`;
            explanation = `${temperature}°C * 9/5 + 32 = ${fahrenheit}°F`;
        } else {
            const celsius = ((temperature - 32) * 5/9).toFixed(2);
            result = `${temperature}° Fahrenheit = ${celsius}° Celsius`;
            explanation = `(${temperature}°F - 32) * 5/9 = ${celsius}°C`;
        }
    }

    document.getElementById('result').innerText = result;
    document.getElementById('explanation').innerText = explanation;
});
console.log("Path background image:", document.body.style.backgroundImage);
