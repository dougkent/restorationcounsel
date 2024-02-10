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
import * as alyssaImg from '../assets/headshot.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        meetAlyssaContainer: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
        },
        meetAlyssaBody: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            flexGrow: 1,
        },
        meetAlyssaImg: {
            background: `url(${alyssaImg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        mobileImg: {
            width: '100%',
            height: theme.spacing(60),
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
                height: '100%',
                minHeight: '580px',
            },
            [theme.breakpoints.up('lg')]: {
                width: '39%',
            },
        },
        meetAlyssaText: {
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

const MeetAlyssa: React.FC = () => {
    const classes = useStyles(rcTheme);

    return (
        <Container maxWidth='lg' className={classes.meetAlyssaContainer}>
            <Typography variant='h3'>Meet Alyssa</Typography>
            <div className={classes.meetAlyssaBody}>
                <div
                    className={`${classes.meetAlyssaImg} ${classes.desktopImg}`}></div>
                <div className={classes.meetAlyssaText}>
                    <Typography variant='body1' paragraph>
                        Hi there! My name is Alyssa Meyers, and I am a Licensed
                        Professional Counselor in the state of Texas.
                    </Typography>
                    <Typography variant='body1' paragraph>
                        Before entering a private practice setting, I gained
                        counseling experience at community agencies, as well as
                        several years’ experience at an inpatient hospital,
                        where I served as lead therapist on the adult
                        psychiatric unit.
                    </Typography>
                    <Typography variant='body1' paragraph>
                        I am passionate about creating a space of trust,
                        honesty, and safety for all clients who are seeking
                        change in their lives. My specialty areas include:
                        trauma, PTSD/complex PTSD, anxiety/panic disorders,
                        perfectionism, people-pleasing, boundaries, OCD,
                        depression, mood disorders, and spirituality. I am
                        certified in Brainspotting and trained in EMDR, and also
                        love integrating different therapy techniques to fit a
                        client's needs. In addition, I have experience working
                        with other mental health professionals who need their
                        own therapy space to prioritize their wellness.
                    </Typography>
                    <div
                        className={`${classes.meetAlyssaImg} ${classes.mobileImg}`}></div>
                    <Typography variant='body1' paragraph>
                        When I am not counseling, I love spending time with
                        family, being in nature, and being creative through
                        music, ballet, and yoga.
                    </Typography>
                </div>
            </div>
        </Container>
    );
};

export default MeetAlyssa;
