import { IDaily } from "./use-dailies";

const Daily = ({ id, name, checked, updateDaily }: IDaily) => {
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
