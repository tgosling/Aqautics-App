import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Toolbar,
  AppBar,
  Typography,
} from "@material-ui/core";

import theme from "../theme";

const Page = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar color={props.appBarColor || "primary"}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </MuiThemeProvider>
  );
};
export default Page;
