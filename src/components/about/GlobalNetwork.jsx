import React from "react";
import { Globe2 } from "lucide-react";

export default function GlobalNetwork() {
    return (
        <section className="relative py-18 overflow-hidden bg-[#FFF4F1]">

            <div className="absolute inset-0 opacity-20">
                <img
                    src="/world-map.svg"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="max-w-360 mx-auto px-6 lg:px-12 relative">

                <div className="text-center max-w-4xl mx-auto">

                    <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6">
                        <Globe2 size={18} />
                        <span className="text-sm font-medium">
                            Global Trade Network
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-semibold mb-8">
                        Connecting Markets
                        Across Continents
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our strategic sourcing and logistics network spans
                        the Middle East, Africa, Asia and Europe,
                        ensuring efficient procurement and reliable delivery.
                    </p>

                </div>

                <div className="mt-20 grid md:grid-cols-4 gap-6">

                    {[
                        "Dubai",
                        "Africa",
                        "Europe",
                        "Asia"
                    ].map((region) => (
                        <div
                            key={region}
                            className="bg-white rounded-[32px] p-8 text-center shadow-sm"
                        >
                            <div className="w-4 h-4 bg-[#FF5A1F] rounded-full mx-auto mb-4"></div>

                            <h3 className="text-xl font-semibold">
                                {region}
                            </h3>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}