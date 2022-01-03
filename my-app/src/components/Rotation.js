import { findAllByTitle } from '@testing-library/react';
import React, {useState} from 'react'; 


function RotateItem(props){

    const [txt1, setTxt1] = useState("Position");
    const [txt2, setTxt2] = useState("Rotation"); 
    const [txt3, setTxt3] = useState("Scale"); 

   // const [state, setState] = useState({
     //   txt1: props.txt1, 
       // txt2: props.txt2, 
        //txt3: props.txt3
    //})

    const clickHandler1 = () => {
        setTxt1("X Y Z !!"); 
    }

    const clickHandler2 = () =>{
        setTxt2("Téta, Khi, Phi  !!"); 
    }

    const clickHandler3 = () => {
        setTxt3("X Y Z !!"); 
    }

    //const clickhandler =() => {
        //setState((etatprecedent) => ({
            //...etat precedent, 
            //Title; 'updated'
       //}))
//}
//
     //const clickhandler =() => {
        //setState({
            //...state, 
            //Title; 'updated'
       //}))
//}
//
    //}
   return(<div>
       <h5>{txt1} <button onClick={clickHandler1}>ChangeTitle</button> </h5> 
       <h5>{txt2} <button onClick={clickHandler2}>ChangeTitle</button></h5>
       <h5>{txt3} <button onClick={clickHandler3}>ChangeTitle</button></h5>
   </div>);
}
export default RotateItem; 