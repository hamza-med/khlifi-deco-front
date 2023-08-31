export const calculateIndexes = (page, pageSize, totalItems) => {
  // Calculate the index of the first element
  const firstIndex = (page - 1) * pageSize;

  // Calculate the index of the last element
  const lastIndex = Math.min(firstIndex + pageSize - 1, totalItems - 1);
  return { firstIndex, lastIndex, totalItems };
};
