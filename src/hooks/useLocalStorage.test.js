import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from 'hooks';

let getItemMock = jest.fn();
let setItemMock = jest.fn();
let clearStorageMock = jest.fn();

beforeAll(() => {
  delete window.localStorage;

  window.localStorage = {
    getItem: getItemMock,
    setItem: setItemMock,
    clear: clearStorageMock,
  };
});

afterAll(() => {
  window.localStorage.clear();
});

describe('Hooks > useLocalStorage', () => {
  it('[storedValue, setValue]', () => {
    const { result } = renderHook(() => useLocalStorage(''));
    const setValue = result.current[1];

    expect(result.current[0]).toBeUndefined();

    act(() => {
      setValue('Black Panther', 'hp_favorite_characters');
    });
    expect(result.current[0]).toBe('Black Panther');

    act(() => {
      setValue('Wolverine', 'hp_favorite_characters');
    });
    expect(result.current[0]).toBe('Wolverine');

    act(() => {
      setValue('', 'hp_favorite_characters');
    });
    expect(result.current[0]).toBe('');

    act(() => {
      setValue(undefined, 'hp_favorite_characters');
    });
    expect(result.current[0]).toBeUndefined();
  });
});
