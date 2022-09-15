/** @jsxImportSource @emotion/react */

import styles from "./styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DailiesList from "./dailies.list";

const Dailies = ({ dailies, update }: any) => {
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    update.reorder(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div
            css={styles.listLayout}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {<DailiesList dailies={dailies} editDaily={update.edit} />}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Dailies;
