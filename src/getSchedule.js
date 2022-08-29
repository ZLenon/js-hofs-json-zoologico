const data = require('../data/zoo_data');

const { hours, species } = data;

const days = Object.keys(hours);

const alldays = () => {
  return days.reduce((acc, curr) => {
    acc[curr] = { officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm` };
    acc[curr].exhibition = species.filter((param) => param.availability.includes(curr))
      .map((nome) => nome.name);
    if (curr === 'Monday') {
      acc[curr].officeHour = 'CLOSED';
      acc[curr].exhibition = 'The zoo will be closed!';
    }
    return acc;
  }, {});
};

const oneday = (scheduleTarget) => {
  const days = {
    officeHour: `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`
  };
  days.exhibition = species.filter((param) => param.availability
    .includes(scheduleTarget)).map((param) => param.name);
  if (scheduleTarget === 'Monday') {
    days.officeHour = 'CLOSED';
    days.exhibition = 'The zoo will be closed!';
  }
  return { [scheduleTarget]: days };
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return alldays();
  }
  if (days.includes(scheduleTarget)) {
    return oneday(scheduleTarget);
  }
  if (species.some((nome) => nome.name === scheduleTarget)) {
    return species.find((name) => name.name.includes(scheduleTarget)).availability;
  }
  return alldays();
}
// console.log(getSchedule('lions'));
module.exports = getSchedule;
