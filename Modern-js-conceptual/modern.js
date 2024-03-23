// fat arrow func
function number(a) {
  return a;
}

// arrow function
const sumFunc = (a, b) => a + b;

console.log(sumFunc(10, 3));

// briefly soft touch about this keywords

var javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    this.libraries.forEach(function (a) {
      console.log(`${this.name} loves ${a}`);
    });
  },
};

javascript.printLibraries();
