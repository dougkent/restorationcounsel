// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Material UI
import { Container, makeStyles, Theme, createStyles } from '@material-ui/core';

// RC
import {
    Nav,
    Home,
    Footer,
    CounselingServices,
    MeetAlyssa,
    WhatToExpect,
} from '../components';

// RC
import { rcTheme } from '../themes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appContainer: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
        body: {
            flexGrow: 1,
        },
    })
);

const App: React.FC = () => {
    const classes = useStyles(rcTheme);

    return (
        <Router>
            <div className={classes.appContainer}>
                <Nav />
                <Container
                    maxWidth={false}
                    disableGutters={true}
                    className={classes.body}>
                    <Switch>
                        <Route exact path='/' render={() => <Home />} />
                        <Route
                            exact
                            path='/counseling-services'
                            render={() => <CounselingServices />}
                        />
                        <Route
                            exact
                            path='/meet-alyssa'
                            render={() => <MeetAlyssa />}
                        />
                        <Route
                            exact
                            path='/what-to-expect'
                            render={() => <WhatToExpect />}
                        />
                    </Switch>
                </Container>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
