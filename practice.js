const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
// const scoreDolphin = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphin, scoreKoalas);

const checkWinner = function (avgDolphin, avgKoalas) {
  if (avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphine is winner ${avgDolphin} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas is Winner ${avgKoalas} vs. ${avgDolphin}`);
  } else {
    console.log("The match is draw ");
  }
};
const scoreDolphin = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphin, scoreKoalas);
