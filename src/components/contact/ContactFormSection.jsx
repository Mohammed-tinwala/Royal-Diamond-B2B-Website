import React from "react";

export default function ContactFormSection() {
    return (
        <section className="py-12">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Left */}

                    <div>

                        <span className="text-secondary font-medium">
                            Get In Touch
                        </span>

                        <h2 className="text-4xl md:text-6xl font-semibold mt-4">
                            Send Us A Message
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg">
                            Tell us about your sourcing,
                            procurement or logistics requirements.
                            Our team will respond shortly.
                        </p>

                        <div className="mt-10 space-y-5">

                            <div>
                                <h4 className="font-semibold">
                                    Procurement Support
                                </h4>
                                <p className="text-gray-600">
                                    Global supplier sourcing
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Logistics Services
                                </h4>
                                <p className="text-gray-600">
                                    International shipping solutions
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Industrial Products
                                </h4>
                                <p className="text-gray-600">
                                    Oil & gas and industrial equipment
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Form */}

                    <div className="bg-white rounded-[40px] p-8 shadow-sm">

                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full h-14 px-5 rounded-xl border border-gray-200 outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full h-14 px-5 rounded-xl border border-gray-200 outline-none"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full h-14 px-5 rounded-xl border border-gray-200 outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Company Name"
                                className="w-full h-14 px-5 rounded-xl border border-gray-200 outline-none"
                            />

                            <select className="w-full h-14 px-5 rounded-xl border border-gray-200 outline-none">
                                <option>Select Service</option>
                                <option>Procurement</option>
                                <option>Logistics</option>
                                <option>Import / Export</option>
                                <option>Industrial Equipment</option>
                            </select>

                            <textarea
                                rows={6}
                                placeholder="Tell us about your requirements..."
                                className="w-full p-5 rounded-xl border border-gray-200 outline-none resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full h-14 bg-[#FF5A1F] text-white rounded-xl font-medium hover:opacity-90 transition"
                            >
                                Submit Inquiry
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}