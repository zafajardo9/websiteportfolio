import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    Box,
    Typography,
    Grid,
    Container
} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#2F4A56",
        color: "#FAFBFA"
      },
    FooterLeft: {
        fontSize: "2em"
    },
    footerIcon: {
        fontSize: "2em"
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={8}>
                <Box>
                    <Typography>

                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Typography>
                    Social Media Sites
                </Typography>
                    <FacebookIcon className={classes.footerIcon}/>
                    <TwitterIcon className={classes.footerIcon}/>
            </Grid>
            </Grid>
            <Container >Copyright © 2020 Zackery Fajardo</Container>
        </div>
        
    )
}
