import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Typography,
    CardActionArea,
    Button,
    CardMedia,
    CardActions
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const OutdoorPool = (props) => {
    const classes = useStyles();
    let { pool } = props;
    let { photo, title, address, phone, schedule, book } = pool;
    return (
        <Card className={classes.root} style={{ marginTop: "5%" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    title={title}
                    height="140"
                    src={photo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {phone}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={schedule} size="small" color="primary">
                    View Schedule
              </Button>
                <Button onClick={book} size="small" color="primary">
                    Book Camp
              </Button>
            </CardActions>
        </Card>
    );
};
export default OutdoorPool;
