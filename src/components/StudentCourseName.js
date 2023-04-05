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
<div className='text-center my-5 w-100 bg-light p-2 d-flex justify-content-around' >
     <form  className='p-2 w-50 my-4' onSubmit={handleSubmit}>
        <div className='my-3 d-flex justify-content-around'>
        <label className=" my-2  required"  >
            Enter Name
        </label >
        <input type="text" className='border rounded form-control form-control-solid' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/>
        </div>
        <div className='my-4 d-flex justify-content-around'>
        <label className="  my-2 required" >
            Enter Course
        </label>
        <input onChange={(e)=>setCourse(e.target.value)}className='border rounded form-control form-control-solid' value={course} type="text" placeholder='Enter Course' />
        </div>
          
            <button className='sub-btn' type='submit'>Add</button>
     </form>
    <div>
        <TextOnImage2  id={id} data={data} setData={setData}  />
    </div>
</div>

  )
}

export default StudentCourseName