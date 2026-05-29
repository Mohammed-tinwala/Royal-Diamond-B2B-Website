import React, { useState, useEffect } from "react";

const HeroImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="mt-12">
      {/* Container with Clip-Path Reveal: 
        The 'inset' starts small and expands to 0% (full size)
      */}
      <div
        className={`overflow-hidden rounded-[40px] transition-all duration-1500 ease-in-out transform ${isLoaded
            ? "opacity-100 [clip-path:inset(0%_0%_0%_0%_round_40px)]"
            : "opacity-0 [clip-path:inset(10%_20%_10%_20%_round_40px)] translate-y-4"
          }`}
      >
        <img
          src="/hero-image.jpg"
          alt="Container Ship"
          className={`w-full h-80 object-cover transition-transform duration-2000 ease-out ${isLoaded ? "scale-100 blur-0" : "scale-125 blur-sm"
            }`}
        />
      </div>
    </div>
  );
};

export default HeroImage;