var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

var modalContent = document.querySelector(".modal-content");
var modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }

  var bmi = (Number(p[2]) / ((Number(p[1]) / 100) * Number(p[1]))) * 100;

  var result = "";
  var illustrationSrc = ""; // Add this line
  if (p[3] === "male") {
    if (bmi < 18.5) {
      result = "Underweight";
      illustrationSrc = "asset/Depression-amico.svg"; // Update with the path to your male illustration image
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = "Healthy";
      illustrationSrc = "asset/Self confidence-rafiki.svg"; // Update with the path to your male illustration image
    } else if (25 <= bmi && bmi <= 29.9) {
      result = "Overweight";
      illustrationSrc = "asset/Low self-esteem-amico.svg"; // Update with the path to your male illustration image
    } else if (30 <= bmi && bmi <= 34.9) {
      result = "Obese";
      illustrationSrc = "asset/Low self-esteem-rafiki.svg"; // Update with the path to your male illustration image
    } else if (35 <= bmi) {
      result = "Extremely obese";
      illustrationSrc = "asset/Low self-esteem-rafiki.svg"; // Update with the path to your male illustration image
    }
  } else if (p[3] === "female") {
    if (bmi < 18.5) {
      result = "Underweight";
      illustrationSrc = "asset/Worried-rafiki.svg"; // Update with the path to your male illustration image
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = "Healthy";
      illustrationSrc = "asset/Self confidence-pana.svg"; // Update with the path to your male illustration image
    } else if (25 <= bmi && bmi <= 29.9) {
      result = "Overweight";
      illustrationSrc = "asset/Low self-esteem-bro.svg"; // Update with the path to your male illustration image
    } else if (30 <= bmi && bmi <= 34.9) {
      result = "Obese";
      illustrationSrc = "asset/Low self-esteem-amico.svg"; // Update with the path to your male illustration image
    } else if (35 <= bmi) {
      result = "Extremely obese";
      illustrationSrc = "asset/Low self-esteem-amico.svg"; // Update with the path to your male illustration image
    }
  }

  resultArea.style.display = "block";
  document.querySelector(
    ".comment"
  ).innerHTML = `You are <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
  // Update the illustration image source
  updateIllustration(illustrationSrc);
  // Show the illustration container
  showIllustration();
}

function updateIllustration(src) {
  var illustration = document.getElementById("illustration");
  illustration.src = src;
}

function showIllustration() {
  var illustrationContainer = document.getElementById("illustration-container");
  illustrationContainer.style.display = "block";
}

function calculate() {
  if (
    age.value === "" &&
    height.value === "" &&
    weight.value === "" &&
    male.checked === false &&
    female.checked === false
  ) {
    showAlert("Please fill in all the fields.");
  } else if (age.value === "") {
    showAlert("Please enter your age.");
  } else if (height.value === "") {
    showAlert("Please enter your height.");
  } else if (weight.value === "") {
    showAlert("Please enter your weight.");
  } else if (male.checked === false && female.checked === false) {
    showAlert("Please select your gender.");
  } else {
    countBmi();
  }
}

function showAlert(message) {
  openPopup(message);
}
function openPopup(message) {
  // Set the message content
  document.getElementById("popupText").innerHTML = message;

  // Display the popup
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  // Close the popup
  document.getElementById("popup").style.display = "none";
}

// darkmode
$(document).ready(function () {
  // $(function () {
  $("#chk").change(function () {
    $("body").toggleClass("dark");
  });
});
