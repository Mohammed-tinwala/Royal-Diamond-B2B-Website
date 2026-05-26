import React from "react";

const stats = [
    {
        value: "25+",
        title: "Years Experience"
    },
    {
        value: "500+",
        title: "Global Clients"
    },
    {
        value: "40+",
        title: "Countries Served"
    },
    {
        value: "1000+",
        title: "Projects Completed"
    }
];

export default function Statistics() {
    return (
        <section className="py-28 bg-[#032850] text-white">

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

                    {stats.map((item) => (
                        <div
                            key={item.title}
                            className="text-center"
                        >

                            <h2 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[#FF5A1F] to-[#FF7E47] bg-clip-text text-transparent">
                                {item.value}
                            </h2>

                            <p className="text-white/70 text-sm lg:text-base">
                                {item.title}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}