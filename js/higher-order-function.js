const radius = [3, 2, 1, 4];

const calculateArea = function (radius) {
  const outputArr = [];
  for (let i = 0; i < radius.length; i++) {
    outputArr.push(Math.PI * radius[i] * radius[i]);
  }
  return outputArr;
};

const circumferenceArea = function (radius) {
  const outputArr = [];

  for (let i = 0; i < radius.length; i++) {
    outputArr.push(2 * Math.PI * radius[i]);
  }

  return outputArr;
};

const calculateDiameter = function (radius) {
  const outputArr = [];

  for (let i = 0; i < radius.length; i++) {
    outputArr.push(2 * radius[i]);
  }

  return outputArr;
};
console.log(calculateDiameter(radius));
