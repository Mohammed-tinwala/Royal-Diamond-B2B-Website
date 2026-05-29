import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroContent = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after mount
    setIsLoaded(true);
  }, []);

  const handleExplorePage = () => {
    navigate("/about");
  };

  // Helper to keep the JSX clean
  const entranceClasses = (delay) =>
    `transition-all duration-1000 ${delay} ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <div className="grid lg:grid-cols-2 gap-10 mb-16 overflow-hidden">
      {/* Left Side: Heading */}
      <div className={entranceClasses("delay-100")}>
        <h2 className="mt-4 text-2xl md:text-5xl font-semibold leading-tight">
          Powering Trade
          <br />
          Across Continents
        </h2>
      </div>

      {/* Right Side: Paragraph and Button */}
      <div className="flex flex-col justify-between lg:items-end">
        <p className={`text-gray-600 text-sm max-w-md leading-relaxed mb-6 lg:mb-0 ${entranceClasses("delay-300")}`}>
          Reliable import and export solutions connecting Dubai, Africa,
          and global industrial markets with trusted shipping and supply
          services.
        </p>

        <div className={entranceClasses("delay-500")}>
          <button
            onClick={handleExplorePage}
            className="relative overflow-hidden bg-secondary text-white px-7 py-4 rounded-full text-sm font-medium transition-all hidden md:flex cursor-pointer duration-300
              before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-500
              hover:before:translate-x-full hover:shadow-md hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Explore More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;