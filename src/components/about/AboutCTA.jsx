import React from "react";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="py-24">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-r from-[#032850] to-[#FF5A1F] px-8 lg:px-20 py-20 text-white">

                    {/* Decorative Circles */}

                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/10 blur-[100px]" />

                    <div className="relative z-10 max-w-4xl">

                        <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-sm mb-6">
                            Let's Work Together
                        </span>

                        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
                            Ready To Source
                            Your Next Industrial
                            Project?
                        </h2>

                        <p className="mt-8 text-white/80 text-lg max-w-2xl">
                            Whether you require procurement support,
                            industrial equipment sourcing or logistics
                            solutions, our team is ready to assist.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">

                            <button className="bg-white text-[#032850] px-7 py-4 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition">

                                Request A Quote

                                <ArrowRight size={18} />

                            </button>

                            <button className="border border-white/30 px-7 py-4 rounded-full hover:bg-white/10 transition">
                                Contact Us
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}