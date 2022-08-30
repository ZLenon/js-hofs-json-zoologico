const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((people) => people.id === id).responsibleFor[0];
  const animalOld = species.find((animalId) => animalId.id.includes(firstAnimal)).residents
    .sort((a, b) => b.age - a.age)[0];
  const infoAnimalOld = Object.values(animalOld);
  return infoAnimalOld;
}
// console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
