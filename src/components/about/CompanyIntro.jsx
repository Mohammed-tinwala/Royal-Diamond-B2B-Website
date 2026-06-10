import React, { useState, useEffect } from "react";

export default function CompanyIntro() {
    const [isVisible, setIsVisible] = useState(false);

    // Trigger fade-in after component mounts
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 150);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-12 overflow-hidden">
            <div className="max-w-360 mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <div className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}>
                        <p className="text-secondary font-medium mb-4">
                            Who We Are
                        </p>

                        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
                            Your Trusted Partner
                            <br />
                            For Industrial Supply
                            <br />
                            & Project Procurement
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

                    {/* Right Column: Image and Badge (Delayed slightly for visual balance) */}
                    <div className={`relative transition-all duration-1000 delay-200 ease-out transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}>
                        <img
                            src="/trade.jpg"
                            alt="trade"
                            className="rounded-[40px] w-full h-125 object-cover shadow-lg"
                        />

                        {/* Floating Project Counter Badge */}
                        <div className="absolute -top-8 -right-8 bg-[#032850] text-white rounded-3xl p-6 max-w-xs shadow-xl">
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