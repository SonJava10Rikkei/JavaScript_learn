let yourHeight = prompt("Chiều cao của bạn là bao nhiều m?");
let yourWeight = prompt("Bạn nặng bao nhiêu kg?");
let BMI = yourWeight / (yourHeight ^ 2);

if (BMI < 18.5) document.write("Your BMi : " + BMI + " Underweight");
else if (BMI < 25.0) document.write("Your BMI: " + BMI + " Normal");
else if (BMI < 30.0) document.write("Your BMI: " + BMI + " Overweight");
else document.write(" Obese ");
