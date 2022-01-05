import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import RotateItem from './components/Rotation'; 
import ButtonItem from './components/Button'; 
import Formulaire from './components/Formulaire'; 

function App() {

  //const array1 = [1, 4, 9, 16]; 
  //const map1 = array1.map(x=> x*2); 
  //output : Array (2, 8, 18, 32); 
  // 
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
