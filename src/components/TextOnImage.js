import React from 'react'
import Dowloadpdf from './Dowloadpdf'


const TextOnImage = ({id}) => {
    console.log(id);
    return(
        <>
        <div id={id}>
         <img src='/logo.png'/>
         <div className='name'>
             HAMZA NAEEM KHAN
         </div>
         
         <div className='course'>
             REACT DEVELOPER
         </div>
        </div>
     <div>
         <Dowloadpdf id={id} />
     </div>
         </>
    )
}


export default TextOnImage