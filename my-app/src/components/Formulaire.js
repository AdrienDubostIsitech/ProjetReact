import React, {useState} from 'react'; 

function Formulaire () {

    const [value, setValue] = useState(''); 
    
    const changeHandler = event => {

        setValue(event.target.value); 
    }
    
    const submitHandler = event =>{

        event.preventDefault();  
        
    }
    return (
        <form>
            <label>
                components : 
                <input type ="text" onChange={changeHandler} />
            </label>
            <input type="submit" onSubmit= {submitHandler}/>
        </form>
        
    )
}

export default Formulaire; 