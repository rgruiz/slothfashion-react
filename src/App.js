import React from 'react';
import HomePage from './pages/HomePage'
import NewPostPage from './pages/NewPostPage'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Publication from './components/Publication/Publication';
import Historial from './components/Historial/Historial';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/newpost" component={NewPostPage} />
          <Route exact path="/publication" component={Publication} />
          <Route exact path="/historial" component={Historial} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
