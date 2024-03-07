"use client";

const PdfDownload = () => {
  const downloadPdf = () => {
    fetch(`https://average-foal-garb.cyclic.app?url=${window.location}`)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "webpage.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading PDF:", error));
  };
  return (
    <div>
      <button onClick={downloadPdf} id="downloadButton">
        Download PDF
      </button>
      <div className="parentdiv">{/* Your content here */}</div>
    </div>
  );
};

export default PdfDownload;
