const square = 2; // Memory allocation phase it will be placed as undefined

// fun will create a new execution phase for every function and in memory allocation phase it will just print all the code inside function as it is
function squareFn(n) {
  const ans = n * n;
  return ans; // returns tells the means that remove the function from execution context
}

const getSquare1 = squareFn(square); // when a function invoked then it will create another function execution phase for the invokation and everything will be work as it should be
const square2 = squareFn(4);
