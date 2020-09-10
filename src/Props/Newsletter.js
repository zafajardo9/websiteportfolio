import React from 'react'
import {makeStyles} from '@material-ui/styles'

import {
    Box,
    Typography,
    TextField,
    Button,
    Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    Newsletter: {
        margin: "auto 50px" ,
        flexGrow: 1
      },
      newsletterIn: {
        width: "100%"
      },
      button: {
          width: "100%",
        [theme.breakpoints.down('xs')]: {
            width: "100%"
          },
      }
}));

export default function Newsletter() {
    const classes = useStyles();
    return (
        <Box className={classes.Newsletter}>
        <Typography variant="h4">
            Newsletter
            <Typography variant="subtitle1">Signup here for Newsletter</Typography>

            <form noValidate autoComplete="off">

                <Grid container>
                    <Grid item xs={12}>
                        <TextField  className={classes.newsletterIn} id="outlined-uncontrolled" label="Email" placeholder="Email" variant="outlined" size="small"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" size="small" className={classes.button} disableElevation>Subscribe</Button>
                    </Grid>
                </Grid>

            </form>

        </Typography>
        </Box>
    )
}
