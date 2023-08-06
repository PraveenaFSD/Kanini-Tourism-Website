import React, { useState } from 'react';
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import './roughtfil.css'
function Roughtfil() {
  const handleDownloadPDF = () => {
    const input = document.getElementById("pdf-content");
    const pdfOptions = {
      margin: [10, 10],
      filename: "my_component.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2canvas(input).then((canvas) => {
      const pdf = new html2pdf().from(canvas).set(pdfOptions).save();
    });
  };

  return (
    <div>
      {/* Your component content */}
      <div id="pdf-content">
        <h1>Hello, this is a PDF download example.</h1>
        <p>You can put your React component content here.</p>
      </div>
      {/* Add a button to trigger the download */}
      <button onClick={handleDownloadPDF}>Download as PDF</button>
    </div>
  );
};



export default Roughtfil;
