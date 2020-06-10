import React from "react";
import { Typography } from "@material-ui/core";
import "./Progress.css";
const Progress = ({ attempt, guessList }) => {
  return (
    <div>
      <Typography className="progressBar" variant="h4">
        Your Attempts:{attempt}
      </Typography>

      <ul className="progressBar_history">{guessList}</ul>
    </div>
  );
};

export default Progress;
