export const convertData2 = (data) => {
  console.log("!Array.isArray(data)", !Array.isArray(data), data);
  if (!Array.isArray(data)) return;
  const result = data.map((item, index) => {
    return { ...item, index: index + 1 };
  });
  return result;
};
