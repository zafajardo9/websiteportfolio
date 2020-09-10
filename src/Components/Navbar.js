import React from 'react'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { 
  AppBar,
  Toolbar, 
  Typography, 
  Button,
  Tabs,
  Tab
} from '@material-ui/core';
import Portfolio from '../Pages/Portfolio'
import Contacts from '../Pages/Contact'
import About from '../Pages/About'

import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function HideOnScroll(props) {
    const { children, window } = props;
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
    const routes = [
      "/home",
      "/portfolio",
      "/about",
      "/contacts"
    ];

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>

            <BrowserRouter>
              <Route path="/">
                <AppBar position="static">
                      <Toolbar>
                      <Typography variant="h6" className={classes.title}>
                          Zack Fajardo
                      </Typography>
                      <Tabs>
                        <Tab label="Zack" value={routes[1]} component={Link} to={routes[1]}/>
                        <Tab label="Lol"/>
                      </Tabs>
                      

                      <Button color="inherit" value={routes[0]}>Home</Button>
                      <Button color="inherit" value={routes[1]} component={Link} to={routes[1]}>Portfolio</Button>
                      <Button color="inherit" value={routes[2]} component={Link} to={routes[2]}>About</Button>
                      <Button color="inherit" value={routes[3]} component={Link} to={routes[3]}>Contact</Button>
                      </Toolbar>
                  </AppBar>
              </Route>
              <Switch>
                <Route path="/home" />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
              </Switch>
            </BrowserRouter>
            </HideOnScroll>

        </div>
    )
}
