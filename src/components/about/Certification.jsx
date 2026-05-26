import React from "react";

const certifications = [
    "ISO Certified",
    "Quality Assurance",
    "Global Trade Compliance",
    "Industrial Safety Standards",
    "Verified Supplier Network",
    "International Logistics Standards"
];

export default function Certification() {
    return (
        <section className="py-32 bg-white">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="text-center mb-20">

                    <span className="text-[#FF5A1F] font-medium">
                        Certifications & Partnerships
                    </span>

                    <h2 className="mt-4 text-4xl md:text-6xl font-semibold">
                        Commitment To Quality
                        And Compliance
                    </h2>

                </div>

                {/* Logos */}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">

                    {[1, 2, 3, 4, 5, 6].map((logo) => (
                        <div
                            key={logo}
                            className="h-32 rounded-[24px] border border-gray-100 flex items-center justify-center bg-[#F8F9FB]"
                        >
                            <img
                                src={`/partners/logo-${logo}.png`}
                                alt=""
                                className="max-h-12 object-contain opacity-70 hover:opacity-100 transition"
                            />
                        </div>
                    ))}

                </div>

                {/* Certification Cards */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {certifications.map((item) => (
                        <div
                            key={item}
                            className="border border-gray-100 rounded-[32px] p-8 hover:bg-[#032850] hover:text-white transition-all duration-500"
                        >

                            <div className="w-12 h-12 rounded-full bg-[#FF5A1F] mb-6"></div>

                            <h3 className="text-xl font-semibold">
                                {item}
                            </h3>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}