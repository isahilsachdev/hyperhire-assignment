import React from 'react';

const PreviousWorkSection = () => {
  return (
    <div className="flex flex-col items-center my-[64px]">
      {/* Heading with Gradient Circle */}
      <div className="relative mb-8 px-2">
        <h2 className="text-center text-[32px] font-bold">
          PREVIOUS WORKS
        </h2>
        {/* Gradient Circle */}
        <span className="absolute top-0 left-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]"></span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        {[...Array(12).keys()].map((index) => (
          <img 
            key={index}
            src={`/previous-project-images/${index < 9 ? '0' : ''}${index + 1}.svg`} 
            alt={`Previous Work ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PreviousWorkSection;
