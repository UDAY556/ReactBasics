import React, { useState } from "react"
// JS
// const input = document.getElementById('tedx')
// const inputVal = input.value

// React  
// value, onChange
// htmlFor is the id to connect to input




function ReactForms () {

    const[fname, setFname] = useState("");
    const[email, setEmail] = useState("");

    const[users, setUsers] = useState([]);

    function onChangeInput(e) {
            setFname(e.target.value)
    }

    function onSubmitUserInfo(e) {

        e.preventDefault()
     
    let newUserObj = {
        name:fname,
        email: email
    }
     
     if (email!=="" && fname!==""){
        setUsers([...users,newUserObj])
     }
       

    }

    return (
        <div className="container">
         <h1>React forms</h1>
         <form onSubmit={onSubmitUserInfo} >

       <div>
        <label  htmlFor="fname">Name:</label>
        <input 
        type={"text"}
        id={"fname"}
        name={"firstname"}
        value={fname}
        onChange = {onChangeInput}
        ></input>
        </div> 

        <div>
        <label  htmlFor="email">Email:  </label>
        <input 
        type={"text"}
        id={"email"}
        name={"email"}
        value={email}
        onChange = {(e)=>{setEmail(e.target.value)}}
        ></input>
        </div> 

        <button type="submit">add</button>


        <div>
       {users.map(user=><div>{user.name} <span>{user.email}</span> </div>)}
        </div>



         </form>
        </div>


    )
}

export default ReactForms;