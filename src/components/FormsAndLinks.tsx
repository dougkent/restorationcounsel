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
import adultIntakeForm from '../assets/forms/Adult_Intake_Form.pdf';
import minorIntakeForm from '../assets/forms/Child_Adolescent_Intake_Form.pdf';
import creditCartPaymentForm from '../assets/forms/Credit_Card_Payment_Form.pdf';
import hipaaPolicies from '../assets/forms/HIPAA_Policies.pdf';
import releaseOfInfoForm from '../assets/forms/Release_of_Info_Consent_Form.pdf';
import teletherapyForm from '../assets/forms/Teletherapy_Consent_Form.pdf';
import * as intakePaperworkImg from '../assets/intake-paperwork.jpg';
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
        intakeFormsImg: {
            background: `url(${intakePaperworkImg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: theme.spacing(30),
            marginBottom: theme.spacing(2),
            [theme.breakpoints.up('md')]: {
                width: '50%',
                minHeight: '100%',
                height: 'auto',
            },
        },
        teletherapyImg: {
            background: `url(${teletherapyImg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: theme.spacing(30),
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
                        Once you have scheduled an appointment with Alyssa, you
                        will be sent a link to activate your online portal
                        account. By clicking this link, you will then have
                        access to electronic intake forms that can easily be
                        completed on your computer, tablet, or smartphone.{' '}
                        <i>
                            A scanner or the GeniusScan app can also be used if
                            preferred.
                        </i>
                    </Typography>
                    <Typography paragraph>
                        <ul className={classes.list}>
                            <li>
                                <a
                                    href={informedConsentForm}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Informed Consent
                                </a>
                            </li>
                            <li>
                                <a
                                    href={adultIntakeForm}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Adult Intake Form
                                </a>
                            </li>
                            <li>
                                <a
                                    href={minorIntakeForm}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Child/Adolescent Intake Form
                                </a>
                            </li>
                            <li>
                                <a
                                    href={creditCartPaymentForm}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Credit Card Payment Form
                                </a>
                            </li>
                            <li>
                                <a
                                    href={hipaaPolicies}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    HIPAA Policies
                                </a>
                            </li>
                        </ul>
                    </Typography>
                    <Typography paragraph>
                        <div>
                            <a
                                href='https://apps.apple.com/us/app/genius-scan-pdf-scanner/id377672876'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Download GeniusScan Free for Apple
                            </a>
                        </div>
                        <div>
                            <a
                                href='https://play.google.com/store/apps/details?id=com.thegrizzlylabs.geniusscan.free&hl=en_US'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Download GeniusScan Free for Android
                            </a>
                        </div>
                    </Typography>
                </div>
                <div className={classes.intakeFormsImg}></div>
            </div>
            <Typography variant='h5' paragraph>
                Online Scheduling
            </Typography>
            <Typography paragraph>
                Once you have been established as a client, you can use the
                online scheduling portal to conveniently schedule, reschedule,
                or cancel sessions at the click of a button! Simply use your
                established username and password to login and search for
                available appointment times by visiting&nbsp;
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
            <div className={`${classes.flex} ${classes.spaceBetween}`}>
                <div className={classes.leftColumn}>
                    <Typography paragraph>
                        Teletherapy is a great option when in-person sessions
                        are not a possibility! Once your teletherapy appointment
                        has been made, simply click on the link below at your
                        designated appointment time to enter the virtual waiting
                        room. Be sure to read and complete the teletherapy
                        consent form (link below) prior to your appointment and
                        follow the tips listed for best video session
                        experience!
                    </Typography>
                    <Typography paragraph>
                        <ul className={classes.list}>
                            <li>
                                <a
                                    href='https://doxy.me/restorationcounsel'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Teletherapy Waiting Room
                                </a>
                            </li>
                            <li>
                                <a
                                    href={teletherapyForm}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Teletherapy Consent Form
                                </a>
                            </li>
                        </ul>
                    </Typography>
                    <Hidden mdUp>
                        <div className={classes.teletherapyImg}></div>
                    </Hidden>
                    <Typography variant='h5' paragraph>
                        Other Forms
                    </Typography>
                    <Typography paragraph>
                        <ul className={classes.list}>
                            <li>
                                <a
                                    href={releaseOfInfoForm}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Release of Information Consent Form
                                </a>
                            </li>
                        </ul>
                    </Typography>
                </div>
                <Hidden smDown>
                    <div className={classes.teletherapyImg}></div>
                </Hidden>
            </div>
        </Container>
    );
};

export default FormsAndLinks;
