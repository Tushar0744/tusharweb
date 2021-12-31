import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route,Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Footer from './Footer';
//import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Redirect to="/" />
    </Switch>
    {/* <Footer/> */}
    </>
  );
}

export default App;
