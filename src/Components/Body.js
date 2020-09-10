import React from 'react'
import { makeStyles } from '@material-ui/core';
import {
    Paper,
    Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
      }
  }));
  

export default function Body() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
            <Paper className={classes.paper}>Content Here</Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={6} >
            <Paper className={classes.paper}>Other here</Paper>
            </Grid>
            </Grid>
        </div>
    )
}
