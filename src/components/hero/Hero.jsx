import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section>
      <div className="max-w-360 mx-auto px-4 pt-24 md:pt-38 md:px-12 pb-6 md:pb-12">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;