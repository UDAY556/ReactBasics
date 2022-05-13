import React, { useState, useReducer } from "react"

// useReduce(reduceFn, defaultState) 



function ReactUseReducer() {

    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");

    const [users, setUsers] = useState([]);

    const reducer = (state, action) => {

        console.log(state)
        console.log(action)
      
       if (action.type==="ERROR"){
        return {isError:action.isError, errorMessage:action.errorMessage};
       } else if (action.type="CLEAR_ERROR") {
           return {isError:false}
       }

    }

    const defaultState ={
        isError:false,
        firstName:"",
        email:"",
        users:[],
        errorMessage:"kjbvsdfjkvbskhjf"
    };

    const [state, dispatch] = useReducer(reducer, defaultState)

    function onChangeInput(e) {
        setFname(e.target.value)
    }

    function onSubmitUserInfo(e) {

        

        e.preventDefault()
// action is an object 
// general rule to have type key in the boject 

  if (email ==="") {
    dispatch({type:"ERROR",
     isError:true, 
     errorMessage:"Email is missing"})
  }
       

        let newUserObj = {
            name: fname,
            email: email
        }

        if (email !== "" && fname !== "") {
            setUsers([...users, newUserObj])

            dispatch({type:"CLEAR_ERROR", isError:false})

        }


    }

    return (
        <div className="container">
            <h1>React forms</h1>

            {state.isError && <h3>{state.errorMessage}</h3>}
            <form onSubmit={onSubmitUserInfo} >

                <div>
                    <label htmlFor="fname">Name:</label>
                    <input
                        type={"text"}
                        id={"fname"}
                        name={"firstname"}
                        value={fname}
                        onChange={onChangeInput}
                    ></input>
                </div>

                <div>
                    <label htmlFor="email">Email:  </label>
                    <input
                        type={"text"}
                        id={"email"}
                        name={"email"}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    ></input>
                </div>

                <button type="submit">add</button>


                <div>
                    {users.map(user => <div>{user.name} <span>{user.email}</span> </div>)}
                </div>



            </form>
        </div>


    )
}

export default ReactUseReducer;

function newFunction() {
    return "ERROR";
}
