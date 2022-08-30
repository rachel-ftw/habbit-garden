const dailies = [
  { name: "make your bed", checked: true },
  { name: "brush your teeth", checked: false },
];

const useDailies = () => {
  const addDaily = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // const button: HTMLButtonElement = event.currentTarget;
    console.log("adding daily");
  };

  return { dailies, addDaily };
};

export default useDailies;
