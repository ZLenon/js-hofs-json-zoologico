const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Passando o argumento count, retorna um numero inteiro', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });
  it('Passando o argumento names, retorna um array de nomes com Bea incluido', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('Passando o argumento averageAge, retorna um numero proximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });
  it('Passando o argumento location, retorna ums string NW', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('Passando o argumento popularity, retorna um numero igual ou maior que 5', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });
  it('Passando o argumento availability, retorna um array de dias', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('Não passando nenhum argumento deve retornar undefined', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });
  it('Passando um objeto vazio como parametro, retorna uma string', () => {
    const actual = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
  it('Passando uma string que não tem funcionalidade, retorna null', () => {
    const actual = handlerElephants('zzzz');
    expect(actual).toBeNull();
  });
});
