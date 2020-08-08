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
                        250 Ed English Drive, Building 3, Suite B-5
                        <br />
                        Shenandoah, TX 77385
                    </Typography>
                    <Typography paragraph>Directions to the office:</Typography>
                    <Typography paragraph>
                        <ul>
                            <li>
                                Traveling North on I-45, take the Research
                                Forest exit & stay on feeder OR Traveling South
                                on I-45, take Research Forest exit and loop
                                around so you are on the North-bound feeder
                            </li>
                            <li>
                                Take a right on Ed English Drive. (Directly
                                after Portofino shopping center before Discount
                                Tires)
                            </li>
                            <li>
                                Take a right into the office suites and building
                                3 will be directly ahead and on the right. The
                                office suite is labeled "B" on the outside.
                            </li>
                            <li>
                                Please make yourself at home in the waiting room
                                until your pre-determined appointment time.
                            </li>
                        </ul>
                    </Typography>
                </div>
                <div className={classes.contactSection}>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.656566619595!2d-95.45124499250775!3d30.189802949191545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647371c6db9aa2d%3A0x6b0ebc21ffaf02e!2s250+Ed+English+Dr+%235%2C+Shenandoah%2C+TX+77385!5e0!3m2!1sen!2sus!4v1491871997756'
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
