import { css } from "@emotion/react";

const styles = {
  container: css`
    padding: 10px;
  `,
  listLayout: css`
    display: flex;
    grid-area: daily-list;
    flex-direction: column;
    justify-content: center;

    & > div {
      padding: 10px 5px;
    }
  `,

  addContainer: css`
    display: grid;
    grid-template-columns: 1fr 50px;
    grid-template-rows: 20px 100px 1f;
    grid-template-areas:
      "title      add-button"
      "add-form   add-form"
      "daily-list daily-list";
  `,

  addTitle: css`
    grid-area: title;
  `,

  addButton: css`
    grid-area: add-button;
  `,

  addForm: css`
    grid-area: add-form;
  `,
};

export default styles;
