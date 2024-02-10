// React
import React, { useState } from 'react';
import * as ReactRouter from 'react-router-dom';

// Material UI
import {
    AppBar,
    Toolbar,
    Typography,
    createStyles,
    Theme,
    makeStyles,
    Hidden,
    IconButton,
    SwipeableDrawer,
    List,
    ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// RC
import { rcTheme } from '../themes';
import * as navBarBackgrounImage from '../assets/navbar-background.jpg';
import { ReactComponent as DandelionMark } from '../assets/dandelion-mark.svg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navBarBackground: {
            background: `url(${navBarBackgrounImage}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 20%',
            height: theme.spacing(25),
            [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                height: theme.spacing(20),
            },
            [`${theme.breakpoints.up('sm')}`]: {
                height: theme.spacing(25),
            },
            [`${theme.breakpoints.up('md')}`]: {
                height: theme.spacing(35),
            },
            [`${theme.breakpoints.up('lg')}`]: {
                height: theme.spacing(50),
                backgroundPosition: '50% 23%',
            },
        },
        appBar: {
            boxShadow: 'none',
            paddingTop: theme.spacing(1),
            [`${theme.breakpoints.up('lg')}`]: {
                paddingTop: theme.spacing(3),
            },
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        titleLink: {
            display: 'flex',
        },
        title: {
            fontFamily: "'Allura', cursive",
            marginBottom: 0,
            [`${theme.breakpoints.up('lg')}`]: {
                fontSize: '5em',
            },
        },
        icon: {
            height: '3em',
            width: '2em',

            marginTop: theme.spacing(-1.1),
            [`${theme.breakpoints.up('sm')}`]: {
                height: '4em',
                width: '2em',
            },
            [`${theme.breakpoints.up('lg')}`]: {
                marginTop: theme.spacing(-2),
                height: '6em',
                width: '3em',
                marginLeft: theme.spacing(5),
            },
        },
        navLink: {
            textDecoration: 'none',
            color: 'inherit',
        },
        mobileDrawer: {
            '& .MuiDrawer-paper': {
                backgroundColor: 'rgba(255,255,255,0.75)',
            },
        },
        mobileMenu: {
            width: 250,
            padding: theme.spacing(3),
        },
        mobileMenuItem: {
            marginBottom: theme.spacing(3),
        },
        desktopMenu: {
            display: 'flex',
        },
        desktopMenuItem: {
            marginLeft: theme.spacing(3),
        },
    })
);

const Nav: React.FC = () => {
    const classes = useStyles(rcTheme);

    const [isMobileMenuOpen, setIsMobilMenuOpen] = useState<boolean>(false);

    const handleMobileMenuClose = () => {
        setIsMobilMenuOpen(false);
    };

    const handleMobileMenuOpen = () => {
        setIsMobilMenuOpen(true);
    };

    const renderMobileMenu = (
        <SwipeableDrawer
            id='mobile-menu'
            open={isMobileMenuOpen}
            onOpen={handleMobileMenuOpen}
            onClose={handleMobileMenuClose}
            anchor='right'
            className={classes.mobileDrawer}>
            <List className={classes.mobileMenu}>
                <ListItemText>
                    <Typography
                        variant='h5'
                        noWrap
                        color='primary'
                        className={classes.mobileMenuItem}>
                        <ReactRouter.Link
                            to='/'
                            onClick={handleMobileMenuClose}
                            className={classes.navLink}>
                            Home
                        </ReactRouter.Link>
                    </Typography>
                </ListItemText>
                <ListItemText>
                    <Typography
                        variant='h5'
                        noWrap
                        color='primary'
                        className={classes.mobileMenuItem}>
                        <ReactRouter.Link
                            to='/meet-alyssa'
                            onClick={handleMobileMenuClose}
                            className={classes.navLink}>
                            Meet Alyssa
                        </ReactRouter.Link>
                    </Typography>
                </ListItemText>
                <ListItemText>
                    <Typography
                        variant='h5'
                        noWrap
                        color='primary'
                        className={classes.mobileMenuItem}>
                        <ReactRouter.Link
                            to='/forms'
                            onClick={handleMobileMenuClose}
                            className={classes.navLink}>
                            Forms & Links
                        </ReactRouter.Link>
                    </Typography>
                </ListItemText>
                <ListItemText>
                    <Typography
                        variant='h5'
                        noWrap
                        color='primary'
                        className={classes.mobileMenuItem}>
                        <ReactRouter.Link
                            to='/contact'
                            onClick={handleMobileMenuClose}
                            className={classes.navLink}>
                            Contact
                        </ReactRouter.Link>
                    </Typography>
                </ListItemText>
            </List>
        </SwipeableDrawer>
    );

    return (
        <div className={classes.navBarBackground}>
            <AppBar
                position='absolute'
                color='transparent'
                className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Hidden smUp>
                        <ReactRouter.Link
                            to='/'
                            className={`${classes.navLink} ${classes.titleLink}`}>
                            <DandelionMark className={classes.icon} />
                            <Typography
                                variant='h4'
                                color='primary'
                                className={classes.title}>
                                Restoration Counseling
                            </Typography>
                        </ReactRouter.Link>
                    </Hidden>
                    <Hidden xsDown>
                        <ReactRouter.Link
                            to='/'
                            className={`${classes.navLink} ${classes.titleLink}`}>
                            <DandelionMark className={classes.icon} />
                            <Typography
                                variant='h3'
                                color='primary'
                                className={classes.title}>
                                Restoration Counseling
                            </Typography>
                        </ReactRouter.Link>
                    </Hidden>
                    <div>
                        <Hidden mdUp>
                            <IconButton
                                edge='end'
                                color='inherit'
                                aria-label='open drawer'
                                aria-controls='mobile-menu'
                                aria-haspopup='true'
                                onClick={handleMobileMenuOpen}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Hidden smDown>
                            <div className={classes.desktopMenu}>
                                <Typography
                                    variant='h6'
                                    noWrap
                                    color='primary'
                                    className={classes.desktopMenuItem}>
                                    <ReactRouter.Link
                                        to='/'
                                        onClick={handleMobileMenuClose}
                                        className={classes.navLink}>
                                        Home
                                    </ReactRouter.Link>
                                </Typography>
                                <Typography
                                    variant='h6'
                                    noWrap
                                    color='primary'
                                    className={classes.desktopMenuItem}>
                                    <ReactRouter.Link
                                        to='/meet-alyssa'
                                        onClick={handleMobileMenuClose}
                                        className={classes.navLink}>
                                        Meet Alyssa
                                    </ReactRouter.Link>
                                </Typography>
                                <Typography
                                    variant='h6'
                                    noWrap
                                    color='primary'
                                    className={classes.desktopMenuItem}>
                                    <ReactRouter.Link
                                        to='/forms'
                                        onClick={handleMobileMenuClose}
                                        className={classes.navLink}>
                                        Forms & Links
                                    </ReactRouter.Link>
                                </Typography>
                                <Typography
                                    variant='h6'
                                    noWrap
                                    color='primary'
                                    className={classes.desktopMenuItem}>
                                    <ReactRouter.Link
                                        to='/contact'
                                        onClick={handleMobileMenuClose}
                                        className={classes.navLink}>
                                        Contact
                                    </ReactRouter.Link>
                                </Typography>
                            </div>
                        </Hidden>
                    </div>
                </Toolbar>
            </AppBar>
            <Hidden mdUp>{renderMobileMenu}</Hidden>
        </div>
    );
};

export default Nav;
