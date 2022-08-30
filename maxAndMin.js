const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};

calcTempAmplitude([3, 5, 6, 7]);

const calcMax = function (temArr) {
  let max = temArr[0];

  for (let i = 0; i < temArr.length; i++) {
    if (temArr[i] > max) max = temArr[i];
  }
  console.log(max);
};

const amplitude = calcMax(temperatures);
