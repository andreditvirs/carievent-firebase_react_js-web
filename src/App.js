import React, {Fragment} from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import LandingPage from './layout/LandingPage';
import Footer from './layout/Footer';
import ModalMasuk from './layout/ModalMasuk';
import ModalDaftar from './layout/ModalDaftar';
import Event from './layout/Event';
import CaraKerja from './layout/CaraKerja';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={LandingPage} />
          <section className="container">
            <Switch>
              <Route exact path='/event' component={Event} />
              <Route exact path='/carakerja' component={CaraKerja} />
            </Switch>
          </section>
          <Footer />
          <ModalMasuk />
          <ModalDaftar />
        </Fragment>
        </Router>
    </div>
  );
}

export default App;
