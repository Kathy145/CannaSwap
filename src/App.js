import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Signup from './Components/Signup'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Home /> */}
        <Signup />
        <Footer />
      </div>
    );
  }
}

export default App
