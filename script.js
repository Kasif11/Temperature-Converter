
function convert() {
    // Input Value
    let degree = parseFloat(document.getElementById('degree').value);
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('unit').value;

    // Conversion of Temeperature by checking all the conditions
    let result;
    if (fromUnit === toUnit) {
        result = degree;
    } else if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            result = (degree * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            result = degree + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (degree - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            result = (degree - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            result = degree - 273.15;
        } else if (toUnit === 'fahrenheit') {
            result = (degree - 273.15) * 9/5 + 32;
        }
    }

    // Here the Result will be Displayed after every Calculation
    document.querySelector('.result').textContent = `${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}
