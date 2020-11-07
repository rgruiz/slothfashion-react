import React from 'react';
import HomePage from './pages/HomePage'
import NewPostPage from './pages/NewPostPage'
import SearchResultsPage from './pages/SearchResultsPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PublicationPage from './pages/PublicationPage'
import HistorialPage from './pages/HistorialPage'
import EditPostPage from './pages/EditPostPage'
import ValidateMPRequestsPage from './pages/ValidateMPRequestsPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './ScrollToTop'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/newpost" component={NewPostPage} />
            <Route exact path="/publication/:id" component={PublicationPage} />
            <Route exact path="/historial" component={HistorialPage} />
            <Route exact path="/search/:tags" component={SearchResultsPage} />
            <Route exact path="/edit/:id/:user" component={EditPostPage} />
            <Route exact path="/validateMPRequests" component={ValidateMPRequestsPage} />
            <Footer></Footer>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
