import Daily from "./daily";
import useDailies from "./use-dailies";

const Dailies = () => {
  const { dailies, addDaily } = useDailies();

  return (
    <div>
      <div>
        Dailies <button onClick={addDaily}>add</button>
      </div>
      <div>{dailies.map(Daily)}</div>
    </div>
  );
};

export default Dailies;
