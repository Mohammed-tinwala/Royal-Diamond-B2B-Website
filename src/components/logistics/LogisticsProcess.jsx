import React from "react";
import { processSteps } from "../../data/processSteps";
import ProcessCard from "./ProcessCard";

export default function LogisticsProcess() {
    return (
        <section className="py-12 overflow-hidden">

            <div className="max-w-360 mx-auto">

                {/* ========================= */}
                {/* STATS */}
                {/* ========================= */}

                <div className="px-6 lg:px-12 mb-20">

                    <p className="text-sm text-gray-500 mb-10">
                        Numbers That Move Trade
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center">

                        <div className="text-center">
                            <h2 className="text-5xl lg:text-6xl font-semibold">
                                98.5%
                            </h2>

                            <p className="mt-2 text-gray-600">
                                On-Time Delivery
                                <br />
                                (Last 12 Months)
                            </p>
                        </div>

                        <div className="text-center">
                            <h2 className="text-5xl lg:text-6xl font-semibold">
                                15K+
                            </h2>

                            <p className="mt-2 text-gray-600">
                                Equipment Shipments
                                <br />
                                Annually
                            </p>
                        </div>

                        <div className="text-center">
                            <h2 className="text-5xl lg:text-6xl font-semibold">
                                500+
                            </h2>

                            <p className="mt-2 text-gray-600">
                                Industrial Clients
                                <br />
                                Across Regions
                            </p>
                        </div>

                    </div>
                </div>

                {/* ========================= */}
                {/* HERO IMAGE */}
                {/* ========================= */}

                <div className="relative h-100 md:h-137.5 lg:h-175">

                    <img
                        src="/cargo-ship.jpg"
                        alt="Royal Diamond Logistics"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/20"></div>

                    {/* Heading */}

                    <div className="absolute top-12 left-6 lg:left-12 max-w-2xl">

                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                            Three simple steps to
                            <br />
                            seamless industrial
                            <br />
                            trade delivery.
                        </h2>

                    </div>

                </div>

                {/* ========================= */}
                {/* PROCESS BOX */}
                {/* ========================= */}

                <div className="relative">

                    <div
                        className="
            bg-white
            lg:w-[58%]
            px-8
            md:px-12
            py-14
            lg:-mt-36
            relative
            z-20
            shadow-sm
          "
                    >

                        <p className="text-sm text-gray-500 mb-10">
                            How It Works
                        </p>

                        <div className="space-y-16">

                            {processSteps.map((step) => (
                                <ProcessCard
                                    key={step.id}
                                    step={step}
                                />
                            ))}

                        </div>

                    </div>

                    {/* Compass Decoration */}

                    <div
                        className="
            hidden lg:flex
            absolute
            right-0
            bottom-0
            w-125
            h-125
            items-center
            justify-center
            opacity-10
            pointer-events-none
          "
                    >

                        <svg
                            viewBox="0 0 400 400"
                            className="w-full h-full"
                        >
                            <circle
                                cx="200"
                                cy="200"
                                r="160"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            />

                            <circle
                                cx="200"
                                cy="200"
                                r="120"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            />

                            <path
                                d="M200 40 L225 200 L200 360 L175 200 Z"
                                fill="currentColor"
                            />

                            <path
                                d="M40 200 L200 175 L360 200 L200 225 Z"
                                fill="currentColor"
                            />

                            <text x="190" y="20">N</text>
                            <text x="190" y="395">S</text>
                            <text x="10" y="205">W</text>
                            <text x="380" y="205">E</text>
                        </svg>

                    </div>
                </div>

            </div>
        </section>
    );
}