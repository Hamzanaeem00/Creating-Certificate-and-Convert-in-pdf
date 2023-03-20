import { useState } from 'react';
import Dowloadpdf from './Dowloadpdf'



const TextOnImage2 = ({id, data }) => {
    console.log(id , data );

    const [file, setFile] = useState();



  const handleChange =(e)=>{
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
            <input type="file" onChange={handleChange} />
    <div id={id} >
        <div>
    {/* <img src='/logo.png' alt={`${data.name}.certificate`}/> */}
            <img src={file} />
    </div>
    {data?.map((item)=>{
        console.log(item);
           return(
            <div  key={item}>
                <div className='student-name'>
             {item.name}
                </div>
                <div className='course-name'>
                    {item.course}
                </div>

            </div>
           )
    })}
    </div>
    <Dowloadpdf id = {id}/>
    </>
  )
}

export default TextOnImage2