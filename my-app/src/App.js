import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import RotateItem from './components/Rotation'; 
import ButtonItem from './components/Button'; 
import Formulaire from './components/Formulaire'; 

function App() {


  return (
    <div className="App">
      <h2> Let's Get Started </h2>
      <RotateItem></RotateItem>
      <ButtonItem></ButtonItem>
      <Formulaire></Formulaire>
      
    </div>

    
  );
}

export default App;
