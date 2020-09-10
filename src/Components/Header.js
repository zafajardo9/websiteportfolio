import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
Avatar,
Box,
Grid,
Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  avatar: {
    width: "300px",
    height: "300px",

    [theme.breakpoints.down('xs')]: {
      alignItems: "center",
      alignSelf: "center"
    },
  }, 
  headerBox: {
    margin: "50% auto",
    fontSize: "1rem",
    [theme.breakpoints.down('xs')]: {
      textAlign: "center"
    },
  },
  NameHeader: {
    fontStyle: "bold",
    fontSize: "2em"
  }
}))

//TODO

//Use Fonts
//GLobal React Router


export default function Header() {
    const classes = useStyles();
    
    return (
      <>

      <Grid container className={classes.header} alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={4} lg={8} xl={3}>

          <Box className={classes.box} m="auto">
            <Avatar  className={classes.avatar} alt="Lol" src="https://i.pinimg.com/564x/f2/60/4d/f2604d7288860de99f88315a3487fa69.jpg"/>
          </Box>
 
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3} >
          <Box className={classes.headerBox}>
            <Typography className={classes.NameHeader}>
              Zackery Alline V. Fajardo
            </Typography> 
            <Typography>
              BSIT,
              Loves making webby.
            </Typography>
          </Box>

        </Grid>
      </Grid>


      </>
    )
}
