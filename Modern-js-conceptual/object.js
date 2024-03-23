// COMMENT => so object has so many useful method to work with🚀
const student = {
  name: "Tanvir Hossain",
  reg: 1502064922,
  dep: "Computer",
  collage: "DPI",
};

// COMMENT => to find all of the keys from an object javascript has a function call Object.keys(). In the parenthesis we  have to put the object.
const keys = Object.keys(student);
console.log(keys);

// COMMENT => as like find the keys we can find the values also from an object. To find the values just replace keys as the values. e.g Object.keys() === Object.values()
const values = Object.values(student);

// COMMENT => we can find the keys and values both at the same time by Object.entries. It will return the object's keys and values inside of the array.
const entries = Object.entries(student);

// for (objValue of entries) {
// for (objEle of objValue) {
// console.log(objEle);
// }
// }
// console.log(entries);

// COMMENT =>
function hello(x, y, z) {
  console.log(arguments);
}

hello(5, 6, 9);

// EXPLAIN =>  Remember keys, values, entries everything will return the result as an array. I mean return the result inside of the square bracket.
