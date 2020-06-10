import React from "react";

import { TextField, Button } from "@material-ui/core";
const Form = ({ returnGuessToApp }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const guess = event.target.elements.guess.value;
    returnGuessToApp(guess);
    event.target.elements.guess.value = "";
  };

  const onClick = () => {
    window.location.reload(false);
  };
  return (
    <form style={{ marginTop: "20px" }} onSubmit={onSubmit}>
      <TextField
        style={{ paddingBottom: "20px" }}
        fullWidth
        type="number"
        name="guess"
        label="Enter Guess...."
        required
      />
      <Button
        fullWidth
        color="primary"
        variant="contained"
        type="submit"
        // style={{ backgroundColor: "blue" }}
      >
        Guess
      </Button>
    </form>
  );
};
export default Form;
