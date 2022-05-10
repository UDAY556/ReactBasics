import React, {useState} from "react"


function UseStateBasics() {


    const data = [{
        id:"1",
        name:"Ram"
    },{
        id:"2",
        name:"Hari"
    },{
        id:"3",
        name:"Shiva"
    }]
  
   const [students, setStudents]  = useState(data);
  

   function removeStudentById (id) {
  console.log(id)

    let result = [];

    for (let i =0; i< students.length;i++) {

        if (students[i].id !=id)
        {
            result.push(students[i])
        }

    }


  setStudents(result)


   }


    function displayStudents() {

        return students.map((student)=>(<div key={student.id}>
            <div >{student.name}</div>
            <button onClick={()=>{removeStudentById(student.id)}}>remove student</button>
        </div>
        ))

    }


    return (<div className="container">
        <h1>State Value</h1>
        {displayStudents()}
   </div>)
}



export default UseStateBasics;