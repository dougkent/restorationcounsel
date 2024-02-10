// React
import React from 'react';

// Material UI
import {
    createStyles,
    Theme,
    makeStyles,
    Typography,
    Container,
    Hidden,
} from '@material-ui/core';

// RC
import { rcTheme } from '../themes';
import informedConsentForm from '../assets/forms/Informed_Consent_Form.pdf';
import * as teletherapyImg from '../assets/teletherapy.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formsAndLinksContainer: {
            '& a': {
                color: theme.palette.primary.main,
            },
        },
        flex: {
            display: 'flex',
            flexWrap: 'wrap',
            [theme.breakpoints.up('md')]: {
                justifyContent: 'space-between',
            },
        },
        spaceBetween: {
            justifyContent: 'space-between',
        },
        leftColumn: {
            [theme.breakpoints.up('md')]: {
                width: '50%',
            },
        },
        list: {
            margin: 0,
        },
        teletherapyImg: {
            background: `url(${teletherapyImg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: theme.spacing(50),
            marginBottom: theme.spacing(2),
            [theme.breakpoints.up('md')]: {
                width: '48%',
                minHeight: '100%',
                height: 'auto',
            },
        },
    })
);

const FormsAndLinks: React.FC = () => {
    const classes = useStyles(rcTheme);

    return (
        <Container maxWidth='lg' className={classes.formsAndLinksContainer}>
            <Typography variant='h3'>Forms & Links</Typography>
            <Typography variant='h5' paragraph>
                Intake Forms
            </Typography>
            <div className={classes.flex}>
                <div className={classes.leftColumn}>
                    <Typography paragraph>
                        The following form includes all information you may want
                        to know about the counseling process. Once an intake
                        appointment is scheduled, you will be asked to sign this
                        form and complete intake paperwork via an online portal
                        account provided to you.
                    </Typography>
                    <Typography paragraph>
                        <ul className={classes.list}>
                            <li>
                                <a
                                    href={informedConsentForm}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Restoration Counseling Informed Consent
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://portal.therapyappointment.com/index.cfm/public:therapistdetail?directoryId=11ebbe9134006fe38e7e0e943d89650f'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Client Portal
                                </a>
                            </li>
                        </ul>
                    </Typography>
                    <Typography variant='h5' paragraph>
                        Online Scheduling
                    </Typography>
                    <Typography paragraph>
                        Once you have been established as a client, you can use
                        the online scheduling portal to conveniently schedule,
                        reschedule, or cancel sessions at the click of a button!
                        Simply use your established username and password to
                        login and search for available appointment times by
                        visiting&nbsp;
                        <a
                            href='https://portal.therapyappointment.com/index.cfm/public:therapistdetail?directoryId=11ebbe9134006fe38e7e0e943d89650f'
                            target='_blank'
                            rel='noopener noreferrer'>
                            portal.therapyappointment.com
                        </a>
                        .
                    </Typography>
                    <Typography variant='h5' paragraph>
                        Teletherapy
                    </Typography>
                    <Typography paragraph>
                        Teletherapy is a great option when in-person sessions
                        are not a possibility! Once your teletherapy appointment
                        has been made, simply click on the link below at your
                        designated appointment time to enter the virtual waiting
                        room.
                    </Typography>
                    <Typography paragraph>
                        <ul className={classes.list}>
                            <li>
                                <a
                                    href='https://doxy.me/restorationcounsel'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Doxy Waiting Room
                                </a>
                            </li>
                        </ul>
                    </Typography>
                    <Hidden mdUp>
                        <div className={classes.teletherapyImg}></div>
                    </Hidden>
                </div>
                <Hidden smDown>
                    <div className={classes.teletherapyImg}></div>
                </Hidden>
            </div>
        </Container>
    );
};

export default FormsAndLinks;
