const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents
    .every((idade) => idade.age >= age);
}
// console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
