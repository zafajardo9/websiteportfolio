import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Grid,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    IconButton
} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Newsletter from '../Props/Newsletter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#27555B",
        color: "#fff",
        padding: "30px"
    },
    footerIcon: {
        color: "#27555B"
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
            <Grid container justify="center" className={classes.footer}>
                <Grid item xs={12} sm={4} md= {8}lg={8}>
                    <Newsletter />
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={4} xl={3} >
                    <Typography>
                        Social Media Sites
                    </Typography>

                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <IconButton>
                                    <Avatar className={classes.small}>
                                        <FacebookIcon className={classes.footerIcon}/>
                                    </Avatar>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary="Facebook" secondary="/zafajardo"/>
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <IconButton>
                                    <Avatar className={classes.small}>
                                        <TwitterIcon className={classes.footerIcon}/>
                                    </Avatar>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary="Twitter"/>
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <IconButton>
                                    <Avatar className={classes.small}>
                                        <LinkedInIcon className={classes.footerIcon}/>
                                    </Avatar>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary="LinkedIn"/>
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <IconButton>
                                    <Avatar className={classes.small}>
                                        <AccountCircleIcon className={classes.footerIcon}/>
                                    </Avatar>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary="Google"/>
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <IconButton>
                                    <Avatar className={classes.small}>
                                        <GitHubIcon className={classes.footerIcon}/>
                                    </Avatar>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary="Github"/>
                        </ListItem>
                        

                    </List>

                </Grid>
                <Grid item xs={12} sm={12}>
                    Copyright © 2020 Zackery Fajardo
                </Grid>
            
            </Grid>
    )
}
