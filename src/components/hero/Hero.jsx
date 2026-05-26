import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section>
      <div className="max-w-360 mx-auto px-4 pt-24 pb-20">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;