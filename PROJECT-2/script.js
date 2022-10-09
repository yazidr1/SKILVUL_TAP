let weight, height, measure, bmi, err;
let categories = ["Underweight", "Normal", "Overweight", "Obese"];

let display = (hasilbmi, kategori) => {
  return `Your BMI is <b>${hasilbmi}</b> which means You are <b>${categories[kategori]}</b>`;
};

function calculateBMI() {
  weight = Number(document.getElementById("weight").value);
  height = Number(document.getElementById("height").value);
  err = "Please enter some values";

  bmi = weight / ((height * height) / 10000);
  bmi = bmi.toFixed(1);

  // BMI calculate
  if (bmi <= 18.4) {
    measure = display(bmi, 0);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    measure = display(bmi, 1);
  } else if (bmi >= 25 && bmi <= 29.9) {
    measure = display(bmi, 2);
  } else if (bmi >= 30) {
    measure = display(bmi, 3);
  }

  let result =document.getElementById("hasil")

  if (height=== "" || isNaN(height)) {
    result.innerHTML = "Provide a valid Height!";
  } else if (weight = "" || isNaN(weight)) {
    result.innerHTML = "Provide a valid Weight!";
  } else {
    result.innerHTML = measure;
  }
}
