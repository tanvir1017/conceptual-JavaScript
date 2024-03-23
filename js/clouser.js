/**
 * Uses of Closures:
 *  - Module Design Pattern
 *  - Currying
 *  - Functions Like Once
 *  - Memoize
 *  - Maintaining state in async world
 *  - setTimeouts
 *  - Iterators
 *  - and many more...
 *  - */

/* function x() {
  var name = "Tanvir";
  return function y() {
    console.log(name);
  };
}

const newC = () => {
  var name = "Tanvir Hossain";
  return (newD = () => {
    console.log(name);
  });
};
newC()(); */

function xx() {
  // for (var i = 0; i <= 100000; i++) {
  //   setTimeout(function () {
  //     console.log(i);
  //   }, 1000);
  // }
}

xx();

function xy() {
  for (var i = 0; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }

    close(i);
  }
}

xy();
