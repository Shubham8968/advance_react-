import React, {useState, usestate} from 'react'
// Use state is a named import so we must must must have the curly braces 

function UsestateBasic() {
    const[day, setDay]= useState("Today is a rainy day")
    const handleClick = () => {
        if(day==="Today is a rainy day:("){
        setDay("Today is a bright and beautiful day!")
        }
        else
        {
        setDay("Today is a Rainy day :(")
        }
    };
    return (
        <div>
            <>
                <h1>{day}</h1>
                <button type="button" className="btn" onclick={handleClick}>
                    Change my day
                 </button> 
            </>            
        </div>
    )
}

export default UsestateBasic
