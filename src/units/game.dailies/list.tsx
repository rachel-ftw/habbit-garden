/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Draggable } from "react-beautiful-dnd";
import colors from "../../utils/colors";
import { IDaily } from "./use-dailies";

const style = (checked: boolean) => css`
  border: 1px solid ${colors.grey};
  margin-bottom: 8px;
  background-color: ${checked ? colors.grey : colors.white};
  border-radius: 3px;
  display: flex;
  justify-content: ;
`;

const DailiesList = ({ dailies, updateChecked }: any) => {
  return dailies.map(({ checked, id, name }: IDaily, index: number) => (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          css={style(checked)}
          ref={provided.innerRef}
          onClick={updateChecked(index)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <input id={id} type="checkbox" name={name} checked={checked} />
          <label htmlFor={id}>{name}</label>
          <button>edit</button>
        </div>
      )}
    </Draggable>
  ));
};

export default DailiesList;
