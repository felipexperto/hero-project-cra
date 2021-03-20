const KEYS = ['NODE_ENV', 'REACT_APP_MARVEL_BASE_URL', 'REACT_APP_MARVEL_PUBLIC_KEY'];

const config = Object.entries(process.env).reduce((acc, [key, value]) => {
  const keyName = KEYS.find((item) => key.includes(item));
  if (keyName) return { ...acc, [keyName]: value };
  return acc;
}, {});

export default { ...config };
