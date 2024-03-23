const arrOfNumber = ["Rakib", "Tanvir", "Munna"];

// COMMENT => Reduce function will give you the previous value, current value, current index, main array. It will make your life easier to do some operation with reduce function. It will enhance your performance also

const result = arrOfNumber.reduce((prevValue, currValue, currIndex, arr) => {
  console.log(prevValue, currValue, currIndex, arr);
});

console.log(result);
