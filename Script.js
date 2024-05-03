function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
  
    if (height === '' || weight === '') {
      alert('Please enter both height and weight.');
      return;
    }
  
    height = parseFloat(height) / 100; // Convert height to meters
    weight = parseFloat(weight);
  
    var bmi = weight / (height * height);
    var result = '';
  
    if (bmi < 18.5) {
      result = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      result = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      result = 'Overweight';
    } else {
      result = 'O';
    }
  
    document.getElementById('result').innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + ' (' + result + ')';
  }