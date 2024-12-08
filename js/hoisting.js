greeting();
v; // greeting ~ greeting
console.log(x); // undefined

var x = 7;

function greeting() {
  console.log("🚀 ~ greeting ~ greeting:");
}

const greeting2 = () => {
  console.log("not hoisted func");
};
