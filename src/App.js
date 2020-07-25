import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import routes from './routes.json';

import MainPage from './components/pages/MainPage';
import ConceptPage from './components/pages/ConceptPage';
import TermsPage from './components/pages/TermsPage';
import CirculationPage from './components/pages/CirculationPage';
import HowToUsePage from './components/pages/HowToUsePage';
import SystemParamsPage from './components/pages/SystemParamsPage';
import ScrollToTop from './components/containers/scrollToTop';

import './styles/core.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path={routes.index} component={MainPage}/>
            <Route exact path={routes.concept} component={ConceptPage}/>
            <Route exact path={routes.terms} component={TermsPage}/>
            <Route exact path={routes.circulation} component={CirculationPage}/>
            <Route exact path={routes.howtouse} component={HowToUsePage}/>
            <Route exact path={routes.systemParams} component={SystemParamsPage}/>
          </Switch>
        </Router>

        <NotificationContainer />
      </React.Fragment>
    );
  }
}

export default App;
