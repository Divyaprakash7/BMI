document.addEventListener('DOMContentLoaded', function () {
    const resultSpan = document.getElementById('result');
    const categoryText = document.getElementById('category');

    if (!resultSpan) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const weight = parseFloat(params.get('w') || '');
    const height = parseFloat(params.get('h') || '');

    if (!weight || weight <= 0 || !height || height <= 0) {
        resultSpan.textContent = 'Invalid values';
        if (categoryText) {
            categoryText.textContent = 'Please go back and enter valid height and weight values.';
        }
        return; 
    }

    const heightMeters = height > 10 ? height / 100 : height;
    const bmi = weight / (heightMeters * heightMeters);
    resultSpan.textContent = bmi.toFixed(2);

    if (categoryText) {
        let category = 'Unknown';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 25) {
            category = 'Normal weight';
        } else if (bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
        categoryText.textContent = category;
    }
});