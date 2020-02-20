import React, { PureComponent } from "react";
import Page from "./Page/Page";
import {
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  MuiThemeProvider
} from "@material-ui/core";
import theme from "./theme";
import Reorder from '@material-ui/icons/Reorder';
import IndoorPools from "./IndoorPools"
import OutdoorPools from "./OutdoorPools"

class Home extends PureComponent{
    state={
        anchorEl: null,
        showPoolCard: false
    };

    onMenuItemClicked = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    onClose = () =>{
        this.setState({anchorEl: null});
    };

    onHomeItemClicked = () => {
        this.setState({showPoolCard: false, anchorEl: null});
    };

    onPoolItemClicked = () => {
        this.setState({showPoolCard: true, anchorEl: null});
    };

    render() {
        const { anchorEl, showPoolCard} = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar poisiton="static">
                    <Toolbar>
                        <IconButton onClick={this.onMenuItemClicked} color="inherit">
                            <Reorder />
                        </IconButton>
                        <Menu
                         id="simple-menu"
                         anchorEl={anchorEl}
                         open={Boolean(anchorEl)}
                         onClose={this.onClose}
                        >
                            <MenuItem onClick={this.onHomeItemClicked}>Home</MenuItem>
                            <MenuItem onClick={this.onPoolItemClicked}>Pools</MenuItem>
                        </Menu>
                        <Typography variant="h6" color="inherit">
                            City of London Aquatics
                        </Typography>
                    </Toolbar>
                </AppBar>
                {!showPoolCard && (
                    <Typography variant="h5" color="inheirt" style={{textAlign: 'center', marginTop: '8%'}}>Welcome to Aquahelp</Typography>
                )}
                {showPoolCard &&(
                    <React.Fragment>
                        <IndoorPools style={{marginTop: '10%'}}/>
                        <OutdoorPools/>
                    </React.Fragment>
                )}
            </MuiThemeProvider>
        );
    }
}
export default Home;