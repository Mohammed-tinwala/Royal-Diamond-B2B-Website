import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

const Services = () => {
    return (
        <section className="py-8">
            <div className="max-w-360 mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="grid lg:grid-cols-2 gap-10 mb-16">

                    <div>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">
                            Our Services
                        </span>

                        <h2 className="mt-4 text-2xl md:text-5xl font-semibold leading-tight">
                            Industrial Trade &
                            <br />
                            Logistics Solutions
                        </h2>
                    </div>

                    <div className="flex flex-col justify-between lg:items-end">

                        <p className="text-gray-600 text-sm max-w-md leading-relaxed">
                            Royal Diamond provides sourcing, logistics and import-export
                            solutions for oil & gas, industrial and infrastructure projects
                            across Dubai, Africa and global markets.
                        </p>

                        <button className="mt-6 lg:mt-0 bg-[#FF4D00] text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
                            View All Services
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;