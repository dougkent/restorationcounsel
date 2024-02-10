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
import * as officeImage from '../assets/office-outside-2.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        accordionDetails: {
            flexWrap: 'wrap',
            '& a': {
                color: theme.palette.primary.main,
            },
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

    const handleChange =
        (panel: string) =>
        (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Container maxWidth='lg'>
            <Typography variant='h3'>Services</Typography>
            <Typography variant='body1' paragraph>
                Restoration Counseling is a private practice in The
                Woodlands/Magnolia area that is owned and operated by Alyssa
                Meyers, MA, LPC #72648. Alyssa primarily works with adults and
                teenagers (15 and older) and specializes in the following areas:
            </Typography>
            <Typography variant='body1' paragraph>
                Trauma, Anxiety, Perfectionism, Boundaries, People-Pleasing,
                Obsessive-Compulsive Disorder (OCD), Depression, and
                Christian-based counseling
            </Typography>
            <Typography variant='body1' paragraph>
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
                    <Typography variant='body1' paragraph>
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
                    <Typography variant='body1' paragraph>
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
                        <Typography variant='body1' paragraph>
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
                            src='https://www.youtube.com/embed/Pkfln-ZtWeY'></iframe>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'BSP'}
                onChange={handleChange('BSP')}
                square={true}>
                <AccordionSummary>
                    <Typography variant='body1'>Brainspotting (BSP)</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <div>
                        <Typography variant='body1' paragraph>
                            Brainspotting is a unique therapy modality that uses
                            our vision to access emotions, beliefs, and/or
                            traumas stored in the subcortical region of the
                            brain. How often have you said something to the
                            effect of, "I know that's true, but I still feel
                            this way!"? Essentially, BSP targets the area of the
                            brain where that feeling or belief remains stuck.
                            For more information on how this works, check out
                            this starter video below! For a deeper dive, you can
                            also check out the book "Brainspotting" by David
                            Grand.
                        </Typography>
                    </div>
                    <div className={classes.videoBox}>
                        <iframe
                            width='100%'
                            height='100%'
                            src='https://www.youtube.com/embed/7FO_udVWkqA?si=xBOGg5zCbZ4qT-Pp'
                            title='BSP Video'></iframe>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'IFS'}
                onChange={handleChange('IFS')}
                square={true}>
                <AccordionSummary>
                    <Typography variant='body1'>
                        Internal Family Systems (IFS)
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <div>
                        <Typography variant='body1' paragraph>
                            Internal Family Systems, or IFS, is a therapy
                            modality that explores different parts of ourselves
                            that play a role in our thoughts, emotions, and
                            behaviors. In IFS, we believe that the mind is
                            naturally made up of many parts (e.g., our inner
                            critic, our inner child, etc.). The goal of IFS is
                            to increase our ability to be courageous, curious,
                            and compassionate towards ourselves and as we become
                            more and more aware of the roles these parts play in
                            our lives. To learn more, explore this starter
                            video!
                        </Typography>
                    </div>
                    <div className={classes.videoBox}>
                        <iframe
                            width='100%'
                            height='100%'
                            src='https://www.youtube.com/embed/5DFIfSHL11w?si=hHAGCkAcHTy43YF1'
                            title='IFS Video'></iframe>
                    </div>
                </AccordionDetails>
            </Accordion>
            <div className={classes.officeImage}></div>
        </Container>
    );
};

export default CounselingServices;
