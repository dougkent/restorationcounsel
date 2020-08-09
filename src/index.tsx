// React
import React from 'react';
import ReactDOM from 'react-dom';

// Material UI
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

// RC
import App from './containers/App';
import { rcTheme } from './themes';

ReactDOM.render(
    <ThemeProvider theme={rcTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
