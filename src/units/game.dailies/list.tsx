import { Draggable } from "react-beautiful-dnd";
import Daily from "./daily";
import { IDaily } from "./use-dailies";

const DailiesList = ({ dailies, update }: any) => {
  return dailies.map(({ checked, id, name }: IDaily, index: number) => (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Daily
          provided={provided}
          checked={checked}
          updateChecked={update.checked(index)}
          updateText={update.text(index)}
          name={name}
          index={index}
        />
      )}
    </Draggable>
  ));
};

export default DailiesList;
