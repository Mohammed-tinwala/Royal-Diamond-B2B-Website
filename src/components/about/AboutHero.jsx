import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutHero() {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

    // Trigger the animation shortly after the component mounts
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleContactUs = () => {
        navigate("/contact");
    };

    return (
        <section className="relative flex items-center pt-16 md:pt-22 md:pb-12 overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A1F]/10 blur-[120px]" />

            <div className="max-w-360 mx-auto px-6 lg:px-12 py-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content Section - Fades in and slides up slightly */}
                    <div className={`transition-all duration-1000 ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}>

                        <span className="inline-flex px-4 py-2 rounded-full bg-[#FF5A1F]/10 text-[#FF5A1F] text-sm font-medium">
                            Trusted Industrial Supply Partner
                        </span>

                        <h1 className="mt-4 text-2xl md:text-4xl lg:text-6xl font-semibold leading-tight">
                            Delivering Certified
                            <br />
                            Industrial Solutions
                            <br />
                            Across UAE & Africa
                        </h1>

                        <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed">
                            Royal Diamond specializes in supplying certified
                            industrial pipes, fittings, valves, flanges and
                            related materials for construction, infrastructure,
                            oil & gas, manufacturing and industrial projects
                            across the UAE and Africa.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <button
                                onClick={() => {
                                    navigate("/products");
                                }}
                                className="
        group
        relative
        overflow-hidden
        bg-secondary
        text-white
        px-7
        py-4
        rounded-full
        flex
        items-center
        gap-2
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        active:scale-100
    "
                            >

                                {/* Hover Background Effect */}

                                <span
                                    className="
            absolute
            inset-0
            bg-primary
            translate-y-full
            group-hover:translate-y-0
            transition-transform
            duration-500
            ease-out
        "
                                />

                                {/* Button Text */}

                                <span className="relative z-10">
                                    View Product Range
                                </span>

                                {/* Arrow */}

                                <ArrowRight
                                    size={18}
                                    className="
            relative
            z-10
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
        "
                                />

                            </button>

                            <button
                                onClick={handleContactUs}
                                className="group relative border cursor-pointer border-gray-300 px-7 py-4 rounded-full overflow-hidden transition-colors duration-500 text-gray-700 hover:text-white font-medium"
                            >
                                {/* Expanding ripple scale effect */}
                                <span className="absolute inset-0 w-full h-full bg-secondary rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />

                                {/* Button text kept on top */}
                                <span className="relative z-10">Contact Us</span>
                            </button>
                        </div>

                    </div>

                    {/* Image & Stats Section - Fades in with a slightly longer delay for a staggered effect */}
                    <div className={`relative transition-all duration-1000 delay-300 ease-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}>

                        <img
                            src="/industrial-operation.jpg"
                            alt="Industrial Operations"
                            className="rounded-[40px] h-120 w-full object-cover shadow-lg"
                        />

                        {/* Floating Stats */}
                        <div className="absolute -bottom-8 left-8 bg-white rounded-3xl shadow-xl p-6 w-72">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-secondary">1000+</h3>
                                    <p className="text-sm text-gray-500">Products Available</p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-[#FF5A1F]">UAE</h3>
                                    <p className="text-sm text-gray-500">Headquartered</p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-[#FF5A1F]">Africa</h3>
                                    <p className="text-sm text-gray-500">Supply Network</p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-[#FF5A1F]">24/7</h3>
                                    <p className="text-sm text-gray-500">Client Support</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}