'use client'
import React from "react";
import Head from "next/head";

const PdfPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Archivo PDF</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <iframe
        src="/assets/menu/carta.pdf"
        style={{ border: "none", width: "100%", height: "100%" }}
        title="Archivo PDF"
      />
      <style jsx>{`
        iframe {
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          iframe {
            height: 80vh;
          }
        }
      `}</style>
    </div>
  );
};

export default PdfPage;
