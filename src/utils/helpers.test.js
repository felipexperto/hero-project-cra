import '@testing-library/jest-dom/extend-expect';
import { isObjectFilled, isArrayFilled, sortCharactersArray } from './helpers';

describe('isObjectFilled', () => {
  const objectEmpty = {};
  const objectFilled = { prop1: 'some text' };

  it('Should return false with empty object', () => {
    expect(isObjectFilled(objectEmpty)).toBe(false);
  });
  it('Should return true with filled object', () => {
    expect(isObjectFilled(objectFilled)).toBe(true);
  });
});

describe('isArrayFilled', () => {
  const arrEmpty = [];
  const arrFilled = ['item 1', 'item 2'];

  it('Should return false with empty array', () => {
    expect(isArrayFilled(arrEmpty)).toBe(false);
  });
  it('Should return true with filled array', () => {
    expect(isArrayFilled(arrFilled)).toBe(true);
  });
});

describe('isArrayFilled', () => {
  const arrEmpty = [];
  const arrFilled = ['item 1', 'item 2'];

  it('Should return false with empty array', () => {
    expect(isArrayFilled(arrEmpty)).toBe(false);
  });
  it('Should return true with filled array', () => {
    expect(isArrayFilled(arrFilled)).toBe(true);
  });
});

describe('sortCharactersArray', () => {
  const characters = [
    { name: 'Spider-man' },
    { name: 'Wolverine' },
    { name: 'Thor' },
    { name: 'Cyclops' },
    { name: 'Iron Man' },
    { name: 'Daredevil' },
    { name: 'Hulk' },
  ];

  const charactersOrdered = [
    { name: 'Cyclops' },
    { name: 'Daredevil' },
    { name: 'Hulk' },
    { name: 'Iron Man' },
    { name: 'Spider-man' },
    { name: 'Thor' },
    { name: 'Wolverine' },
  ];

  it('Should return array items sorted alphabetically', () => {
    expect(sortCharactersArray(characters)).toEqual(charactersOrdered);
  });
});
