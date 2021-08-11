import React, {useState} from 'react'

function UseStateCounter() {
    const[value,setValue] = useState(0);
    const complexIncrease= () =>{
        setTimeout(() => {
            setValue(value+1);
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
