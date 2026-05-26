import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
    return (
        <section className="py-14 bg-[#F8F9FB]">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                {/* Header */}

                <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mb-16">

                    <div>
                        <p className="text-sm text-[#FF5A1F] font-medium mb-3">
                            Client Success Stories
                        </p>

                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                            Trusted By Global
                            <br />
                            Industry Partners
                        </h2>
                    </div>

                    <p className="max-w-xl text-gray-600 leading-relaxed">
                        Royal Diamond has built long-term relationships with industrial,
                        engineering, energy, and infrastructure companies by delivering
                        quality products, reliable logistics, and responsive support.
                    </p>

                </div>

                {/* Testimonials */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Testimonials;