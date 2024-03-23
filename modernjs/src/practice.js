/*-------------------------------------------------------------------------------------------------------------------------------
 // COMMENT : => Fat arrow function VS arrow function. Optionally this keywords
-------------------------------------------------------------------------------------------------------------------------------- */
var javascript = {
  name: "javaScript",
  libraries: ["React", "Anguler", "Vue"],
  printLibraries: function () {
    this.libraries.forEach((item) => {
      console.log(`${this.name} loves ${item}`);
    });
  },
};

const functionSayHello = () => {
  return functionSayHello();
};

// javascript.printLibraries();

/*-------------------------------------------------------------------------------------------------------------------------------
 // COMMENT : => Truthy or Falsy Value
 // Explain(Short):  In 6 condition a variable can be falsy. They're, 
    
    -> "",
    -> false,
    -> Undefined,
    -> null,
    -> NaN,
    -> 0,
-------------------------------------------------------------------------------------------------------------------------------- */
// const myVar = true; // @ Truth value
// const myVar = ""; // @ null value
let myVar; // @ Not null value

if (myVar) {
  // console.log("I am truthy");
} else {
  // console.log("I am Falsy");
}

// COMMENT: =>  javascript find method
// EXPLAIN: => Where it actually live in javascript? I basic answer is it's just live in =>  array.prototype.find()
// ! Array.find will not change your main array

var numbers = [1, 2, 3, 4, 5, 6, 8, 9, 0, 34];

const result = numbers.find(function (
  currentValue,
  currentIndex,
  currentArray
) {
  // console.log(
  //   "current value is",
  //   currentValue,
  //   "current index",
  //   currentIndex,
  //   "current array",
  //   currentArray
  // );
  const returnCurrentValue = `Returning the current value ${currentValue}`;
  return returnCurrentValue;
});
// console.log(result);

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  test(currentValue) {
    console.log(currentValue);
  }
  exampleOfFindFunctionsThis() {
    const array = [2, 3, 4, 7, 5];
    array.find((currentValue) => {
      this.test(currentValue);
    });
  }
}

const student = new Student("Tanvir", 20);
// student.exampleOfFindFunctionsThis();

// COMMENT: => array.prototype.findIndex(). It's also similar to array.prototype.find, But what's the actual difference between them? FindIndex return the index number based on the provided condition. if it's not matching with the provided condition then it's return -1. In the mean time array.prototype.filter() does the same thing but it return the an array by satisfying the provided condition. Both will return the first satisfied condition value and simply come out from the loop. Also it will have 3 parameter like array.prototype.filter() has

let numbersArray = [1, 2, 3, 4, 5, 6, 8, 9, 0, 3, 2, 1, 34];
const findTheIndexOfAnArray = numbersArray.findIndex((currValue) => {
  return currValue > 9;
});

console.log("> 9", findTheIndexOfAnArray);
// Value will return like > 9 12
