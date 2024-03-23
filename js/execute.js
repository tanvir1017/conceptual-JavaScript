var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square3 = square(4);

/**
 * Function that describe jsdoc
 * @param {string} title - the title of the book
 * @param {object} author - author info an object
 * @returns {title, author} title author - as an object
 */
function Book(title, author) {
  return { title, author };
}

const bookFunc = new Book("The jsDocBook", {
  name: "The elegant of javascript",
  writer: "Someone",
});

console.log(bookFunc);
