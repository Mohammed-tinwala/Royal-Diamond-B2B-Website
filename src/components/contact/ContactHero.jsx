import React from "react";

export default function ContactHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A1F]/20 blur-[120px]" />
            <div className="max-w-360 mx-auto px-6 lg:px-12 text-white">
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                    Contact Royal Diamond
                </span>

                <h1 className="text-5xl md:text-7xl font-semibold mt-6 leading-tight">
                    Let's Discuss
                    Your Next
                    Industrial Project
                </h1>

                <p className="mt-8 text-white/70 max-w-2xl text-lg">
                    Reach out to our team for sourcing,
                    procurement, logistics and industrial
                    trade solutions worldwide.
                </p>
            </div>
        </section>
    );
}