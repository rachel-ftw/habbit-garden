import { isNil } from "ramda";
import { Draggable } from "react-beautiful-dnd";
import Daily from "./daily";
import { IDaily } from "./use-dailies";

const DailiesList = ({ dailies, editDaily }: any) => {
  if (isNil(dailies) || dailies.length === 0) return null;

  return dailies.map(({ checked, id, name }: IDaily, index: number) => (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Daily
          checked={checked}
          id={id}
          index={index}
          name={name}
          provided={provided}
          editDaily={editDaily(index)}
        />
      )}
    </Draggable>
  ));
};

export default DailiesList;
