import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
Avatar,
Box,
Grid,
Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  avatar: {
    display: "block",
    margin: "5rem auto",
    width: 400,
    height: 400 //TO BE EDITED //Responsiveness
  },
  headerBox: {
    margin: "50% auto",
    fontSize: "1rem"
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

      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Box component="div">
            <div className={classes.root}>
                <Avatar className={classes.avatar} alt="Lol" src="https://i.pinimg.com/564x/f2/60/4d/f2604d7288860de99f88315a3487fa69.jpg" />
            </div>   
          </Box>
        </Grid>
        <Grid item xs={4}>
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
