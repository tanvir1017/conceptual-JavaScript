// Example 1: Variable Hoisting
console.log(x); // Outputs: undefined
var x = 5;

// Example 2: Function Hoisting
var b = 10;
function hoistedFunction() {
  console.log("This function is hoisted.", a()); // Outputs: This function is hoisted. undefined
  a(); // Output: undefined
  function a() {
    console.log(b);
  }
}

// var a = 10;
hoistedFunction(); // Outputs: "This function is hoisted."
// hoistedFunction(a);

const getCalculateButton = document.getElementById("calculate_button");
console.log(getCalculateButton);
