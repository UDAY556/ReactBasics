//circut breaker
// toggle with button
//ternary operator

import { useState } from "react";

function ReactConcepts() {
    
const [isError, setFlag] =  useState(true)


    return (
       <div className="container"> 

       {isError?<h1>Error</h1>:<h1>Hello world</h1>}
       </div>
    )

}

export default ReactConcepts;