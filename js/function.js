// var x = 100;
b();

const a = () => {
  var x = 1;
  console.log(this);
  console.log("this", this);
};
a();
function b() {
  var x = 10;
}
