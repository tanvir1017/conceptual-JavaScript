// Truthy and False value in javascript
/* 
In 6 condition a variable can be falsy,
    they're, 
     -> false,
     -> NaN,
     -> 0,
     -> Undefined,
     -> null,
     -> "",

everything is truthy expect those 6 things
*/

// Let's see with the example's

var checkTruthy = ["Nan", "0", "false", "undefined", "null", ""];
if (checkTruthy) {
  console.log("I am truthy");
} else {
  console.log("I am falsy");
}

checkTruthy.forEach((falsyThings) => {
  console.log(falsyThings);
});
