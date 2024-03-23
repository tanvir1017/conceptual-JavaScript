/**
 * @Function_Statement = A way to create a function is called function statement.
 * Example usage:
 */
function functionStatement() {
  // called function statement
  console.log("Function Statement");
}

/**
 * @Function_Expression = Declare an anonymous function into a variable called function expression. Both(Statement & Expression) are way to create a function.
 * __________________________________________________________
 * What is the difference between?
 * Main difference between @Function_Statement & @Function_Expression is they are hoisted to the top level of the code._____________________________
 * If we called/invoke @functionStatement it will print the console log but if we invoke @functionExpression it will gives us an error called b is not a function. Because of function expression treated as any other variable. So when memory allocation phase is done @b is set as undefined.
 * Example usage:
 */
var b = function () {
  // function expression
  console.log("Function Expression");
};

/**
 * Function Declaration is same as Function Statement
 */

// Anonymous function
/* without a name in function called anonymous function */

// Named Function Expressions
/* An anonymous function with the name called named function */

// First Class Functions - First Class Citizens are both same

// Arrow Functions

// Difference between parameters & arguments
