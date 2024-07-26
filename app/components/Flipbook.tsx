import React, { useState } from 'react';
import Image from 'next/image';

const SimpleFlipbook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Array of image paths (replace with your actual image paths)
  const pages = [
    '/assets/menu/carta-01.jpeg',
    '/assets/menu/carta-02.jpeg',
    '/assets/menu/carta-03.jpeg',
    '/assets/menu/carta-04.jpeg',
    '/assets/menu/carta-05.jpeg',
  ];

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[600px] h-[400px] bg-white shadow-lg">
        <Image
          src={pages[currentPage]}
          alt={`Page ${currentPage + 1}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage + 1} of {pages.length}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === pages.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SimpleFlipbook;