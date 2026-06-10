import React, { useState, useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-[#F9FAFB]">
            <div className="max-w-360 mx-auto px-6 lg:px-12">
                {/* Header - Smooth Fade In */}
                <div className={`grid lg:grid-cols-2 gap-10 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <div>
                        <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">
                            What We Supply
                        </span>

                        <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
                            Industrial Pipes,
                            <br />
                            Fittings & Valve Solutions
                        </h2>
                    </div>

                    <div className="flex flex-col justify-between lg:items-end">
                        <p className="text-gray-500 text-base max-w-md leading-relaxed">
                            We supply certified industrial pipes, fittings, valves and
                            related components for construction, infrastructure, oil & gas,
                            manufacturing and industrial projects across the UAE and Africa.
                        </p>
                        {/* <button className="group relative mt-6 lg:mt-0 bg-secondary text-white px-8 py-4 rounded-full text-sm font-medium overflow-hidden transition-all duration-300 hover:pr-12">
                            <span className="relative z-10">View All Services</span>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-5">
                                →
                            </span>
                        </button> */}
                    </div>
                </div>

                {/* Cards Grid - Staggered Entrance */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                            }}
                            className={`transform transition-all duration-700 ${isVisible
                                ? "opacity-100 translate-y-0 rotate-0"
                                : "opacity-0 translate-y-20 rotate-2"
                                }`}
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;