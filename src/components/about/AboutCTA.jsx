import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const navigate = useNavigate();

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

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={containerRef}
            className="py-12 overflow-hidden w-full"
        >
            <div className="max-w-350 mx-auto px-6 lg:px-12">

                {/* Main Card Wrapper with Smooth Scale & Opacity Fade In */}
                <div className={`relative overflow-hidden rounded-[48px] bg-[#032850] px-8 lg:px-24 py-24 text-white shadow-2xl transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12"
                    }`}>

                    {/* Premium Ambient Fluid Mesh Lights (Slow continuous pulse effect via CSS transitions) */}
                    <div className={`absolute top-0 right-0 w-112.5 h-112.5 rounded-full bg-[#FF5A1F]/30 blur-[130px] transition-transform duration-[3000ms] ease-in-out ${isVisible ? "translate-x-12 -translate-y-12 scale-110" : "translate-x-32 -translate-y-32 scale-90"
                        }`} />
                    <div className={`absolute bottom-0 left-1/4 w-87.5 h-87.5 rounded-full bg-blue-400/20 blur-[110px] transition-transform duration-[4000ms] ease-in-out ${isVisible ? "translate-y-12 scale-100" : "translate-y-32 scale-75"
                        }`} />

                    {/* Left Decorative Geometry Mesh Border Lines */}
                    <div className="absolute inset-0 border border-white/5 rounded-[48px] m-4 pointer-events-none" />

                    {/* Content Core Section */}
                    <div className="relative z-10 max-w-4xl">

                        {/* Eyebrow Pill Tag */}
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs lg:text-sm font-medium uppercase tracking-wider backdrop-blur-md border border-white/10 transition-all duration-700 delay-300 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}>
                            <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                            Let's Work Together
                        </span>

                        {/* Title Statement with Sequential Delay Reveal */}
                        <h2 className={`text-4xl md:text-6xl font-bold leading-[1.15] tracking-tight mt-6 transition-all duration-1000 delay-500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}>
                            Ready To Source Your Next <br />
                            <span className="bg-linear-to-r from-[#FF5A1F] to-[#FF8D5C] bg-clip-text text-transparent">
                                Industrial Project?
                            </span>
                        </h2>

                        {/* Description Body Paragraph */}
                        <p className={`mt-6 text-white/80 text-base md:text-xl max-w-2xl leading-relaxed font-light transition-all duration-1000 delay-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}>
                            Whether you require comprehensive procurement management, complex global equipment sourcing, or optimized logistics execution frameworks, our expert team is positioned to accelerate your timeline.
                        </p>

                        {/* Interactive Modern Action Buttons */}
                        <div className={`flex flex-wrap items-center gap-4 mt-10 transition-all duration-1000 delay-900 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}>

                            {/* Primary Button */}
                            <button onClick={() => { navigate('/contact') }} className="group bg-white cursor-pointer text-[#032850] hover:bg-[#FF5A1F] hover:text-white px-8 py-4.5 rounded-full font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-[#FF5A1F]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                                <MessageSquare
                                    size={18}
                                    className="text-primary/60 group-hover:text-white transition-colors"
                                />
                                <span>Contact Us</span>
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                                />
                            </button>

                            {/* Secondary Ghost Button */}
                            {/* <button onClick={() => {navigate('/contact')}} className="group border cursor-pointer border-white/20 hover:border-white/60 bg-white/0 hover:bg-white/5 px-8 py-4.5 rounded-full font-medium flex items-center gap-2 transition-all duration-300">
                                <MessageSquare
                                    size={18}
                                    className="text-white/60 group-hover:text-white transition-colors"
                                />
                                <span>Contact Us</span>
                            </button> */}

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}