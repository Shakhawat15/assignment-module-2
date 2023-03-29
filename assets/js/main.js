function calculate() {
    const weight = parseFloat(document.getElementById('weightInput').value);
    let height = parseFloat(document.getElementById('heightInput').value);
    const result = document.getElementById('result');
    const reset = document.getElementById('resetBtn');

    if ((weight === '' || isNaN(weight) || weight <= 0) && (height === '' || isNaN(height) || height <= 0)) {
        alert(`Please provide a valid weight and height`);
    } else if (weight === '' || isNaN(weight) || weight <= 0) {
        alert(`Please provide a valid weight`);
    } else if (height === '' || isNaN(height) || height <= 0) {
        alert(`Please provide a valid height`);
    } else {
        height = height / 100;
        result.innerHTML = (weight / (height * height)).toFixed(2);
        reset.style.display = 'block';
    }
}

function resetValue() {
    document.getElementById('weightInput').value = '';
    document.getElementById('heightInput').value = '';
    document.getElementById('resetBtn').style.display = 'none';
    document.getElementById('result').innerHTML = '';
}
