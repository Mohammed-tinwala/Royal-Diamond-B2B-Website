import React from "react";

export default function OfficeLocations() {
    return (
        <section className="py-12">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="text-center mb-16">

                    <h2 className="text-5xl font-semibold">
                        Our Locations
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="border rounded-4xl p-8">
                        <h3 className="text-2xl font-semibold mb-4">
                            Dubai Headquarters
                        </h3>

                        <p className="text-gray-600">
                            Business Bay, Dubai, UAE
                        </p>
                    </div>

                    <div className="border rounded-4xl p-8">
                        <h3 className="text-2xl font-semibold mb-4">
                            Africa Operations
                        </h3>

                        <p className="text-gray-600">
                            Regional support offices
                            across African markets.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}