import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutHero() {
    const navigate = useNavigate();

    const handleContactUs = () => {
        navigate("/contact");
    }
    

    return (
        <section className="relative flex items-center pt-16 md:pt-22 md:pb-12">

            {/* Background Decoration */}

            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A1F]/10 blur-[120px]" />

            <div className="max-w-360 mx-auto px-6 lg:px-12 py-12">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}

                    <div>

                        <span className="inline-flex px-4 py-2 rounded-full bg-[#FF5A1F]/10 text-[#FF5A1F] text-sm font-medium">
                            About Royal Diamond
                        </span>

                        <h1 className="mt-4 text-2xl md:text-4xl lg:text-6xl font-semibold leading-tight">
                            Connecting
                            Industries
                            Across Borders
                        </h1>

                        <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed">
                            Royal Diamond provides industrial sourcing,
                            procurement, logistics and import-export
                            solutions connecting Dubai, Africa and
                            global markets.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">

                            <button className="bg-secondary text-white px-7 py-4 rounded-full flex items-center gap-2">
                                Explore Services
                                <ArrowRight size={18} />
                            </button>

                            <button onClick={handleContactUs} className="border cursor-pointer border-gray-300 px-7 py-4 rounded-full">
                                Contact Us
                            </button>

                        </div>

                    </div>

                    {/* Image */}

                    <div className="relative">

                        <img
                            src="/industrial-operation.jpg"
                            alt="Industrial Operations"
                            className="rounded-[40px] h-120 w-full object-cover"
                        />

                        {/* Floating Stats */}

                        <div className="absolute -bottom-8 left-8 bg-white rounded-3xl shadow-xl p-6 w-72">

                            <div className="grid grid-cols-2 gap-4">

                                <div>
                                    <h3 className="text-3xl font-bold text-secondary">
                                        25+
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Years Experience
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-[#FF5A1F]">
                                        40+
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Countries
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-[#FF5A1F]">
                                        500+
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Clients
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-[#FF5A1F]">
                                        98%
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        On-Time Delivery
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}