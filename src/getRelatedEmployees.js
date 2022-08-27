const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((numid) => numid.id.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((gerente) => gerente.managers.includes(managerId))
      .map((nomes) => `${nomes.firstName} ${nomes.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
