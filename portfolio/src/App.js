import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import home from './pages/home.js'
//import { div,section,col,button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={home} />
      </Switch>
    </Router>
  );
}


export default App;
