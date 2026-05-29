import React, { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
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
        <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
            <div className="max-w-360 mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mb-20">
                    <div>
                        <p className={`text-sm text-[#FF5A1F] font-bold uppercase tracking-[0.2em] mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
                            Client Success Stories
                        </p>

                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                            {/* Inner Shadow Text Transition */}
                            <span className={`inline-block transition-all duration-1000 delay-300 ${isVisible
                                    ? "text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-800 to-gray-400 bg-[size:100%_200%] bg-[position:0%_0%]"
                                    : "text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-800 to-gray-400 bg-[size:100%_200%] bg-[position:0%_100%]"
                                }`}>
                                Trusted By Global
                            </span>
                            <br />
                            <span className={`inline-block transition-all duration-1000 delay-500 ${isVisible
                                    ? "text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-800 to-gray-400 bg-[size:100%_200%] bg-[position:0%_0%]"
                                    : "text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-800 to-gray-400 bg-[size:100%_200%] bg-[position:0%_100%]"
                                }`}>
                                Industry Partners
                            </span>
                        </h2>
                    </div>

                    <p className={`max-w-xl text-gray-500 text-lg leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Royal Diamond has built long-term relationships with industrial,
                        energy, and infrastructure companies by delivering
                        quality products and reliable logistics.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            style={{ transitionDelay: `${index * 200 + 800}ms` }}
                            className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                                }`}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;