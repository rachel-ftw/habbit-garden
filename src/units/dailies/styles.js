import { css } from "@emotion/react";

const styles = {
  listLayout: css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
      padding: 10px 5px;
    }
  `,
};

export default styles;
