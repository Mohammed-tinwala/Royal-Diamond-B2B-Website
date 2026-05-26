import React from "react";

export default function ContactFAQ() {
    return (
        <section className="py-12">

            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-4xl font-semibold text-center mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">

                    <div className="border rounded-2xl p-6">
                        <h3 className="font-semibold">
                            Which countries do you serve?
                        </h3>
                        <p className="mt-2 text-gray-600">
                            We serve clients across the Middle East,
                            Africa and global markets.
                        </p>
                    </div>

                    <div className="border rounded-2xl p-6">
                        <h3 className="font-semibold">
                            Do you offer procurement services?
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Yes, we provide end-to-end sourcing and procurement.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}