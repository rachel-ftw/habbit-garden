import { IDaily } from "./use-dailies";

const Daily = ({ id, name, checked }: IDaily) => {
  const stringId = `${id}`;
  return (
    <>
      <input type="checkbox" id={stringId} name="scales" checked={checked} />
      <label htmlFor={stringId}>{name}</label>
    </>
  );
};

export default Daily;
