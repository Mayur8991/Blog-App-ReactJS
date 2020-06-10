import React from "react";

import { Button } from "@material-ui/core";
const Form2 = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <form style={{ marginTop: "20px" }} onClick={refreshPage}>
      <Button
        fullWidth
        color="secondary"
        variant="contained"
        type="submit"
        // style={{ backgroundColor: "blue" }}
      >
        Reset
      </Button>
    </form>
  );
};
export default Form2;
