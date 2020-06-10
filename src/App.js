import React, { Component } from "react";
import { Grid, Typography, Paper, Divider } from "@material-ui/core";
import Form from "./components/form";
import Form2 from "./components/form2";
import { generateRandomNumber } from "./utils";
import Progress from "./components/progress";
import "./components/Progress.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      generatedNumber: generateRandomNumber(),
      guess: undefined,
      allGuesses: [],
      attempt: 0,
      absDiff: undefined,
      boxColor: "",
    };
  }
  updateAppSatet = (guess) => {
    const { generatedNumber } = this.state;
    const absDiff = Math.abs(guess - generatedNumber);

    this.setState((prevState) => ({
      guess,
      allGuesses: [...prevState.allGuesses, { guess }],
      attempt: prevState.attempt + 1,
      absDiff,
    }));
  };

  render() {
    const guessList = this.state.allGuesses.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ));

    let temp = "";
    const { absDiff } = this.state;
    if (absDiff < 10) {
      temp = "HOTT";
      if (absDiff === 0) {
        temp = "won";
      }
    } else if (absDiff > 10 && absDiff < 50) {
      temp = "Warmer";
    } else if (absDiff === undefined) {
      temp = "Guess";
    } else {
      temp = "Coldddd";
    }

    return (
      <Grid
        container
        style={{ height: "100vh" }}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Paper style={{ padding: "30px" }} elevation={7}>
            <div>
              <Typography align="center" variant="h2" gutterBottom>
                Hot or Cold
              </Typography>
            </div>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={temp}
            >
              <Typography align="center" variant="h2" gutterBottom>
                {temp === "won" ? "Wohoooo! You won!!!" : `${temp}`}
              </Typography>
            </Grid>

            <Divider style={{ margin: "20px 0px" }}></Divider>
            <Form returnGuessToApp={(guess) => this.updateAppSatet(guess)} />
            <Form2 />

            <Progress attempt={this.state.attempt} guessList={guessList} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default App;
