// React
import React from 'react';

// Material UI
import { Typography, Container } from '@material-ui/core';

// RC
import informedConsentForm from '../assets/forms/Informed_Consent_Form.pdf';
import adultIntakeForm from '../assets/forms/Adult_Intake_Form.pdf';
import minorIntakeForm from '../assets/forms/Child_Adolescent_Intake_Form.pdf';
import creditCartPaymentForm from '../assets/forms/Credit_Card_Payment_Form.pdf';
import hipaaPolicies from '../assets/forms/HIPAA_Policies.pdf';

const Forms: React.FC = () => {
    return (
        <Container maxWidth='lg'>
            <Typography variant='h3'>Forms</Typography>
            <Typography paragraph>
                Intake Forms for Scheduled Clients
            </Typography>
            <Typography paragraph>
                <ul>
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
        </Container>
    );
};

export default Forms;
