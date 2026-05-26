import React from "react";

const steps = [
    {
        number: "01",
        title: "Requirement Analysis",
        desc: "Understanding project specifications and sourcing requirements."
    },
    {
        number: "02",
        title: "Strategic Procurement",
        desc: "Identifying trusted manufacturers and suppliers globally."
    },
    {
        number: "03",
        title: "Quality Verification",
        desc: "Ensuring products meet technical and industry standards."
    },
    {
        number: "04",
        title: "Global Logistics",
        desc: "Managing shipping, customs and freight operations."
    },
    {
        number: "05",
        title: "Delivery & Support",
        desc: "Providing reliable delivery and ongoing assistance."
    }
];

export default function WorkProcess() {
    return (
        <section className="py-12">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="text-center mb-20">

                    <span className="text-secondary font-medium">
                        How We Work
                    </span>

                    <h2 className="mt-4 text-4xl md:text-6xl font-semibold">
                        A Streamlined Process
                        For Every Project
                    </h2>

                </div>

                <div className="space-y-10">

                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="bg-white rounded-4xl p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center gap-8"
                        >

                            <div className="text-6xl font-bold text-secondary/20">
                                {step.number}
                            </div>

                            <div className="lg:w-1/3">
                                <h3 className="text-2xl font-semibold">
                                    {step.title}
                                </h3>
                            </div>

                            <div className="flex-1">
                                <p className="text-gray-600 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}