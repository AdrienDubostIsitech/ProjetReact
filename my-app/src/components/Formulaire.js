import React, {useState} from 'react'; 

function Formulaire () {

    const [value, setValue] = useState(''); 
    

    return (
        <form>
            <label>
                components : 
                <input type ="text" value = {value} />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    )
}

export default Formulaire; 