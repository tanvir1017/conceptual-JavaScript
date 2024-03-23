// Array.prototype.find()
/* 
    find method will iterate all of the elements belongs in an array, and return the conditional first result, only first which is exactly match to the condition. And it doesn't change the main array.
 */

var myArr = ["Tanvir", "Tawhid", "Sumaiya", "Mahbub", "Hasina"];
myArr.find((currentValue, index) => {
  if (currentValue === "Sumaiya") {
    console.log("We found", currentValue, "at the number of index", index + 1);
  }
});

myArr.findIndex((currentValue, index) => {
  console.log(currentValue === "Mahbub", index);
});
