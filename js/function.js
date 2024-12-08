let x = 100;
b(); // because of it is hoisted to the top of the scop called global scope we'll get the function value

function a() {
  var x = 1;
  console.log(this);
  console.log("this", this);
}
a();
function b() {
  var x = 10;
}
