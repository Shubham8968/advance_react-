import React,{useState} from 'react'
//we want to have input fiels ---email,username
// we want button
// accept data and store in variable
// initial state will be empty
//we will use type submit but its same as onclick functionality
function Forms() {
    const [firstName,setFirstname] = useState("");
    const [email,setEmail] = useState(" ");
    const [people,setPeople] = useState([]);

    const handleSubmit = (e) => {
         e.preventDefault();//use to prevent default behaviour of our browser
        if (firstName && email) {
            // console.log('submit');
            const person =  {id:new Date().getTime().toString(),firstName,email};
            console.log(person);
            // const person = {firstName:firstName,email:email}
            // console.log(person);
            setPeople((people) =>{
                return[...people,person]
            });
            setFirstname('');
            setEmail('');
        }else{
            console.log('empty');
        }
         console.log(firstName,email);
    }



    return (
        <>
        <article>
            <form className='form' onSubmit={handleSubmit}>

            <div className='form-control'>
                <label htmlFor="firstname"> Name :</label>
                <input type="text" id="firstName" name="firstname" value={firstName} onChange={(e) => setFirstname(e.target.value)}></input>
            </div>

            <div className='form-control'>
                <label htmlFor="email"> Email :</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <button 
            
            type="submit">Submit</button>
            </form>
            {
                people.map((person,index) =>{
                    const {id,firstName,email} = person;
                    return(
                        <div className="item" key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                        </div>
                    )
                })
            }
        </article>

        </>
    )
}

export default Forms