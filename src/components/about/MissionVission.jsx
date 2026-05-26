import React from "react";
import {
    Target,
    Eye,
    ShieldCheck
} from "lucide-react";

const cards = [
    {
        title: "Mission",
        icon: Target,
        text: "Deliver reliable industrial sourcing and logistics solutions that empower businesses worldwide."
    },
    {
        title: "Vision",
        icon: Eye,
        text: "Become a globally recognized industrial trading partner known for trust and operational excellence."
    },
    {
        title: "Values",
        icon: ShieldCheck,
        text: "Integrity, reliability, innovation and long-term partnerships guide every decision we make."
    }
];

export default function MissionVission() {
    return (
        <section className="py-12">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="text-center mb-16">

                    <p className="text-secondary font-medium mb-4">
                        Mission • Vision • Values
                    </p>

                    <h2 className="text-4xl md:text-6xl font-semibold">
                        Principles That Drive Us
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {cards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={card.title}
                                className="group bg-[#F8F9FB] rounded-[32px] p-8 hover:bg-[#032850] hover:text-white transition-all duration-500"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-[#FF5A1F] text-white flex items-center justify-center mb-8">
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-2xl font-semibold mb-4">
                                    {card.title}
                                </h3>

                                <p className="leading-relaxed text-gray-600 group-hover:text-white/70">
                                    {card.text}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}