import React from 'react'
import axios from 'axios'

function LearningJSON() {
    const handleClick=(b) =>{
        const promise =axios.post("http://localhost:4000/users",{ //setting the port code
            name:"paras"}, // set data that we want
        {headers:{
            ['content-type']:'application/json' // setting server type
        }
    })

    promise.then(response =>{
        console.log(response);
    })
    promise.catch(error =>{
        console.log(error);
    })
    let c=b;
    console.log(c);
}

    const getUsers = () =>{
        axios.get("http://localhost:4000/users").then(users =>{  //getting data from json file and store it in users and console i
            console.log(users);
        })
    }

    return (
        <>
        <button type="button" className="btn" onClick={handleClick}>post users</button>
        <button type="button" className="btn" onClick={getUsers}>get users</button>

        </>
    )
}

export default LearningJSON
