import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import {DragDropContext,DropTarget} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

// Containers
import { DefaultLayout } from './containers';

// import { Events } from './containers'


// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { Events } from './views/Events';

// import { renderRoutes } from 'react-router-config';

class   App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          {/*<Route exact path="/events" name="Events Page" component={Events} />*/}
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
