/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Draggable } from "react-beautiful-dnd";
import { IDaily } from "./use-dailies";

const style = (checked: boolean) => css`
  border: 1px solid grey;
  margin-bottom: 8px;
  background-color: ${checked ? "lightblue" : "white"};
`;

const DailiesList = ({ dailies, updateChecked }: any) => {
  return dailies.map(({ checked, id, name }: IDaily, index: number) => (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          css={style(checked)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <input
            id={id}
            type="checkbox"
            name={name}
            checked={checked}
            onChange={updateChecked(index)}
          />
          <label htmlFor={id}>{name}</label>
        </div>
      )}
    </Draggable>
  ));
};

export default DailiesList;
