const useBuyPlant = () => {
  const buyPlant =
    ({ name, cost, id }: any) =>
    () => {
      console.log("buying", name, cost, id);
    };

  return buyPlant;
};

export default useBuyPlant;
