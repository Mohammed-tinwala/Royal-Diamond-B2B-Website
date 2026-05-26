import React from "react";

export default function CompanyIntro() {
    return (
        <section className="py-12">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">

                    <div>

                        <p className="text-secondary font-medium mb-4">
                            Who We Are
                        </p>

                        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
                            Building Reliable
                            Trade Partnerships
                            Worldwide
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Royal Diamond is a trusted industrial trading
                            company headquartered in Dubai, delivering
                            sourcing, procurement, logistics and supply
                            chain solutions to clients worldwide.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Through strategic partnerships with global
                            manufacturers and logistics providers, we
                            ensure quality products, competitive pricing,
                            and reliable delivery for every project.
                        </p>

                    </div>

                    <div className="relative">

                        <img
                            src="/trade.jpg"
                            alt="trade"
                            className="rounded-[40px] w-full h-125 object-cover"
                        />

                        <div className="absolute -top-8 -right-8 bg-[#032850] text-white rounded-3xl p-6 max-w-xs">

                            <h3 className="text-4xl font-semibold mb-2">
                                1000+
                            </h3>

                            <p className="text-white/70">
                                Successful industrial procurement
                                and logistics projects completed.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}