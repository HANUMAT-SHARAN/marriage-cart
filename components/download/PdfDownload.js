"use client"
import { useEffect } from 'react';

const PdfDownload = () => {
  useEffect(() => {
    const downloadPDF = async () => {
      const html2pdf = await import('html2pdf.js');
      const element = document.querySelector(".parentdiv");
      const opt = {
        margin:       0,
        filename:     'myfile.pdf',
        image:        { type: 'png', quality: 1 },
        html2canvas:  { scale: 1},
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf()
        .from(element)
        .set(opt)
        .save();
    }

    document.getElementById('downloadButton').addEventListener('click', downloadPDF);

    return () => {
      document.getElementById('downloadButton').removeEventListener('click', downloadPDF);
    };
  }, []);

  return (
    <div>
      <button id="downloadButton">Download PDF</button>
      <div className="parentdiv">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default PdfDownload;
