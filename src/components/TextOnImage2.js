import Dowloadpdf from './Dowloadpdf'



const TextOnImage2 = ({id, data }) => {
    console.log(id , data );

  return (
    <>
    <div id={id} >
        <div>
    <img src='/logo.png' alt={`${data.name}.certificate`}/>
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