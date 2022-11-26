import React from 'react'
import Dowloadpdf from './Dowloadpdf'

const TextOnImage = ({id}) => (
    <>
   <div id={id}>
    <div>
    <img src='https://img.freepik.com/free-vector/honorary-certificate-template_23-2147497176.jpg?w=740&t=st=1669443920~exp=1669444520~hmac=27cbb013d018e0bd07595875ab34c4296b3c3b7deab239fc89793b097bbc700d'/>
    </div>
    <div className='name'>
        HAMZA NAEEM KHAN
    </div>
    <div className='course'>
        REACT DEVELOPER
    </div>
   </div>
<div>
    <Dowloadpdf id={'Pdfpage'} />
</div>
    </>
  )


export default TextOnImage