import React from "react";
import { useNavigate } from "react-router-dom";

const HeroContent = () => {

  const navigate = useNavigate();

  const handleExplorePage = () => {
    navigate("/about");
  }



  return (
    // <div className="grid lg:grid-cols-2 items-center justify-between">

    //   <h1 className="text-[48px] leading-tight font-medium tracking-tight">
    //     Powering Trade
    //     <br />
    //     Across Continents
    //   </h1>


    //   <p className="text-[16px] leading-tight text-gray-700 max-w-110">
    //     Reliable import and export solutions connecting Dubai, Africa,
    //     and global industrial markets with trusted shipping and supply
    //     services.
    //   </p>

    // </div>

    <div className="grid lg:grid-cols-2 gap-10 mb-16">

      <div>
        <h2 className="mt-4 text-2xl md:text-5xl font-semibold leading-tight">
          Powering Trade
          <br />
          Across Continents
        </h2>
      </div>

      <div className="flex flex-col justify-between lg:items-end">

        <p className="text-gray-600 text-sm max-w-md leading-relaxed">
          Reliable import and export solutions connecting Dubai, Africa,
          and global industrial markets with trusted shipping and supply
          services.
        </p>

        <button onClick={handleExplorePage} className="mt-6 lg:mt-0 bg-secondary cursor-pointer text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
          Explore More
        </button>
      </div>


    </div>
  );
};

export default HeroContent;