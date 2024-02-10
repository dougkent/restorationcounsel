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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contactBody: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            [theme.breakpoints.up('md')]: {
                flexWrap: 'nowrap',
            },
            '& a': {
                color: theme.palette.primary.main,
            },
        },
        contactSection: {
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '49%',
            },
        },
    })
);

const Contact: React.FC = () => {
    const classes = useStyles(rcTheme);

    return (
        <Container maxWidth='lg'>
            <Typography variant='h3'>Contact</Typography>
            <div className={classes.contactBody}>
                <div className={classes.contactSection}>
                    <Typography paragraph>
                        <a href='mailto:alyssa@restorationcounsel.com'>
                            alyssa@restorationcounsel.com
                        </a>
                        <br />
                        <span>(936)-203-1772</span>
                    </Typography>
                    <Typography paragraph>
                        In-person sessions available Tuesdays and Thursdays
                        9am-4pm.
                    </Typography>
                    <Typography paragraph>
                        Teletherapy sessions available Mondays 9am-4pm.
                    </Typography>
                    <Typography paragraph>
                        33300 Egypt Lane, Suite C600
                        <br />
                        Magnolia, TX 77354
                    </Typography>
                    <Typography paragraph>Directions to the office:</Typography>
                    <Typography paragraph>
                        <ul>
                            <li>Building C is at the center of the complex.</li>
                            <li>
                                I recommend parking in a space as close to the
                                mailbox as possible, then walk down the sidewalk
                                to the first pathway on the right.
                            </li>
                            <li>
                                Down that breezeway you'll find C600, which is
                                the second (and last) office door on the left.
                            </li>
                            <li>
                                The sign says "Counseling Services" with a
                                dandelion on it. Please wait in the waiting
                                room, and I'll come out to greet you when it's
                                time for our session!
                            </li>
                        </ul>
                    </Typography>
                </div>
                <div className={classes.contactSection}>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1024.975412115582!2d-95.56133606830497!3d30.22017315475045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86472ffe07655555%3A0xfb263c65d6926249!2s33300%20Egypt%20Ln%20%23%20C600%2C%20Magnolia%2C%20TX%2077354!5e0!3m2!1sen!2sus!4v1707595193037!5m2!1sen!2sus'
                        width='100%'
                        height='300'
                        title='Restoration Counseling Map'
                        style={{ border: 0 }}></iframe>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
