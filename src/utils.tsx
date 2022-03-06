export const createSlug = (valuesToCreateSlugFrom: string) => {
  const values = valuesToCreateSlugFrom.split(' ');
  const valuesTransformedToLowerCase = values.map(value =>
    value
      .split('')
      .map(letter => letter.toLowerCase())
      .join('')
  );

  const newSlug = valuesTransformedToLowerCase.join('-');
  return newSlug;
};
