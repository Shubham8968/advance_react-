import React,{useState} from 'react'
// we want to have two input fields
// we want to have a button
// one of the input field should accept username
// email
// we want to accept the data and store it somewhere in a variable
 // initial stte will be empty

function form() {
    const[FirstName, setFirstName]= useState(" ");
    const[email, setEmail]= useState(" ");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Hello the people of the world ")
    }

    return (
        <>
        <article>
            <form className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <lable htmlFor="FirstName"> Name :</lable>
                <input type="text" id="FirstName" name='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <lable htmlFor="Email"> Email :</lable>
                <input type="text" id="Email" name='email' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <button type="submit">Submit</button>
            </form>
        </article>
          <h2>Forms</h2>  
        </>
    )
}
<h2>Forms</h2>
export default form