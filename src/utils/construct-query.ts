import { keys } from "ramda";

const constructQuery = (queries: any) => {
  const k = keys(queries);
  const formatted = k.reduce((memo: string, key) => {
    memo += `${String(key)}=${queries[key]}&`;
    return memo;
  }, "?");

  return formatted.slice(0, -1);
};

export default constructQuery;
