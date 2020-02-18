import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Toolbar,
  Card,
  AppBar,
  CardHeader,
  CardContent,
  Typography
} from "@material-ui/core";

import theme from "./theme";

const Home = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            City of London Aquatics
          </Typography>
        </Toolbar>
      </AppBar>
      <Card style={{ marginTop: "20%" }}>
        <CardHeader title="Aquatics Portal" style={{ textAlign: "center" }} />
        <CardContent>
        <ul>
                            <li> Cash Buddy is designed to help you learn all the information necessary to do your job adequately. </li>
                            <li> Cash Buddy will try to give you all the information you need to know in order to answer and help all patrons.</li>
                            <li> Any Questions, Comments or Concerns can be sent to Tyler Gosling on Staff Center</li>
                        </ul>
        </CardContent>
      </Card>
    </MuiThemeProvider>
  );
};
export default Home;
