// React
import React, { useState } from 'react';

// Material UI
import {
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    makeStyles,
    Theme,
    createStyles,
    Typography,
} from '@material-ui/core';

//RC
import { rcTheme } from '../themes';
import * as officeImage from '../assets/office-outside.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        counselingServicesContainer: {
            marginBottom: theme.spacing(3),
            paddingTop: theme.spacing(2),
        },
        accordionDetails: {
            flexWrap: 'wrap',
        },
        videoBox: {
            width: '100%',
            height: theme.spacing(60),
            marginTop: theme.spacing(2),
        },
        officeImage: {
            marginTop: theme.spacing(3),
            width: '100%',
            height: theme.spacing(25),
            background: `url(${officeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                height: theme.spacing(38),
            },
            [theme.breakpoints.up('sm')]: {
                height: theme.spacing(50),
            },
            [theme.breakpoints.up('md')]: {
                height: theme.spacing(70),
            },
            [theme.breakpoints.up('lg')]: {
                height: theme.spacing(90),
            },
        },
    })
);

const CounselingServices: React.FC = () => {
    const classes = useStyles(rcTheme);
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (
        event: React.ChangeEvent<{}>,
        newExpanded: boolean
    ) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container
            maxWidth='lg'
            className={classes.counselingServicesContainer}>
            <Typography variant='h3'>Services</Typography>
            <Typography variant='body1'>
                Restoration Counseling is a private practice in the Woodlands
                area that is owned and operated by Alyssa Meyers, MA, LPC, NCC.
                Alyssa primarily works with adults and teenagers and specializes
                in the following areas:
            </Typography>
            <Typography variant='body1'>
                Anxiety Disorders, Depression, Trauma, Abuse-related issues, and
                Christian-based counseling
            </Typography>
            <Typography variant='body1'>
                Counseling services cater to your personality, circumstances,
                and processing style; however, at Restoration Counseling there
                are specific counseling techniques used to ensure that you are
                receiving the best care!
            </Typography>
            <Accordion
                expanded={expanded === 'CBT'}
                onChange={handleChange('CBT')}
                square={true}>
                <AccordionSummary>
                    <Typography variant='body1'>
                        Cognitive Behavioral Therapy (CBT)
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <Typography variant='body1'>
                        CBT works to modify dysfunctional emotions, behaviors,
                        and thoughts. In this type of therapy, we work to create
                        healthy changes and solutions to your problems by
                        challenging distorted thinking and changing destructive
                        patterns in your behavior.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'DBT'}
                onChange={handleChange('DBT')}
                square={true}>
                <AccordionSummary>
                    <Typography variant='body1'>
                        Dialectical Behavioral Therapy (DBT)
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <Typography variant='body1'>
                        DBT is often utilized alongside CBT and focuses on
                        regulating your emotions. This is a great technique for
                        those who experience intense or quick shifts in mood and
                        may have difficulty controlling these feelings. DBT will
                        help you gain skills on how to regulate your emotions
                        and interact with others appropriately.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'EMDR'}
                onChange={handleChange('EMDR')}
                square={true}>
                <AccordionSummary>
                    <Typography variant='body1'>
                        Eye Movement Desensitization and Reprocessing (EMDR)
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <div>
                        <Typography variant='body1'>
                            EMDR is a unique therapy technique used for
                            individuals who have experienced trauma. When an
                            individual experiences trauma, the brain cannot
                            process as it ordinarily does and becomes "frozen"
                            on a specific memory. EMDR is utilized to bring our
                            thought processing back to its normal state and to
                            see disturbing events in a less distressing way. For
                            more information to find out if EMDR is right for
                            you, you can view the video below or visit&nbsp;
                            <a href='emdria.org' target='_blank'>
                                emdria.org
                            </a>
                            &nbsp; for more information.
                        </Typography>
                    </div>
                    <div className={classes.videoBox}>
                        <iframe
                            width='100%'
                            height='100%'
                            title='EMDR Video'
                            src='https://www.youtube.com/embed/_QJbCtr8bvA'></iframe>
                    </div>
                </AccordionDetails>
            </Accordion>
            <div className={classes.officeImage}></div>
        </Container>
    );
};

export default CounselingServices;
