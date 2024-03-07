"use client";
// you can also use a function to return the target element besides using React refs
const getTargetElement = () => document.getElementById("container");
import html2pdf from 'html2pdf.js';


const PdfDownload = () => {


  const downloadPDF = () => {
    const element = document.querySelector(".parentdiv");
    const opt = {
      margin:       0,
      filename:     'myfile.pdf',
      image:        { type: 'png', quality: 1 },
      html2canvas:  { scale: 1},
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Start the PDF generation
    html2pdf()
      .from(element)
      .set(opt)
      .save();
  }

  return (
    <div>
      <button onClick={downloadPDF}>Download PDF</button>
      <div id="container">
        <div>
         
        </div>
      </div>
    </div>
  );
};

export default PdfDownload;
