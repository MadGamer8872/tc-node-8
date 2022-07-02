export const getSortedList = (original, callback) => {
  let copy = [...original];
  copy.sort(callback);
  return copy;
};
