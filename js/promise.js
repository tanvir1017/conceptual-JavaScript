const TODO_API = "https://jsonplaceholder.typicode.com/todos/1";

const user = fetch(TODO_API);
console.log(user);

console.log("checking permissions");

// Creating a promise
let myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    // Resolve the promise after a delay
    resolve("Promise resolved");
  }, 2000);
});

// Check if the promise is pending, fulfilled, or rejected
if (myPromise) {
  console.log("Promise is pending"); // This will be printed immediately
} else {
  console.log("Promise is fulfilled or rejected"); // This will not be printed immediately
}

// Check the state of the promise using then() method
myPromise.then(
  // If the promise is fulfilled
  (result) => {
    console.log("Promise fulfilled:", result); // This will be printed when the promise is fulfilled
  },
  // If the promise is rejected
  (error) => {
    console.log("Promise rejected:", error); // This will be printed when the promise is rejected
  }
);

// Check the state of the promise using catch() method
myPromise.catch((error) => {
  console.log("Promise rejected:", error); // This will be printed when the promise is rejected
});
