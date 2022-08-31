import { css } from "@emotion/react";

const styles = {
  container: css`
    padding: 10px;
    grid-area: dailies;
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
    padding: 10px 0;
    grid-template-areas:
      "title      add-button"
      "add-form   add-form"
      "daily-list daily-list";
  `,

  addTitle: css`
    grid-area: title;
  `,

  addForm: css`
    grid-area: add-form;

    button {
      margin: 0 5px;
    }
  `,
};

export default styles;
