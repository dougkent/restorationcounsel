// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Material UI
import { Container } from '@material-ui/core';

// RC
import { Nav, Home } from '../components';

const App: React.FC = () => {
    return (
        <Router>
            <Nav />
            <Container maxWidth='xl'>
                <Switch>
                    <Route exact path='/' render={() => <Home />} />
                </Switch>
            </Container>
        </Router>
    );
};

export default App;
