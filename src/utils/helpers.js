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

export const monthNumberToName = (year, month) => {
  const intlMonth = new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format;
  const monthName = intlMonth(new Date(Date.UTC(year, month)));
  return monthName;
};

export const formatDate = (stringDate) => {
  const fullDate = new Date(stringDate);
  const day = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  const monthName = monthNumberToName(year, month);
  return `${day} ${monthName} ${year}`;
};

export const isHeroAmongFavorites = (arr, id) => arr.some((el) => el.id === id);
