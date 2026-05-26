import React from "react";

const HeroImage = () => {
  return (
    <div className="mt-12">
      <div className="overflow-hidden rounded-[40px]">
        <img
          src="/hero-image.jpg"
          alt="Container Ship"
          className="w-full h-80 object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImage;