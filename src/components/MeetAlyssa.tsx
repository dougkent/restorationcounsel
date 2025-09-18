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
import * as alyssaImg from '../assets/headshot_v2.jpg';

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
                        Professional Counselor in the state of Texas. With over
                        10 years of experience in the mental health field, I
                        have a background in private practice, community
                        agencies, and inpatient hospital care.
                    </Typography>
                    <Typography variant='body1' paragraph>
                        I am passionate about creating a space of trust,
                        honesty, and safety for all clients who are seeking
                        change in their lives. My specialty areas include:
                        post-traumatic stress, anxiety, perfectionism,
                        people-pleasing, boundaries, depression, mood disorders,
                        spirituality, and Christian-based counseling upon
                        request. I am trained in both EMDR and Brainspotting,
                        and I integrate various therapy techniques to fit my
                        clients' needs.
                    </Typography>
                    <Typography variant='body1' paragraph>
                        If you're a high achiever, a deep feeler, dealing with
                        burnout, stress, or just need some peace, I might be a
                        good fit for you. I value authenticity in and out of the
                        therapy room, so that is one thing you can expect to
                        find when you reach out. I also have experience working
                        with other mental health professionals who need their
                        own therapy space to prioritize wellness.
                    </Typography>
                    <div
                        className={`${classes.meetAlyssaImg} ${classes.mobileImg}`}></div>
                    <Typography variant='body1' paragraph>
                        When I am not counseling, I love spending time with my
                        family, being in nature, or being creative through
                        music, ballet, and yoga. I am a dog lover and an avid
                        foodie! Any chance I get for self-care, you may find me
                        going for a walk, watching a feel-good movie, or
                        focusing on all things relaxation.
                    </Typography>
                </div>
            </div>
        </Container>
    );
};

export default MeetAlyssa;
