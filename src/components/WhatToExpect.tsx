// React
import React from 'react';

// Material UI
import {
    Container,
    Typography,
    makeStyles,
    Theme,
    createStyles,
} from '@material-ui/core';

// RC
import { rcTheme } from '../themes';
import * as officeImg from '../assets/office-inside.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        whatToExpectContainer: {
            marginBottom: theme.spacing(3),
            paddingTop: theme.spacing(2),
        },
        whatToExpectBody: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
        },
        whatToExpectImg: {
            background: `url(${officeImg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        mobileImg: {
            width: '100%',
            height: theme.spacing(50),
            marginBottom: theme.spacing(2),
            [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                display: 'none',
            },
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        desktopImg: {
            display: 'none',
            [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                display: 'block',
                width: '48%',
                height: theme.spacing(50),
            },
            [theme.breakpoints.up('sm')]: {
                display: 'block',
                width: '48%',
                height: theme.spacing(65),
            },
            [theme.breakpoints.up('md')]: {
                height: theme.spacing(75),
            },
            [theme.breakpoints.up('lg')]: {
                height: theme.spacing(85),
                width: '39%',
            },
        },
        WhatToExpectText: {
            [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                width: '48%',
            },
            [theme.breakpoints.up('sm')]: {
                width: '48%',
            },
            [theme.breakpoints.up('lg')]: {
                width: '59%',
            },
        },
    })
);

const WhatToExpect: React.FC = () => {
    const classes = useStyles(rcTheme);

    return (
        <Container maxWidth='lg' className={classes.whatToExpectContainer}>
            <Typography variant='h3'>What To Expect</Typography>
            <div className={classes.whatToExpectBody}>
                <div className={classes.WhatToExpectText}>
                    <Typography variant='body1' paragraph>
                        Communication and treatment is personalized, and Alyssa
                        will be the one you contact directly for all your
                        counseling needs.
                    </Typography>
                    <Typography variant='h4'>Sessions</Typography>
                    <Typography variant='body1' paragraph>
                        Alyssa offers a complimentary phone call prior to your
                        first session to ensure that you feel comfortable with
                        details and regulations prior to scheduling. This is a
                        great time to ask questions about the counseling process
                        and calm any nerves you may have.
                    </Typography>
                    <Typography variant='body1' paragraph>
                        Counseling sessions are typically 50 minutes long, and a
                        big goal at Restoration Counseling is that you feel
                        comfortable throughout every step of the way! We will
                        collaborate together to identify treatment goals and
                        create a road map for your counseling journey.
                    </Typography>
                    <div
                        className={`${classes.whatToExpectImg} ${classes.mobileImg}`}></div>
                    <Typography variant='h4'>Payment Options</Typography>
                    <Typography variant='body1' paragraph>
                        You can pay with cash, personal check, or credit card
                        for each of your sessions. While insurance is not
                        accepted, many insurance panels have out-of-network
                        benefits. A detailed receipt of services will be
                        provided upon request for anyone who would like to file
                        back with their insurance company for potential
                        reimbursement. For further details, feel free to contact
                        Alyssa directly.
                    </Typography>
                </div>
                <div
                    className={`${classes.whatToExpectImg} ${classes.desktopImg}`}></div>
            </div>
        </Container>
    );
};

export default WhatToExpect;
