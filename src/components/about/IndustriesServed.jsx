import React, { useState, useEffect, useRef } from "react";
import { industries } from "../../data/industries";

export default function IndustriesServed() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 } // Fires when 10% of the section enters the screen
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 bg-[#FBFBFC] overflow-hidden w-full"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Header Animated Block */}
                <div className={`text-center mb-20 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}>
                    <span className="text-secondary font-semibold uppercase tracking-widest text-xs bg-secondary/10 px-4 py-1.5 rounded-full">
                        Industries We Serve
                    </span>
                    <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15]">
                        Supporting Critical <br />
                        <span className="bg-gradient-to-r from-[#032850] to-[#FF5A1F] bg-clip-text text-transparent">
                            Industries Worldwide
                        </span>
                    </h2>
                </div>

                {/* Staggered Grid Presentation */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;

                        return (
                            <div
                                key={industry.title}
                                className={`group relative overflow-hidden rounded-[32px] shadow-sm hover:shadow-2xl h-[420px] transition-all duration-700 ease-out transform ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-16"
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {/* Background Image Zoom & Soften on Hover */}
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="absolute inset-0 h-full w-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />

                                {/* Dynamic Overlay Split (Darkens bottom text but lightens up on hover for clarity) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />

                                {/* Card Interactive Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">

                                    {/* Action-Reactive Icon Housing */}
                                    <div className="w-14 h-14 rounded-2xl bg-white text-[#032850] group-hover:bg-[#FF5A1F] group-hover:text-white flex items-center justify-center mb-6 shadow-md transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                                        <Icon size={24} className="transition-transform duration-500 group-hover:rotate-6" />
                                    </div>

                                    {/* Text Title with Bottom Pop Indicator */}
                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tight mb-2">
                                            {industry.title}
                                        </h3>

                                        {/* Hidden micro-text that slides into sight on hover */}
                                        <div className="w-8 h-[3px] bg-[#FF5A1F] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}