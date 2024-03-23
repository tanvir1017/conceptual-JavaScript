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

const functionSayHello = (): any => {
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
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  test(currentValue: number) {
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

// COMMENT: => array.prototype.findIndex(). It's also similar to array.prototype.find(), But what's the actual difference between them? FindIndex return the index number based on the provided condition. if it's not matching with the provided condition then it's return -1. In the mean time array.prototype.findIndex() does the same thing but it return the an array by satisfying the provided condition. Both will return the first satisfied condition value and simply come out from the loop. Also it will have 3 parameter like array.prototype.find() has

let numbersArray: number[] = [1, 2, 3, 4, 5, 6, 8, 9, 0, 3, 2, 1, 34];
const findTheIndexOfAnArray = numbersArray.findIndex(
  (currValue: number): boolean => {
    return currValue > 9;
  }
);

console.log("> 9", findTheIndexOfAnArray);
// Value will return like > 9 12

// EXPLAIN: => array.prototype.filter()? Filter method just return a new array after satisfying provided condition. Also it will not change the main array. It's not work like find OR findIndex. i.g find or findIndex will return the first matched value and simply come out from looping the array. But array.filter() will return the whole a new array after satisfied by the condition

const friendsZone: string[] = [
  "Rakib",
  "Fahim",
  "Munna",
  "Ismail",
  "Arefin",
  "Sajedul",
];
const filteredFriends = friendsZone.filter(
  (currentFriend, index, mainArray) => {
    console.log(mainArray);
    console.log("main index is", index);
    return currentFriend !== "Munna";
  }
);

console.log(filteredFriends);

//  Output to the console
/* [ 'Rakib', 'Fahim', 'Munna', 'Ismail', 'Arefin', 'Sajedul' ]
main index is 0
[ 'Rakib', 'Fahim', 'Munna', 'Ismail', 'Arefin', 'Sajedul' ]
main index is 1
[ 'Rakib', 'Fahim', 'Munna', 'Ismail', 'Arefin', 'Sajedul' ]
main index is 2
[ 'Rakib', 'Fahim', 'Munna', 'Ismail', 'Arefin', 'Sajedul' ]
main index is 3
[ 'Rakib', 'Fahim', 'Munna', 'Ismail', 'Arefin', 'Sajedul' ]
main index is 4
[ 'Rakib', 'Fahim', 'Munna', 'Ismail', 'Arefin', 'Sajedul' ]
main index is 5
[ 'Rakib', 'Fahim', 'Ismail', 'Arefin', 'Sajedul' ] */
