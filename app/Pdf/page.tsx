import React from 'react'



// pages/pdf.js
import Head from 'next/head';

const PdfPage = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Head>
        <title>Archivo PDF</title>
      </Head>
      <iframe 
        src="/assets/menu/carta.pdf" 
        style={{ border: 'none', width: '100%', height: '100%' }} 
        title="Archivo PDF"
      />
    </div>
  );
};



export default PdfPage