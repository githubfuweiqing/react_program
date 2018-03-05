import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import './css/swiper.min.css';
//import Swiper from 'swiper';
//import {
//Text,
//View
//} from 'react-native'
//import Swiper from 'react-native-swiper';
import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	       <Link to="/"></Link>
	       <Link to="/list"></Link>
	       <Link to="/detail"></Link>
	       
	       <Route exact path="/" component={Home} />
	       <Route path="/list" component={List} />
	       <Route path="/detail/:fid" component={Detail} />
	      </div>
	    </Router>
    );
  }
}

export default App;
