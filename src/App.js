import React, { Component, Fragment } from 'react';
import './App.css';

import { Navbar, Footer} from './Components'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio' 

export default class extends Component {
  render() {
    return <Router>
        <Fragment>
        
        <Navbar />
        <Switch>

        </Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Footer />
        </Fragment>
      
      </Router>
  }
}
