import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

class Radio extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <Paper
          elevation={3}
          className={{
            width: "100%",
            maxWidth: 500,
          }}
        >
          <Typography variant="h2" align={'center'}>
            Radio
          </Typography>
          <Typography variant="h4" align={'center'}>
            Incoming live radios !
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Radio;
