// React
import React from 'react';

// Material UI
import {
    Typography,
    Container,
    makeStyles,
    Theme,
    createStyles,
} from '@material-ui/core';

//RC
import { rcTheme } from '../themes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        crisisResourceList: {
            padding: 0,
            margin: 0,
            textAlign: 'center',
            '& > li': {
                listStyle: 'none',
                marginBottom: '0.8rem',
            },
        },
    })
);

const CrisisResources: React.FC = () => {
    const classes = useStyles(rcTheme);

    return (
        <Container maxWidth='lg'>
            <Typography variant='h3'>Crisis Resources</Typography>
            <Typography variant='body1' paragraph>
                Although Restoration Counseling is equipped to handle crisis
                situations for current clients in session; Restoration
                Counseling is not a crisis-oriented facility. If you or a loved
                one are experiencing a crisis or emergency, it is best advised
                that you call 911, visit your nearest emergency room, or contact
                one of the following resources:
            </Typography>
            <Typography paragraph>
                <ul className={classes.crisisResourceList}>
                    <li>
                        Tri-County Psychiatric Emergency Treatment Center:
                        800-659-6994
                    </li>
                    <li>
                        National Suicide Prevention Line: 1-800-273-TALK (8255)
                    </li>
                    <li>Cypress Creek Hospital: 281-586-7600</li>
                    <li>Woodland Springs Hospital: 936-213-5843</li>
                    <li>Kingwood Pines Hospital: 281-404-1001</li>
                    <li>IntraCare North Hospital (Houston): 281-893-7200</li>
                    <li>The Harris Center (Houston): 713-970-7000</li>
                    <li>
                        Memorial Hermann Crisis Clinic (Spring Branch):
                        713-338-MHCC(6422)
                    </li>
                    <li>Teen Crisis Hotline: Text “START” to 741741</li>
                    <li>Gulf Coast Center Crisis Hotline: 866-729-3848</li>
                    <li>
                        For further assistance on outpatient referrals, please
                        contact Mosaics of Mercy to be connected to a family
                        navigator.&nbsp;
                        <a
                            href='https://mosaicsofmercy.com/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            https://mosaicsofmercy.com/
                        </a>
                    </li>
                </ul>
            </Typography>
        </Container>
    );
};

export default CrisisResources;
