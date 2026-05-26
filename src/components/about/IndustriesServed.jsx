import React from "react";
import { industries } from "../../data/industries";

export default function IndustriesServed() {
    return (
        <section className="py-12">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="text-center mb-20">

                    <span className="text-secondary font-medium">
                        Industries We Serve
                    </span>

                    <h2 className="mt-4 text-4xl md:text-6xl font-semibold">
                        Supporting Critical
                        Industries Worldwide
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {industries.map((industry) => {
                        const Icon = industry.icon;

                        return (
                            <div
                                key={industry.title}
                                className="group relative overflow-hidden rounded-4xl"
                            >

                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/40"></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">

                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="text-3xl text-white font-semibold">
                                        {industry.title}
                                    </h3>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}