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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        title: {
            fontFamily: "'Allura', cursive",
        },
        navLink: {
            textDecoration: 'none',
            color: 'inherit',
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
            color='transparent'>
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
                            Forms
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
        <>
            <AppBar position='absolute' color='transparent'>
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant='h4'
                        color='primary'
                        noWrap
                        className={classes.title}>
                        <ReactRouter.Link to='/' className={classes.navLink}>
                            Restoration Counseling
                        </ReactRouter.Link>
                    </Typography>
                    <div>
                        <Hidden smUp>
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
                        <Hidden xsDown>
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
                                        Forms
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
            <Hidden smUp>{renderMobileMenu}</Hidden>
        </>
    );
};

export default Nav;
