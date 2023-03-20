import React, { useState } from 'react'
import TextOnImage2 from './TextOnImage2'

const StudentCourseName = ({id}) => {
    const[name, setName]=useState('')
const[course, setCourse]=useState('')
const [data, setData]= useState([])
console.log(name , course , data);
const handleSubmit = (e)=>{
e.preventDefault();
setData([{name, course}])

}

  return (
<div>
     <form onSubmit={handleSubmit}>
        <label >
            Enter Name
        </label>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/>
        <label>
            Enter Course
        </label>
        <input onChange={(e)=>setCourse(e.target.value)} value={course} type="text" placeholder='Enter Course' />
          
            <button type='submit'>Add</button>
     </form>

   
    <div>
        <TextOnImage2  id={id} data={data} setData={setData}  />
    </div>
</div>

  )
}

export default StudentCourseName