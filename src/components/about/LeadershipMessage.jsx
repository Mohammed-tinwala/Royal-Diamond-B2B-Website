import React from "react";
import { Quote } from "lucide-react";

export default function LeadershipMessage() {
    return (
        <section className="py-12">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}

                    <div className="relative">

                        <img
                            src="/managing-director.jpg"
                            alt="Managing Director"
                            className="w-full h-162.5 rounded-[40px] object-cover"
                        />

                        <div className="absolute -bottom-8 left-8 bg-primary text-white rounded-3xl px-8 py-6">

                            <h4 className="font-semibold text-xl">
                                Managing Director
                            </h4>

                            <p className="text-white/70 text-sm mt-1">
                                Royal Diamond Trading LLC
                            </p>

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <span className="text-secondary font-medium">
                            Leadership Message
                        </span>

                        <Quote
                            size={70}
                            className="text-secondary/20 mt-8"
                        />

                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mt-4">
                            Building Long-Term
                            Relationships Through
                            Trust And Reliability
                        </h2>

                        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                            At Royal Diamond, our focus extends beyond
                            supplying products. We create lasting
                            partnerships by understanding client
                            requirements, delivering quality solutions,
                            and ensuring operational excellence at every
                            stage of the supply chain.
                        </p>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Through innovation, strategic sourcing and
                            global logistics expertise, we remain committed
                            to helping industries achieve sustainable growth.
                        </p>

                        <div className="mt-10">

                            <h4 className="font-semibold text-2xl">
                                Mohammed Al Rashid
                            </h4>

                            <p className="text-gray-500 mt-1">
                                Managing Director
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}