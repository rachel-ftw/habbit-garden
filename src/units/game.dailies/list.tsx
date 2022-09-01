import { Draggable } from "react-beautiful-dnd";
import Daily from "./daily";
import { IDaily } from "./use-dailies";

const DailiesList = ({ dailies, updateChecked }: any) => {
  return dailies.map(({ checked, id, name }: IDaily, index: number) => (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Daily
          provided={provided}
          checked={checked}
          updateChecked={updateChecked}
          name={name}
          id={name}
          index={index}
        />
      )}
    </Draggable>
  ));
};

export default DailiesList;
