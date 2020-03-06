import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Page from '../../page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Page.Home} />
      </Switch>
    </Router>
  );
}

export default App;
