import React from 'react'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Zack Fajardo
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Portfolio</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

        </div>
    )
}
