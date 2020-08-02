import { createMuiTheme } from '@material-ui/core/styles';

const rcTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#404041',
        },
        secondary: {
            main: '#fffaee',
        },
        background: {
            default: '#f1f1f1',
        },
    },
    typography: {
        fontFamily: "'Noto Serif', serif",
        fontSize: 14,
        h1: {
            fontWeight: 300,
            lineHeight: 1,
        },
        h2: {
            fontWeight: 300,
            lineHeight: 1,
        },
        h3: {
            fontWeight: 300,
            lineHeight: 1,
        },
        h4: {
            fontWeight: 300,
            lineHeight: 1,
        },
        h5: {
            fontWeight: 300,
            lineHeight: 1,
        },
        h6: {
            fontWeight: 300,
            lineHeight: 1,
        },
    },
});

export default rcTheme;
