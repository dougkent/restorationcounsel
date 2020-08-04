// React
import React from 'react';

// Material UI
import { createStyles, Theme, makeStyles } from '@material-ui/core';

// RC
import { rcTheme } from '../themes';
import * as counselingServicesImg from '../assets/mindfulness.jpg';
import * as whatToExpectImg from '../assets/clovers.jpg';
import * as crisisResources from '../assets/dandelions.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        homeContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'center',
            flexWrap: 'wrap',
            padding: `${theme.spacing(2)}px ${theme.spacing(
                2
            )}px 0px ${theme.spacing(2)}px`,
            [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                flexWrap: 'noWrap',
            },
            [theme.breakpoints.up('lg')]: {
                flexWrap: 'noWrap',
            },
        },
        linkTile: {
            width: '100%',
            height: '30vh',
            border: `1px solid ${theme.palette.primary.main}`,
            padding: theme.spacing(1),
            marginBottom: theme.spacing(2),
            [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                width: '30vw',
                height: '40vh',
            },
            [theme.breakpoints.up('md')]: {
                height: '25vh',
            },
            [`${theme.breakpoints.up('md')} and (orientation: landscape)`]: {
                width: '30vw',
                height: '45vh',
            },
            [theme.breakpoints.up('lg')]: {
                width: '32vw',
                height: '55vh',
            },
        },
        link: {
            height: '100%',
            width: '100%',
            display: 'block',
            color: '#fff',
            padding: theme.spacing(4),
            fontSize: '18px',
            textDecoration: 'none',
        },
        cousnselingServices: {
            background: `url(${counselingServicesImg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
        },
        whatToExpect: {
            background: `url(${whatToExpectImg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 65%',
        },
        crisisResources: {
            background: `url(${crisisResources}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: '0% 25%',
            [theme.breakpoints.up('sm')]: {
                backgroundPosition: '0% 65%',
            },
            [`${theme.breakpoints.up('sm')} and (orientation: landscape)`]: {
                backgroundPosition: '65% 65%',
            },
        },
    })
);

const Home: React.FC = () => {
    const classes = useStyles(rcTheme);

    return (
        <div className={classes.homeContainer}>
            <div className={classes.linkTile}>
                <a
                    href='/counseling-services'
                    className={`${classes.link} ${classes.cousnselingServices}`}>
                    Counseling Services
                </a>
            </div>
            <div className={classes.linkTile}>
                <a
                    href='/what-to-expect'
                    className={`${classes.link} ${classes.whatToExpect}`}>
                    What To Expect
                </a>
            </div>
            <div className={classes.linkTile}>
                <a
                    href='/crisis-resources'
                    className={`${classes.link} ${classes.crisisResources}`}>
                    Crisis Resources
                </a>
            </div>
        </div>
    );
};

export default Home;