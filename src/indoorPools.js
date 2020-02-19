import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Card,
  AppBar,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardMedia,
  CardActions
} from "@material-ui/core";
import CardDeck from 'react-bootstrap/CardDeck';
import CGACpic from "./static/images/cgac-profile.png";

import theme from "./theme";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const IndoorPools = () => {
    const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            City of London Aquatics
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.root} style={{ marginTop: "5%" }}>
          <CardActionArea>
          <CardMedia
          component="img"
          alt="Canada Games Aquatic Center"
          height="140"
          img src="/static/images/cgac-profile.jpg"
          title="Canada Games Aquatic Center"
        />            
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      Canada Games Aqautic Center
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      1045 Wonderland Rd North
                  </Typography>
              </CardContent>
              
          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary">
                  View Schedule
              </Button>
              <Button size="small" color="primary">
                  Book Camp
              </Button>
          </CardActions>
      </Card>
      <Card className={classes.root} style={{ marginTop: "5%" }}>
          <CardActionArea>
              <CardMedia
                className={classes.media}
                img src="/static/images/cgacProfile.jpg"
                title="Canada Games Aqautic Center"
              /> 
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     Carling Heights Optimist Community Center
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      1045 Wonderland Rd North

                  </Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary">
                  View Schedule
              </Button>
              <Button size="small" color="primary">
                  Book Camp
              </Button>
          </CardActions>
      </Card>
      <Card className={classes.root} style={{ marginTop: "5%" }}>
          <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cgacProfile.jpg"
                title="Canada Games Aqautic Center"
              /> 
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     South London Community Pool
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      1045 Wonderland Rd North

                  </Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary">
                  View Schedule
              </Button>
              <Button size="small" color="primary">
                  Book Camp
              </Button>
          </CardActions>
      </Card>
    </MuiThemeProvider>
  );
};
export default IndoorPools;
