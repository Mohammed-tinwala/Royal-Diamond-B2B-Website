import React from "react";

export default function ContactCTA() {
    return (
        <section className="py-24">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="bg-linear-to-r from-[#032850] to-[#FF5A1F] rounded-[40px] p-16 text-white text-center">

                    <h2 className="text-4xl md:text-6xl font-semibold">
                        Ready To Start
                        Your Project?
                    </h2>

                    <p className="mt-6 text-white/80 max-w-2xl mx-auto">
                        Contact our team today and discover
                        how Royal Diamond can support your
                        business operations worldwide.
                    </p>

                    <button className="mt-10 bg-white text-[#032850] px-8 py-4 rounded-full font-medium">
                        Request A Quote
                    </button>

                </div>

            </div>

        </section>
    );
}