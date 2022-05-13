import React, { useRef } from "react"



function ReactUseRef() {

   const container  =  useRef(null)

    function onSubmitUserInfo(e) {
        
        e.preventDefault()
        console.log(container.current.value)
        console.log(container)

    }

    return (
        <div className="container">
            <h1>React forms</h1>
            <form onSubmit={onSubmitUserInfo} >

                <div>
                    <label htmlFor="fname">Name:</label>
                    <input
                        type={"text"}
                        id={"fname"}
                        name={"firstname"}
                        ref={container}
                       
                    ></input>
                </div>

            
                <button type="submit">add</button>


               


            </form>
        </div>


    )
}

export default ReactUseRef;