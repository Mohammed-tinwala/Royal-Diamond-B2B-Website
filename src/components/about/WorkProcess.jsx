import React, { useState, useEffect, useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Requirement Analysis",
        desc: "Understanding project specifications and sourcing requirements deeply to align objectives."
    },
    {
        number: "02",
        title: "Strategic Procurement",
        desc: "Identifying trusted manufacturers and suppliers globally to balance cost and excellence."
    },
    {
        number: "03",
        title: "Quality Verification",
        desc: "Ensuring products strictly meet required technical specifications and international industry standards."
    },
    {
        number: "04",
        title: "Global Logistics",
        desc: "Managing complex cross-border shipping, custom clearance workflows, and freight operations."
    },
    {
        number: "05",
        title: "Delivery & Support",
        desc: "Providing secure, timely site handover alongside comprehensive post-project operations assistance."
    }
];

// Sub-component for an isolated entry tracking state independently
const ProcessRow = ({ step, index, sectionVisible }) => {
    return (
        <div
            className={`group relative bg-white border border-gray-100 rounded-[32px] p-8 lg:p-10 flex flex-col md:flex-row md:items-center gap-6 lg:gap-12 shadow-sm hover:shadow-xl transition-all duration-700 ease-out transform ${sectionVisible
                    ? "opacity-100 translate-x-0"
                    : index % 2 === 0
                        ? "opacity-0 -translate-x-16"
                        : "opacity-0 translate-x-16"
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Dynamic Left Vertical Accent Line on Card Hover */}
            <div className="absolute left-0 top-8 bottom-8 w-[4px] bg-[#FF5A1F] rounded-r-full scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500" />

            {/* Step Index Number Wrapper */}
            <div className="relative flex items-center justify-center min-w-[70px] h-[70px] rounded-2xl bg-gray-50 text-3xl font-black text-[#032850] group-hover:bg-[#032850] group-hover:text-white transition-all duration-500 shadow-inner">
                <span className="relative z-10">{step.number}</span>
                {/* Micro Ambient Light Ring on Active Hover */}
                <span className="absolute inset-0 rounded-2xl bg-[#FF5A1F] opacity-0 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500" />
            </div>

            {/* Central Block Title Area */}
            <div className="md:w-1/3">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#FF5A1F] transition-colors duration-300">
                    {step.title}
                </h3>
            </div>

            {/* Trailing Explicit Informational Description Copy */}
            <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-8 lg:pl-12">
                <p className="text-sm lg:text-base text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.desc}
                </p>
            </div>
        </div>
    );
};

export default function WorkProcess() {
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
            { threshold: 0.1 } // Fires as soon as the container peaks into view
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={containerRef}
            className="py-12 md:py-12 bg-linear-to-b from-white via-gray-50/50 to-white overflow-hidden w-full"
        >
            <div className="max-w-350 mx-auto px-6 lg:px-12 relative">

                {/* Header Presentation Block */}
                <div className={`text-center mb-24 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}>
                    <span className="text-secondary font-semibold uppercase tracking-widest text-xs bg-secondary/10 px-4 py-1.5 rounded-full">
                        How We Work
                    </span>
                    <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15]">
                        A Streamlined Process <br />
                        <span className="bg-gradient-to-r from-[#032850] to-[#FF5A1F] bg-clip-text text-transparent">
                            For Every Project
                        </span>
                    </h2>
                </div>

                {/* Alternating Interlocking Entrance Container Row */}
                <div className="relative space-y-8 max-w-5xl mx-auto z-10">
                    {/* Central Vertical Timeline Track Wire (Visible only when scrolled into) */}
                    <div className={`absolute left-[35px] md:left-[35px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 -z-10 origin-top transition-transform duration-[2000ms] ease-out ${isVisible ? "scale-y-100" : "scale-y-0"
                        }`} />

                    {steps.map((step, index) => (
                        <ProcessRow
                            key={step.number}
                            step={step}
                            index={index}
                            sectionVisible={isVisible}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}