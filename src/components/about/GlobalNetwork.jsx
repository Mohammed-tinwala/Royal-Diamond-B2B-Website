import React, { useState, useEffect, useRef } from "react";
import { Globe2, MoveUpRight } from "lucide-react";

const regions = [
    { name: "Dubai", hub: "Strategic Hub", countries: "GCC & Middle East" },
    { name: "Africa", hub: "Sourcing Network", countries: "East & West Africa" },
    { name: "Europe", hub: "Logistics Node", countries: "EU & UK Trading" },
    { name: "Asia", hub: "Supply Chain", countries: "APAC Manufacturing" }
];

export default function GlobalNetwork() {
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#FFFDFD] via-[#FFF4F1] to-[#FFFDFD] w-full"
        >
            {/* Background World Map with Layered Ambient Radial Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5A1F]/10 rounded-full blur-[120px]" />
                <img
                    src="/world-map.svg"
                    alt=""
                    className={`w-full h-full object-contain opacity-25 scale-105 transition-all duration-1000 ease-out ${isVisible ? "scale-100 opacity-25" : "scale-110 opacity-0"
                        }`}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Block */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#FF5A1F]/10 rounded-full px-4 py-2 mb-6 shadow-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                        }`}>
                        <Globe2 size={16} className="text-[#FF5A1F] animate-spin-slow" style={{ animationDuration: '12s' }} />
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-800">
                            Global Trade Network
                        </span>
                    </div>

                    <h2 className={`text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}>
                        Connecting Markets <br />
                        <span className="bg-gradient-to-r from-[#FF5A1F] to-[#032850] bg-clip-text text-transparent">
                            Across Continents
                        </span>
                    </h2>

                    <p className={`text-base md:text-lg text-gray-600 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}>
                        Our strategic sourcing and logistics network spans the Middle East, Africa,
                        Asia, and Europe—ensuring frictionless procurement and highly reliable global delivery.
                    </p>
                </div>

                {/* Modern Dynamic Interactive Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {regions.map((region, index) => (
                        <div
                            key={region.name}
                            className={`group relative bg-white/70 backdrop-blur-sm rounded-[24px] p-8 border border-gray-100 hover:border-transparent shadow-sm hover:shadow-2xl hover:bg-[#032850] transition-all duration-500 ease-out transform ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-16"
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Hover accent colored element */}
                            <div className="absolute top-6 right-6 text-gray-400 group-hover:text-white/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <MoveUpRight size={20} />
                            </div>

                            {/* Node Ping/Radar Ring Animation */}
                            <div className="relative w-5 h-5 flex items-center justify-center mb-8">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A1F] opacity-30"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5A1F]"></span>
                            </div>

                            <span className="text-xs font-semibold text-[#FF5A1F] group-hover:text-[#FF8A5B] tracking-wider uppercase block mb-1">
                                {region.hub}
                            </span>

                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                                {region.name}
                            </h3>

                            <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                                {region.countries}
                            </p>

                            {/* Decorative Background Base Shape that fills on Hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5A1F] to-[#FF8A5B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-[24px] origin-left" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}