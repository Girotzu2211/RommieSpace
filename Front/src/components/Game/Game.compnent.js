import React from "react";
// Components JS
import Grid from "./Grid";
// CSS
import "./game.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Game extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
        <Grid />
    );
  }
}
export default Game;
