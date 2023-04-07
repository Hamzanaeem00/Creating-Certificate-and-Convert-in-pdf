import { useState } from 'react';
import Draggable from 'react-draggable';
import Dowloadpdf from './Dowloadpdf'
import size, { fontFamilies } from './Size';
import "./size.css"

console.log(fontFamilies);

const TextOnImage2 = ({id, data }) => {
    console.log(id , data );
    const [file, setFile] = useState();
    const [number, setNumber] = useState();
    const [font, setFont] = useState();


  const handleChange =(e)=>{
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));

  }
    const dragElement = (e, data)=>{
          console.log(e.type);
          console.log(e, data);
    }

    const handleSize = (e)=>{
     let selectedNumber =  e.target.value;
      console.log("selectedNumber==>",selectedNumber);
      setNumber(selectedNumber)
    }
    const handleFont = (e)=>{
      let selectedFont =  e.target.value;
       console.log("selectedNumber==>",selectedFont);
       setFont(selectedFont)
     }

  return (
    <>
    <div className='d-flex'>

    <div>
      <label className='required' htmlFor="">Select Font Family</label>
      <select className='form-select' value={font} onChange={handleFont}>
     {fontFamilies?.map((item)=>{
      return(
        <option key={item.id} value={item.name} >{item.name}</option>
      )
     })}
      </select>
    </div>
     <div>
      <label className='required' htmlFor="">Select Font Size</label>
      <select className='form-select' value={number} onChange={handleSize}>
     {size?.map((item)=>{
      return(
        <option key={item.id} value={item.size} >{item.size}</option>
      )
     })}
      </select>
    </div>
    </div>

            <input type="file" className='border rounded form-control my-5' onChange={handleChange} />
    <div id={id} >
        <div>
           <img src={file} alt='' className='img-fluid' />
    </div>
    {data?.map((item)=>{
        console.log(item);
           return(
             
             <div className={`${number==='20'?'s20':'' ||number==='22'?'s22':'' ||number==='24'?'s24':'' ||number==='26'?'s26':'' ||number==='28'?'s28':'' ||number==='30'?'s30':'' ||number==='32'?'s32':'' ||number==='34'?'s34':'' ||number==='36'?'s36':'' ||number==='40'?'s40':''  } 
               ${fontFamilies.find((fonts)=>
                fonts.name === font)? fontFamilies.find(fonts => fonts.name === font).className : ''}`}
                  key={item} 
             >
              
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