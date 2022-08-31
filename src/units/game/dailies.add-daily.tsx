/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Button from "../../components/button";
import styles from "./dailies.styles";

const AddDaily = ({ addDaily, error }: any) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);
  const clearForm = () => setShowForm(false);

  const add = (e: any) => {
    if (e.target[0].value !== "") clearForm();
    addDaily(e);
  };

  return (
    <div css={styles.addContainer}>
      <h3 css={styles.addTitle}>Dailies</h3>
      <Button style={styles.addButton} text="add" onClick={toggleForm} />

      {showForm && (
        <form css={styles.addForm} onSubmit={add}>
          <p>new daily</p>
          <label htmlFor={"title"}>title</label>:
          <input type="input" id={"title"} />
          <Button text="add" type="submit" />
          <Button text="cancel" onClick={clearForm} />
          {error.length > 0 && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default AddDaily;
