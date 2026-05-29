import React, { useState, useEffect, useRef } from "react";
import {
    Target,
    Eye,
    ShieldCheck
} from "lucide-react";

const cards = [
    {
        title: "Mission",
        icon: Target,
        text: "Deliver reliable industrial sourcing and logistics solutions that empower businesses worldwide."
    },
    {
        title: "Vision",
        icon: Eye,
        text: "Become a globally recognized industrial trading partner known for trust and operational excellence."
    },
    {
        title: "Values",
        icon: ShieldCheck,
        text: "Integrity, reliability, innovation and long-term partnerships guide every decision we make."
    }
];

export default function MissionVission() {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 overflow-hidden">
            <div className="max-w-360 mx-auto px-6 lg:px-12">

                {/* Header Animation */}
                <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <p className="text-secondary font-medium mb-4 tracking-widest uppercase text-sm">
                        Mission • Vision • Values
                    </p>
                    <h2 className="text-4xl md:text-6xl font-semibold text-gray-900">
                        Principles That Drive Us
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={card.title}
                                className={`group bg-[#F8F9FB] rounded-[32px] p-10 hover:bg-[#032850] hover:text-white transition-all duration-700 transform ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-12"
                                    }`}
                                // This creates the staggered "wave" effect
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#FF5A1F] text-white flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-2xl font-bold mb-4">
                                    {card.title}
                                </h3>

                                <p className="leading-relaxed text-gray-600 group-hover:text-white/80 text-lg">
                                    {card.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}