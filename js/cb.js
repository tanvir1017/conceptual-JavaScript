setTimeout(function () {
  console.log("timer");
}, 0);

/**
 * @function__X__ is higher order function because it takes another function as argument
 */
function x(y) {
  console.log("x");
  y();
}

x(
  /**
   * This @Anonymous function is a callback function because it is passed as an argument to the higher order functions @Function__X__
   */
  function () {
    console.log("y");
  }
);

function attach() {
  let counter = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("clicked", ++counter);
  });
}
attach();

/**
 * The concept of @CONCURRENCY__MODEL__
 * @SetTimeOut has trust issues. It will not always work that way you think, sometimes it would not called the times you give it would at least wait the millisecond but not appear after the millisecond that passed to that @setTimeout function.
 */

console.log("start");

setTimeout(function () {
  console.log("timer has ended");
}, 0);

console.log("end");

// Waiting for 10 seconds

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expired");
// Garbage collection and event listeners
