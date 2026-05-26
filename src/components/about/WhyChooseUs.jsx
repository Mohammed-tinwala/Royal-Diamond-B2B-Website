import React from "react";
import {
    ShieldCheck,
    Globe,
    Truck,
    Package,
    Headphones,
    BadgeDollarSign
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Trusted Quality",
        desc: "Products sourced from verified manufacturers worldwide."
    },
    {
        icon: Globe,
        title: "Global Reach",
        desc: "Trade network spanning multiple international markets."
    },
    {
        icon: Truck,
        title: "Reliable Logistics",
        desc: "Efficient shipping and freight management solutions."
    },
    {
        icon: Package,
        title: "Industrial Expertise",
        desc: "Deep knowledge of industrial procurement requirements."
    },
    {
        icon: BadgeDollarSign,
        title: "Competitive Pricing",
        desc: "Optimized sourcing strategies delivering better value."
    },
    {
        icon: Headphones,
        title: "Dedicated Support",
        desc: "Responsive customer service throughout every project."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-22">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="text-center mb-20">

                    <span className="text-secondary font-medium">
                        Why Choose Us
                    </span>

                    <h2 className="mt-4 text-4xl md:text-6xl font-semibold">
                        The Royal Diamond Advantage
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="group border border-gray-100 rounded-4xl p-8 hover:bg-[#032850] transition-all duration-500"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-[#FF5A1F]/10 flex items-center justify-center mb-8">

                                    <Icon
                                        size={28}
                                        className="text-secondary group-hover:text-white"
                                    />

                                </div>

                                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed group-hover:text-white/70">
                                    {feature.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}