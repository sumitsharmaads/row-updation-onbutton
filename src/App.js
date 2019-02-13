import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './Select';
import Selectvalue from './Selectvalue';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Select /> 
          <hr/>
        <Selectvalue />      
      </div>
    );
  }
}

export default App;
