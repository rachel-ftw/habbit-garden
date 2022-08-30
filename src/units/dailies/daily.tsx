import { IDaily } from "./use-dailies";

interface Daily extends IDaily {
  updateDaily: any;
}

const Daily = ({ id, name, checked, updateDaily }: Daily) => {
  const stringId = `${id}`;

  return (
    <div>
      <input
        type="checkbox"
        id={stringId}
        name={name}
        checked={checked}
        onChange={updateDaily}
      />
      <label htmlFor={stringId}>{name}</label>
    </div>
  );
};

export default Daily;
