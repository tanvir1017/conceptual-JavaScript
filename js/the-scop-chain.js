/**
 * @Lexical_Environment - Whenever a Global Execution Context is created a Lexical Environment is also created.
 * A Lexical Environment is local memory along with the reference of lexical environment of it's parent
 *
 */

function a() {
  var b = 3;
  c();
  function c() {
    console.log(b);
  }
}

a();
