const data = require('../data/zoo_data');

const { hours, species } = data;

const days = Object.keys(hours);

const allDays = () => days.reduce((acc, curr) => {
  acc[curr] = { officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm` };
  acc[curr].exhibition = species.filter((param) => param.availability.includes(curr))
    .map((nome) => nome.name);
  if (curr === 'Monday') {
    acc[curr].officeHour = 'CLOSED';
    acc[curr].exhibition = 'The zoo will be closed!';
  }
  return acc;
}, {});

const oneDay = (scheduleTarget) => {
  const diasSemana = {
    officeHour: `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`,
  };
  diasSemana.exhibition = species.filter((param) => param.availability
    .includes(scheduleTarget)).map((param) => param.name);
  if (scheduleTarget === 'Monday') {
    diasSemana.officeHour = 'CLOSED';
    diasSemana.exhibition = 'The zoo will be closed!';
  }
  return { [scheduleTarget]: diasSemana };
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return allDays();
  }
  if (days.includes(scheduleTarget)) {
    return oneDay(scheduleTarget);
  }
  if (species.some((nome) => nome.name === scheduleTarget)) {
    return species.find((name) => name.name.includes(scheduleTarget)).availability;
  }
  return allDays();
}
// console.log(getSchedule('lions'));
module.exports = getSchedule;
