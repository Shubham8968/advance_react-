import React, {useState, usereduce } from 'react'
import Modal from "./Modal";
import {data} from "../data";

function Index() {
    const[name,setName] = useState(' ') //use state to take name input 
    const[people,setPeople] = useState(data); // we have created a program where we are taking val=ues form user and displaying the same 
    const[showModal,setshowModal] = useState(false);
    const handleSubmit= (e) => {
        e.preventdefault();
        if (name){
            setshowModal(true);
            setPeople([...people, {id: new Date().getTime().toString(), name }])
            setName('')

        }
        else{
            setshowModal(true)
        }
    }
    

    return (<>
        {showModal && < Modal/>}
        <form onSubmit = { handleSubmit} className='form'>
        <div>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            <button type="submit" > Add user </button>
            </form> 
            {people.map((person) =>{
                return<>
                    <div key={person.id}>
                    <h4>{person.name}</h4>
                    </div>
                </>

            }
            )}
        </>
    )
}

export default Index
