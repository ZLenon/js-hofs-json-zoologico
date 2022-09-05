const data = require('../data/zoo_data');

const { employees, species } = data;

const oneEmployees = (param) => employees.filter((l) => l.firstName === param.name
  || l.lastName === param.name || l.id === param.id)
  .reduce((acc, curr) => {
    const oneRegister = acc;
    acc.id = curr.id;
    acc.fullName = `${curr.firstName} ${curr.lastName}`;
    acc.species = species.filter((animals) => curr.responsibleFor.includes(animals.id))
      .map((nome) => nome.name);
    acc.locations = species.filter((animal) => curr.responsibleFor.includes(animal.id))
      .map((coordinate) => coordinate.location);

    return oneRegister;
  }, {});

const allEmployees = () => employees.map((array) => {
  const allInfoEmployees = {
    id: array.id,
    fullName: `${array.firstName} ${array.lastName}`,
    species: species.filter((param) => array.responsibleFor.includes(param.id))
      .map((nome) => nome.name),
    locations: species.filter((param) => array.responsibleFor.includes(param.id))
      .map((local) => local.location),
  };
  return allInfoEmployees;
}, []);

function getEmployeesCoverage(param) {
  if (!param) {
    return allEmployees();
  }
  if (employees.some((check) => check.firstName === param.name
    || check.lastName === param.name || check.id === param.id)) {
    return oneEmployees(param);
  }
  throw new Error('Informações inválidas');
}
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Wishart' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));
module.exports = getEmployeesCoverage;
