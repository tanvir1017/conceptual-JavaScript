const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = [];
const seen = new Map();

for (const x of array) {
  if (!seen.has(x)) {
    uniqueArray.push(x);
    seen.set(x, true);
  }
}

const a = array.filter((item, index, sortedArray) => {
  console.log(`called ${index}`, sortedArray);
  return item !== array[index - 1];
});
console.log(a);
