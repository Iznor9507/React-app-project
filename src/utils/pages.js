export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const numberPages = (totalCount) => {
  const resault = [];
  for (let i = 0; i < totalCount; i++) {
    resault.push(i);
  }
  return resault
};
