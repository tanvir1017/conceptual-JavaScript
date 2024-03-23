/**
 * @undefined - is a special keyword in JavaScript.
 * Until or Unless any value specify to any variable we'll get undefined as variable value
 *
 * @notDefined - not defined is that the variable or function are not defined to the code means when the execution context(code component) is try to allocate to that variable which is not present to the file then it will give this following error:
 * ⚠️@error - Uncaught ReferenceError: x is not defined
 * */
var a;

console.log("🚀 ~ a:", a);

a = 20;
console.log(x);
if (a === undefined) {
  console.log("⚠️ ~ a is undefined");
} else {
  console.log("⚡ ~ a isn't undefined");
}
