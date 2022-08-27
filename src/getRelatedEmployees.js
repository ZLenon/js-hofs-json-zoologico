const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((verificaid) => verificaid.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((gerentes) => gerentes.managers.includes(managerId))
      .map((nome) => `${nome.firstName} ${nome.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = { isManager, getRelatedEmployees };
