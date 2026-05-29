import React, { useState, useEffect, useRef } from "react";
import { timeline } from "../../data/timeline";

// Sub-component for each timeline row to handle its own scroll observation
const TimelineItem = ({ item, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(domRef.current); // Only animate once
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of the item is visible

        observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={domRef}
            className="grid md:grid-cols-2 gap-8 md:gap-16 items-start relative group"
        >
            {/* Central Animated Node Dot */}
            <div className={`absolute left-[-9px] md:left-1/2 top-2 w-4 h-4 rounded-full border-4 border-white bg-secondary shadow-md transition-all duration-700 delay-300 transform md:-translate-x-1/2 z-20 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`} />

            {/* Left Side: Year and Title */}
            <div className={`pl-6 md:pl-0 md:text-right transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}>
                <span className="text-4xl md:text-5xl font-black text-secondary/20 group-hover:text-secondary/40 transition-colors duration-300 block mb-1">
                    {item.year}
                </span>
                <h4 className="text-xl md:text-2xl font-bold text-gray-800">
                    {item.title}
                </h4>
            </div>

            {/* Right Side: Short Description */}
            <div className={`pl-6 md:pl-0 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 max-w-md">
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function StoryTimeline() {
    return (
        <section className="py-20 bg-gray-50/50 overflow-hidden w-full">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <div className="mb-20 text-center">
                    <p className="text-secondary font-medium uppercase tracking-wider mb-3">
                        Our Journey
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                        Milestones That Shaped Our Growth
                    </h2>
                </div>

                {/* Vertical Timeline Container */}
                <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:border-l-0">

                    {/* Central Vertical Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 transform -translate-x-1/2 z-0" />

                    {/* Timeline Nodes */}
                    <div className="space-y-12 md:space-y-24 relative z-10">
                        {timeline.map((item, index) => (
                            <TimelineItem key={item.year} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}