# Javascript ES+6 version

## JavaScript Truthy Or Falsy value for checking condition and other stuff when you have to use This two type.

> Every variable or state can be truthy without six condition. A variable or any state can be falsy for those six reason or type. They are ;
>
> - Undefined
> - False
> - "" (Empty string)
> - undefined
> - null
> - NaN
> - 0

---

## Let's explore array.prototype.find()

```
1.  Array.prototype.find() is a method that returns the first element in the array that satisfies the provided testing function. It will not manipulate the original array.

2.  It will not manipulate the original array.

3.  It will take a function and this function will take generally three parameter like, (1) CurrentValue, (2) CurrentIndex, (3) The original array

4.  Most interestingly as second parameter it will take this 🔥

```

## See by an example below ⬇️

```js
// ES6
const numbers = [2, 3, 4, 5, 6, 7, 18];

const oddNumbers = numbers.find((number) => {
  return number / 2;
}, this);
console.log(oddNumbers);

// In this example of code just find the first odd number from array and simply return it. So what we have learned here? we just learned that array.prototype.find()  will return the first matched (matched with the condition) value. When the condition is true it just stop the looping system from array.
```

## How actually this work in find method

---

```js
// Let's say we have a class called Student

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  test(value) {
    console.log(value);
  }
  exampleOfFindFunctionsThis() {
    const array = [2, 3, 4, 7, 5];
    const findArrayMethod = array.find(function (currentValue) {
      this.test(currentValue);
    }, this);
  }
}

const student = new Student("Tanvir", 20);
Student.exampleOfFindFunctionsThis();
```

---

## Array.prototype.findIndex(). Let's see how and what actually it is?

---

```js
// ES6

// array.prototype.findIndex(). It's also similar to array.prototype.find, But what's the actual difference between them? FindIndex return the index number based on the provided condition. if it's not matching with the provided condition then it's return -1. In the mean time array.prototype.find() does the same thing but it return the an array by satisfying the provided condition. Both will return the first satisfied condition value and simply come out from the loop. Also it will have 3 parameter like array.prototype.find() has

let numbersArray = [1, 2, 3, 4, 5, 6, 8, 9, 0, 3, 2, 1, 34];
const findTheIndexOfAnArray = numbersArray.findIndex((currentValue) => {
  return currentValue > 9;
});

console.log("> 9", findTheIndexOfAnArray);
// Value will return like > 9 12
```

---

## Array.prototype.filter(). Let's see how and what actually it is? also difference between [filter && find && findIndex]

---

```js
// EXPLAIN: => array.prototype.filter()? Filter method just return a new array after satisfying provided condition. Also it will not change the main array. It's not work like find OR findIndex. i.g find or findIndex will return the first matched value and simply come out from looping the array. But array.filter() will return the whole a new array after satisfied by the condition. It will take three parameter as like find and findIndex does

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
```
