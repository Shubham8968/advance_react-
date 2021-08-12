import React from 'react'
import axios from 'axios'

function LearnJSON() {
    const handleClick = (b) =>{
        const promise = axios.post(" http://localhost:4000/users" ,{
            name: "Shubham marzara"},{
                headers: {
                    ['content-type']: 'application/json' // setting  the server

                }}
        )
        promise.then(response => {
            console.log(response) // this is used to console log our response from th server 
        })
        promise.catch(error => {
            console.error(error); //this os used to console our error incase we get one 
        })
        let c=b;
        console.log(c);
    }
    return (
        <>
        <h2> Random Title </h2>
        <button type="button" className='btn' onClick={handleClick}> 
        Post User</button>
        {/*<button type="button" className='btn' onClick={getUsers}>get Users</button> */}    
        </>

    )
}

export default LearnJSON
