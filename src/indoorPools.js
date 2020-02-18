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
import CardDeck from 'react-bootstrap/CardDeck'

import theme from "./theme";

const IndoorPools = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Indoor Pools
          </Typography>
        </Toolbar>
      </AppBar>
      <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </MuiThemeProvider>
  );
};
export default IndoorPools;
