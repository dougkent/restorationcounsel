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
        link: {
            color: theme.palette.secondary.main,
            textDecoration: 'none',
        },
    })
);

const Footer: React.FC = () => {
    const classes = useStyles(rcTheme);

    return (
        <div className={classes.footer}>
            <div>
                Alyssa Meyers, MA, LPC
                <br />
                Licensed Professional Counselor #72648
                <br />
                33300 Egypt Lane, Suite C600
                <br />
                Magnolia, TX 77354
                <br />
                (936)-203-1772
                <br />
                <a
                    href='mailto:alyssa@restorationcounsel.com'
                    className={classes.link}>
                    alyssa@restorationcounsel.com
                </a>
            </div>
        </div>
    );
};

export default Footer;
