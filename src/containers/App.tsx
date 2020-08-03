// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Material UI
import { Container, createStyles, Theme, makeStyles } from '@material-ui/core';

// RC
import { Nav, Home, Footer } from '../components';
import { rcTheme } from '../themes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            //minHeight: '100vh',
        },
    })
);

const App: React.FC = () => {
    const classes = useStyles(rcTheme);

    return (
        <Router>
            <Nav />
            <Container
                maxWidth={false}
                disableGutters={true}
                className={classes.container}>
                <Switch>
                    <Route exact path='/' render={() => <Home />} />
                </Switch>
                <Footer />
            </Container>
            <Footer />
        </Router>
    );
};

export default App;
