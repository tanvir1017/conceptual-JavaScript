/**
 * @param{Closures} - closure is a term in programming where functions are close over its surrounding lexical scope.
 */
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    return count;
  };
}

console.log(counter()());
