// 1. In HTML, have a single text input field
// 2. In HTML , have a button
// 3. In JavaScript, have a function divides a number by 10
// 4. In JavaScript, have a function that multiplies a number by 5
// 5. When the button is clicked, call a JavaScript function that checks if the user has entered in a value in the input field
// 6. If there is no value, put an appropriate message in an alert box telling the user to enter something
// 7. If there is a value, and its numeric value is greater than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that divides by 10.
// 8. If there is a value, and its numeric value is less than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that multiplies by 5.
// 9. Write the result of the calculation into the HTML document.
//



function divide(userInput) {
  return userInput / 10;
}

function multiply(userInput) {
  return userInput * 5;
}

//VALIDATE FORM
var result = document.getElementById("result");


function runProgram() {
var userInput = document.getElementById("numInput").value;
console.log(userInput);
  if (userInput >= 10000) {
    var answer = divide(userInput);
  } else {
    var answer = multiply(userInput);
  }
  result.innerHTML = answer;
}
  // // function validateForm() {
  // //   var x = document.forms["mathProgram"]["numberInput"].value;
  // //   if (x === null || x === "") {
  // //     alert("Please type in a number");
  // //     return false;
  // //   }
  // }
var button = document.getElementById("execute")

button.onclick = runProgram;









