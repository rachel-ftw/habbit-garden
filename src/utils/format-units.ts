const formatUnits = (n: number) =>
  String(n).replace(/(.)(?=(\d{3})+$)/g, "$1,");

export default formatUnits;
