const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  if (animal.sex) {
    return species.find((specie) => specie.name === animal.specie).residents
      .filter((genero) => genero.sex === animal.sex).length;
  }
  if (animal.specie) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
}
// console.log(countAnimals());
// console.log(countAnimals({ specie: 'giraffes' }));
// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
