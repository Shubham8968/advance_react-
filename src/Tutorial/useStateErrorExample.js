import React, {useState} from 'react'


function UseStateErrorEx() {
    let title = "randon title"; // its initial value is Random title
    const handleClick= ()=> {

        title = " ";
        console.log(title);
        
    }

    return (<React.Fragment>
        <h2>{title}</h2>
        <button type ="button" className="btn" onClick={handleClick}>
            Change title
        </button>
    </React.Fragment>
    
    );
};
 
export default UseStateErrorEx