export const isObjectFilled = (obj) => obj && Object.keys(obj).length > 0;

export const isArrayFilled = (arr) => arr && arr.length > 0;

export const sortCharactersArray = (arr) => {
  return arr.slice(0).sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
};
