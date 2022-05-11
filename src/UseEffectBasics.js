import React, {useState, useEffect} from "react"

// useEffect side affect
//default runs after every re-render
// useEffect(callback)

// behaviour of useEffect in a counter app
// document.title = `New Message(   ${valuse})`
// use effect in the condition

// only run initial render 

// second parameter in use effect list of dependencies 


// clean up function

function UseEffectBasics() {
    
    const [counter,setCounter] = useState(1);

    useEffect(()=>{
     console.log("use Effect")

    },[])

     console.log("Component rendering")

    return (<div className="container">
    <h1 onClick={()=>setCounter(counter+1)}>{counter}</h1>
    </div>)

}

export default UseEffectBasics;