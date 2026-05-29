import React, { useState, useEffect, useRef } from "react";
import {
    ShieldCheck,
    Globe,
    Truck,
    Package,
    Headphones,
    BadgeDollarSign
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Trusted Quality",
        desc: "Products sourced from verified manufacturers worldwide."
    },
    {
        icon: Globe,
        title: "Global Reach",
        desc: "Trade network spanning multiple international markets."
    },
    {
        icon: Truck,
        title: "Reliable Logistics",
        desc: "Efficient shipping and freight management solutions."
    },
    {
        icon: Package,
        title: "Industrial Expertise",
        desc: "Deep knowledge of industrial procurement requirements."
    },
    {
        icon: BadgeDollarSign,
        title: "Competitive Pricing",
        desc: "Optimized sourcing strategies delivering better value."
    },
    {
        icon: Headphones,
        title: "Dedicated Support",
        desc: "Responsive customer service throughout every project."
    }
];

export default function WhyChooseUs() {
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
            { threshold: 0.1 } // Starts animating when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-22 overflow-hidden bg-white">
            <div className="max-w-360 mx-auto px-6 lg:px-12">

                {/* Header Animation */}
                <div className={`text-center mb-20 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                        Why Choose Us
                    </span>
                    <h2 className="mt-4 text-4xl md:text-6xl font-semibold text-gray-900">
                        The Royal Diamond Advantage
                    </h2>
                </div>

                {/* Grid with Staggered Fade-in */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className={`group border border-gray-100 rounded-4xl p-8 hover:bg-[#032850] transition-all duration-700 transform ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-12"
                                    }`}
                                // Stagger logic: each card waits 100ms longer than the previous one
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#FF5A1F]/10 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-[#FF5A1F] group-hover:scale-110">
                                    <Icon
                                        size={28}
                                        className="text-secondary group-hover:text-white transition-colors duration-500"
                                    />
                                </div>

                                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                                    {feature.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}