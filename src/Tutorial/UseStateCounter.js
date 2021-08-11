import React, {useState} from 'react'

function UseStateCounter() {
    const[value,setValue] = useState(0);
    const complexIncrease= () =>{
        setTimeout(() => {
            setValue((prevState) =>
            {
                return prevState +1; // passing a function through setvalue of use state 
            })
            // setValue(value + 3000); // passing hard value to the set value of use state 
        },3000)
    }
    return (
        <>
        <section style = {{margin: '4 rem 0'}}>
            <h2>regular Counter </h2>
            <h1>{value}</h1>
            <button className ='btn' onClick={() => setValue(value -1 )}>decrease</button>
            <button className ='btn' onClick={() => setValue(value +1 ) }>increase</button>
            <button className ='btn' onClick={() => setValue(0) }>Reset</button>
        </section>
        <section style = {{margin: '4 rem 0'}}>
            <h2>more complex Counter </h2>
            <h1>{value}</h1>
            <button className ='btn' onClick={complexIncrease}> Increase later</button>
        </section>
        </>
    )
}

export default UseStateCounter
