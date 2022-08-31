/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Draggable } from "react-beautiful-dnd";
import { IDaily } from "./use-dailies";

const style = css`
  border: 1px solid grey;
  margin-bottom: 8px;
  background-color: lightblue;
`;

const DailiesList = ({ dailies, updateChecked }: any) => {
  return dailies.map((daily: IDaily, index: number) => (
    <Draggable key={daily.id} draggableId={daily.id} index={index}>
      {(provided) => (
        <div
          css={style}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <input
            id={daily.id}
            type="checkbox"
            name={daily.name}
            checked={daily.checked}
            onChange={updateChecked(index)}
          />
          <label htmlFor={daily.id}>{daily.name}</label>
        </div>
      )}
    </Draggable>
  ));
};

export default DailiesList;
