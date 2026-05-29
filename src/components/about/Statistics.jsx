import React, { useState, useEffect, useRef } from "react";

const stats = [
    {
        value: "25+",
        title: "Years Experience"
    },
    {
        value: "500+",
        title: "Global Clients"
    },
    {
        value: "40+",
        title: "Countries Served"
    },
    {
        value: "1000+",
        title: "Projects Completed"
    }
];

// Reusable Counter Engine Sub-component
const AnimatedCounter = ({ targetValue, duration = 2000, isVisible }) => {
    const [count, setCount] = useState(0);

    // Parse the number and extract any non-numeric suffix (like "+" or "%")
    const numericTarget = parseInt(targetValue.replace(/[^0-9]/g, ""), 10) || 0;
    const suffix = targetValue.replace(/[0-9]/g, "");

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // "Ease-out cubic" curve to make the numbers slow down gracefully at the end
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(easeOutProgress * numericTarget));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [numericTarget, duration, isVisible]);

    return (
        <span>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
};

export default function Statistics() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 } // Starts counting when 20% of the section is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={containerRef}
            className="py-24 lg:py-32 bg-[#032850] text-white overflow-hidden relative"
        >
            {/* Soft Ambient Vector Glow Patterns */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF5A1F]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2" />

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">

                    {stats.map((item, index) => (
                        <div
                            key={item.title}
                            className={`text-center relative transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Decorative Top Accent Line per column */}
                            <div className={`w-8 h-[2px] bg-[#FF5A1F] mx-auto mb-6 transition-all duration-700 delay-500 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                                }`} />

                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-[#FF5A1F] to-[#FF814A] bg-clip-text text-transparent filter drop-shadow-sm select-none">
                                <AnimatedCounter targetValue={item.value} isVisible={isVisible} />
                            </h2>

                            <p className="text-white/75 text-xs sm:text-sm lg:text-base font-medium uppercase tracking-wider max-w-[180px] mx-auto leading-snug">
                                {item.title}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}