import React, { useState } from 'react'

const TextOnImage2 = () => {
const[name, setName]=useState('')
const[course, setCourse]=useState('')
const[inputData, setInputData]=useState([])
const[inputData2, setInputData2]=useState([])



const addData = (e)=>{
e.preventDefault()
// console.log(e);
let Data =[]
Data.push({
    userinput1: name,
    userinput2: course
})
console.log(Data);
setInputData([...inputData , name])

let Data2 =[]
Data2.push({
    userinput2: course
})
console.log(Data2);
setInputData2([...inputData2 , course])
}


  return (
    <div >
        <div>
        <label >
            Enter Name
        </label>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/>
        </div>

        <div>
        <label>
            Enter Course
        </label>
        <input onChange={(e)=>setCourse(e.target.value)} value={course} type="text" placeholder='Enter Course' />
          <div>
            <button onClick={addData}>Add</button>
          </div>
    </div>

    {
        inputData.map((item)=>{
            
            return(
                <div key={item.id}>{item}</div>
            )
        })
    }
    {
        inputData2.map((item)=>{
            
            return(
                <div key={item.id}>{item}</div>
            )
        })
    }

    </div>
  )
}

export default TextOnImage2