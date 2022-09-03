import { Draggable } from "react-beautiful-dnd";
import Daily from "./daily";
import { IDaily } from "./use-dailies";

const DailiesList = ({ dailies, update }: any) => {
  return dailies.map(({ checked, id, name }: IDaily, index: number) => (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Daily
          checked={checked}
          id={id}
          index={index}
          name={name}
          provided={provided}
          updateChecked={update.checked(index)}
          updateText={update.text(index)}
        />
      )}
    </Draggable>
  ));
};

export default DailiesList;
