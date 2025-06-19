import React from 'react';

export default function page() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Glow lines background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 w-full h-1 bg-yellow-300/40 blur-xl" />
        <div className="absolute top-14 w-full h-1 bg-yellow-200/10 blur-md" />
        {/* Triangle/chevron overlay mockup */}
        <div className="absolute right-0 top-20 w-[120%] h-full rotate-45 bg-gradient-to-br from-yellow-300/20 via-yellow-100/10 to-transparent blur-xl" />
        <div className="absolute left-0 top-60 w-[100%] h-full -rotate-45 bg-gradient-to-tr from-yellow-200/10 via-yellow-300/30 to-transparent blur-xl" />
      </div>

      {/* Content placeholder */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-48">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md text-yellow-100">
          Innovative, Scalable, and Affordable
        </h1>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-yellow-100/90">
          Digital Transformation.
        </h2>
      </div>
    </div>
  );
}