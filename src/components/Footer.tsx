// React
import React from 'react';

// Material UI
import { createStyles, Theme, makeStyles } from '@material-ui/core';

// RC
import { rcTheme } from '../themes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            color: theme.palette.secondary.main,
            backgroundColor: '#89898b',
            padding: `${theme.spacing(2)}px 0`,
        },
    })
);

const Footer: React.FC = () => {
    const classes = useStyles(rcTheme);

    return (
        <div className={classes.footer}>
            <div>
                Alyssa Meyers, MA, LPC, NCC
                <br />
                Licensed Professional Counselor #72648
                <br />
                250 Ed English Drive, Building 3, Suite B-5
                <br />
                Shenandoah, TX 77385
                <br />
                (936)-203-1772
                <br />
                <a href='mailto:alyssa@restorationcounsel.com'>
                    alyssa@restorationcounsel.com
                </a>
            </div>
        </div>
    );
};

export default Footer;
