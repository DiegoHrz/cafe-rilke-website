import React from "react";


import Head from "next/head";

const PdfPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Archivo PDF</title>
      </Head>
      <iframe
        src="/assets/menu/carta.pdf"
        style={{ border: "none", width: "100%", height: "100%" }}
        title="Archivo PDF"
      />
    </div>
  );
};

export default PdfPage;
