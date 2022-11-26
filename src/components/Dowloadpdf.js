import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Dowloadpdf = ({id}) => {
  return (
    <div>
        <button onClick={()=>{
            const input = document.getElementById(id)
            console.log("input>>>",input);
            html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save(`${id}.pdf`);
              })
            
        }} >Download</button>
    </div>
  )
}

export default Dowloadpdf