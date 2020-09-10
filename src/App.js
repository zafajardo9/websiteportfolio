import React, { Component, Fragment } from 'react';
import './App.css';
import {Navbar, Header, Body, Footer} from './Components'

export default class extends Component {
  render() {
    return <Fragment>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </Fragment>
  }
}
