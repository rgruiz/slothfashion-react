import React from 'react';
import HomePage from './pages/HomePage'
import NewPostPage from './pages/NewPostPage'
import SearchResultsPage from './pages/SearchResultsPage'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PublicationPage from './pages/PublicationPage';
import HistorialPage from './pages/HistorialPage';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/newpost" component={NewPostPage} />
          <Route exact path="/publication" component={PublicationPage} />
          <Route exact path="/historial" component={HistorialPage} />
          <Route exact path="/search" component={SearchResultsPage} />
          <Footer></Footer>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
