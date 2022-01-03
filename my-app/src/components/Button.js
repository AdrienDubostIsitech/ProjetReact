import React from 'react';
import ReactDOM from 'react-dom';
import Reaction from './Reaction'; 



function ButtonItem(){
    const clickHandler = () =>{
        Reaction();
    }
    return <button onClick ={clickHandler}> I'm a Button</button>
}

export default ButtonItem; 