import { useState } from 'react';
import Draggable from 'react-draggable';
import Dowloadpdf from './Dowloadpdf'



const TextOnImage2 = ({id, data }) => {
    console.log(id , data );

    const [file, setFile] = useState();

  const handleChange =(e)=>{
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));

  }
    const dragElement = (e, data)=>{
          console.log(e.type);
          console.log(e, data);
    }

  return (
    <>
            <input type="file" onChange={handleChange} />
    <div id={id} >
        <div>
    {/* <img src='/logo.png' alt={`${data.name}.certificate`}/> */}
           <img src={file} alt='certificate'  width='800px' height='600px' />
    </div>
    {data?.map((item)=>{
        console.log(item);
           return(
             
             <div  key={item}>
              <Draggable onStart={dragElement}>
                <div className='student-name'>
             {item.name}
                </div>
            </Draggable>
            <Draggable onStart={dragElement}>
                <div className='course-name'>
                    {item.course}
                </div>
            </Draggable>

            </div>
           )
    })}
    </div>
    <Dowloadpdf id = {id}/>
    </>
  )
}

export default TextOnImage2