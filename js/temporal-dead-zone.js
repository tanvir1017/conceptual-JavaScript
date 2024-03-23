/**
 * Block Scope
 */

let c = 1000;

function x() {
  var a = "1 lakh";
  console.log("local a", this.a);
  return a;
}
{
  var a = 10;
  let b = 100;
  const c = 1000;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
console.log(x());
