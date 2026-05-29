import React, { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";

export default function LeadershipMessage() {
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
            { threshold: 0.15 } // Triggers when 15% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 overflow-hidden bg-white w-full"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Frame: Image Block Animation */}
                    <div className={`relative transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                        }`}>
                        {/* Decorative background profile frame depth */}
                        <div className="absolute -inset-4 bg-[#FFF4F1] rounded-[48px] -z-10 transform rotate-2" />

                        <img
                            src="/managing-director.jpg"
                            alt="Managing Director"
                            className="w-full h-[500px] lg:h-[600px] rounded-[40px] object-cover shadow-lg"
                        />

                        {/* Overlapping Badge Floating Entrance */}
                        <div className={`absolute -bottom-6 left-8 bg-[#032850] text-white rounded-3xl px-8 py-6 shadow-xl transition-all duration-700 delay-500 transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
                            }`}>
                            <h4 className="font-bold text-xl tracking-tight">
                                Managing Director
                            </h4>
                            <p className="text-white/70 text-sm mt-1">
                                Royal Diamond Trading LLC
                            </p>
                        </div>
                    </div>

                    {/* Right Frame: Text Block Staggered Content Animation */}
                    <div className="flex flex-col justify-center">

                        {/* Tagline */}
                        <span className={`text-secondary font-semibold uppercase tracking-widest text-xs bg-secondary/10 px-4 py-1.5 rounded-full w-fit transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}>
                            Leadership Message
                        </span>

                        {/* Large Animated Background Quote Icon */}
                        <div className={`transition-all duration-1000 delay-150 transform origin-left ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                            }`}>
                            <Quote
                                size={64}
                                className="text-secondary/20 mt-6 transform -scale-x-100"
                            />
                        </div>

                        {/* Main Quote Title Statement */}
                        <h2 className={`text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight text-gray-900 mt-4 transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}>
                            Building Long-Term <br />
                            Relationships Through <br />
                            <span className="bg-gradient-to-r from-[#FF5A1F] to-[#032850] bg-clip-text text-transparent">
                                Trust And Reliability
                            </span>
                        </h2>

                        {/* Descriptive Copy Block 1 */}
                        <p className={`mt-6 text-base md:text-lg text-gray-600 leading-relaxed transition-all duration-1000 delay-450 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}>
                            At Royal Diamond, our focus extends beyond supplying high-tier products. We build enduring partnerships by deeply understanding distinct enterprise frameworks, delivering top-quality verification solutions, and ensuring unmatched operational excellence across every link of the supply chain.
                        </p>

                        {/* Descriptive Copy Block 2 */}
                        <p className={`mt-4 text-base md:text-lg text-gray-600 leading-relaxed transition-all duration-1000 delay-600 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}>
                            Through specialized modern sourcing matrixes, calculated logistical risk mitigation, and international industrial trade frameworks, we remain completely committed to helping global operations sustain sound, scalable long-term progression.
                        </p>

                        {/* Closing Executive Signature Block */}
                        <div className={`mt-8 pt-6 border-t border-gray-100 transition-all duration-1000 delay-750 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}>
                            <h4 className="font-bold text-2xl text-gray-900">
                                Mohammed Al Rashid
                            </h4>
                            <p className="text-gray-500 font-medium mt-0.5">
                                Managing Director
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}