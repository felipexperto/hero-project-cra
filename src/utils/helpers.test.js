import '@testing-library/jest-dom/extend-expect';
import { isObjectFilled, isArrayFilled } from './helpers';

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
