import React from 'react';
import banner from '../images/img1-12.png'

const Banner = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* Left Side: Text Section */}
        <div className="w-1/2">
          <h4 className="text-gray-500 font-semibold uppercase">Largest Catalog</h4>
          <h1 className="text-6xl font-bold">
            Over <span className="text-red-400">12 Million</span> <br></br>Books
          </h1>
          <p className="text-gray-700 mt-4">
            Start your learning journey by browsing millions of books from our library.
          </p>
          <a href="#" className="inline-block mt-6 px-8 py-3 bg-red-400 text-white font-semibold rounded hover:bg-red-500 transition">
            Explore Now
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 relative">
          <img src={banner} alt="Books" className="w-full h-30" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
