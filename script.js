function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const gender = document.querySelector('input[name="gender"]:checked');

  if (
    isNaN(weight) ||
    isNaN(height) ||
    isNaN(age) ||
    !gender ||
    weight <= 0 ||
    height <= 0 ||
    age <= 0
  ) {
    alert(
      "Please enter valid values for weight, height, age, and select gender."
    );
    return;
  }

  const bmi = calculateBMIScore(weight, height);
  const bmiCategory = getBMICategory(bmi);

  // Convert bmi to string before passing it to the URL
  window.location.href = `result.html?bmi=${bmi.toString()}&category=${bmiCategory}&age=${age}&gender=${
    gender.value
  }`;
}

function calculateBMIScore(weight, height) {
  // BMI formula: weight (kg) / (height (m) * height (m))
  return weight / ((height / 100) * (height / 100));
}

// script.js

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return {
      category: "Underweight",
      comment: "Consider maintaining a healthy lifestyle.",
    };
  } else if (bmi < 24.9) {
    return {
      category: "Normal weight",
      comment: "Your weight is within a healthy range. Keep it up!",
    };
  } else if (bmi < 29.9) {
    return {
      category: "Overweight",
      comment: "Consider maintaining a healthy lifestyle.",
    };
  } else {
    return {
      category: "Obese",
      comment:
        "It is advisable to consult with a healthcare professional for personalized advice.",
    };
  }
}

// darkmode
// Check local storage for dark mode preference
const isDarkMode = localStorage.getItem("darkMode") === "true";
// Set dark mode based on the preference
if (isDarkMode) {
  $("body").addClass("dark");
  $("#chk").prop("checked", true);
}
// Toggle dark mode on checkbox change
$("#chk").change(function () {
  const isChecked = $(this).prop("checked");
  $("body").toggleClass("dark", isChecked);
  // Store dark mode preference in local storage
  localStorage.setItem("darkMode", isChecked);
});
