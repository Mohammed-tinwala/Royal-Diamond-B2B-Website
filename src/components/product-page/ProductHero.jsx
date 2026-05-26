import React from "react";

export default function ProductHero() {
    return (
        // <section className="min-h-[60vh] bg-primary flex items-center text-white relative overflow-hidden">
        //     <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A1F]/20 blur-[120px]" />

        //     <div className="max-w-360 mx-auto px-0 lg:px-0">

        //         <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
        //             Royal Diamond Products
        //         </span>

        //         <h1 className="text-5xl md:text-7xl font-semibold mt-6 leading-tight">
        //             Industrial Product
        //             Catalogue
        //         </h1>

        //         <p className="max-w-2xl mt-8 text-white/70 text-lg">
        //                 Browse our extensive portfolio of industrial,
        //                 oil & gas, marine and infrastructure products.
        //         </p>

        //     </div>

        // </section>

        <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A1F]/20 blur-[120px]" />
            <div className=" px-12 text-white">
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                    Royal Diamond Products
                </span>

                <h1 className="text-5xl md:text-7xl font-semibold mt-6 leading-tight">
                    Industrial Product
                    Catalogue
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