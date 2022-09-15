/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";
import TextInput from "../../components/input.text";
import colors from "../../utils/colors";

const styles = (checked?: boolean) => ({
  container: css`
    border: 1px solid ${colors.grey};
    margin-bottom: 8px;
    background-color: ${checked ? colors.grey : colors.white};
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
  `,
  button: css`
    background: white;
    padding: 3px;
    cursor: pointer;

    &:disabled {
      background-color: ${colors.grey};
      cursor: default;
      click-events: none;
    }
  `,
});

interface IProps {
  provided: any;
  editDaily: any;
  name: string;
  checked: boolean;
  index: number;
  id: string;
}

const Daily = (props: IProps) => {
  const { provided, checked, name, id, editDaily } = props;
  const [showInput, setShowInput] = useState<boolean>(false);
  const [dailyName, setDailyName] = useState<string>(name);

  const style = styles(checked);
  const setName = (e: any) => void setDailyName(e.target.value);

  const editText = (e: any) => {
    e.stopPropagation();

    if (dailyName !== name && showInput) editDaily({ name: dailyName });
    setShowInput(!showInput);
  };

  const toggleChecked = (e: any) => {
    !showInput && editDaily({ checked: !checked });
  };

  return (
    <div
      css={style.container}
      ref={provided.innerRef}
      onClick={toggleChecked}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {!showInput && <span>{name}</span>}
      {showInput && <TextInput id={id} value={dailyName} onChange={setName} />}
      <button disabled={checked} css={style.button} onClick={editText}>
        {showInput ? "save" : "edit"}
      </button>
    </div>
  );
};

export default Daily;
