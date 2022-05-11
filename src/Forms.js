import React, { useState } from "react";
// JS
// const input = document.getElementById('tedx')
// const inputVal = input.value

// React  
// value, onChange
// htmlFor is the id to connect to input


function Forms() {

    const [firstName, setfname] =  useState('') 
    const [email, setEmail] =  useState('') 

     function handleSubmit(e) {
    
        e.preventDefault()
         
         console.log(firstName, email)
     }

    return (
        <form onSubmit={handleSubmit}>
       <div> 
          <label htmlFor="fname">    Name</label>
          <input 
          value={firstName} 
          type="text" 
          id= "fname"   
          name="firstName"
          onChange={(e)=>setfname(e.target.value)}
          />
       </div>
       <div> 
          <label htmlFor="email">Email</label>
          <input  onChange={(e)=>setEmail(e.target.value)} value={email} type="text" id= "email"   name="email"/>
       </div>
       <button type="submit">add person</button>
       </form>
    )

}

export default Forms;