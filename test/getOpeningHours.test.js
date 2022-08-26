const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testando sem argumentos na func. Deverá retornar um objeto', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('Quando os argumentos forem Monday e 09:00-AM, retornar a string -The zoo is closed-', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('Quando os argumentos forem Tuesday e 09:00-AM, retornar a string -The zoo is open-', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });
  it('Quando os argumentos forem Wednesday e 09:00-PM, retornar a string -The zoo is closed-', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  test('Quando os argumentos forem Thu e 09:00-AM, retornar uma msg de erro -The day must be valid. Example: Monday-', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM'))
      .toThrowError('The day must be valid. Example: Monday');
  });
  test('Quando os argumentos forem Friday e 09:00-ZM, retornar uma msg de erro -The abbreviation must be \'AM\' or \'PM\'-', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM'))
      .toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  test('Quando os argumentos forem Saturday e C9:00-AM, retornar uma msg de erro -The hour should represent a number-', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM'))
      .toThrowError('The hour should represent a number');
  });
  test('Quando os argumentos forem Sunday e 09:C0-AM, retornar uma msg de erro -The minutes should represent a number-', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM'))
      .toThrowError('The minutes should represent a number');
  });
  test('Quando os argumentos forem Monday e 13:00-AM, retornar uma msg de erro -The hour must be between 0 and 12-', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM'))
      .toThrowError('The hour must be between 0 and 12');
  });
  test('Quando os argumentos forem Tuesday e 09:60-AM, retornar uma msg de erro -The minutes must be between 0 and 59-', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM'))
      .toThrowError('The minutes must be between 0 and 59');
  });
});
