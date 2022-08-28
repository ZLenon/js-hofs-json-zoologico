const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child = entrants
    .filter((crianca) => crianca.age < 18).length;
  const adult = entrants
    .filter((adulto) => adulto.age >= 18 && adulto.age < 50).length;
  const senior = entrants
    .filter((idoso) => idoso.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (!Array.isArray(entrants) && typeof entrants === 'object' && Object
    .keys(entrants).length === 0) {
    return 0;
  }
  const verifyAge = countEntrants(entrants);
  const valueChild = prices.child * verifyAge.child;
  const valueAdult = prices.adult * verifyAge.adult;
  const valueSenior = prices.senior * verifyAge.senior;
  return valueAdult + valueChild + valueSenior;
}
// console.log(countEntrants(['entrants']));
module.exports = { calculateEntry, countEntrants };
