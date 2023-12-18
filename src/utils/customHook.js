export const customHook = (value) => {
  let result = 1;

  const inCrementResult = () => {
    return result + 1;
  };

  return [result, inCrementResult];
};
