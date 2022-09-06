import InteractWithPlants from "./interact-with-plants";

const info =
  "this is for plants you've already purchased. add them to your garden from here.";

const Library = () => (
  <InteractWithPlants title="library" info={info} dataSlice="available" />
);

export default Library;
