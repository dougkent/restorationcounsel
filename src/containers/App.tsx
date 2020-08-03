// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Material UI
import { Container } from '@material-ui/core';

// RC
import { Nav, Home, Footer, CounselingServices } from '../components';

const App: React.FC = () => {
    return (
        <Router>
            <Nav />
            <Container maxWidth={false} disableGutters={true}>
                <Switch>
                    <Route exact path='/' render={() => <Home />} />
                    <Route
                        exact
                        path='/counseling-services'
                        render={() => <CounselingServices />}
                    />
                </Switch>
            </Container>
            <Footer />
        </Router>
    );
};

export default App;
