import React from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowRight,
    Building2,
} from "lucide-react";

const ContactSection = () => {
    return (
        <section className="mb-4">
            <div className="max-w-360 mx-auto px-6 lg:px-12">

                {/* Header */}

                <div className="text-center mb-16">
                    <span className="text-secondary font-medium">
                        Contact Royal Diamond
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                        Let's Discuss Your
                        Industrial Requirements
                    </h2>

                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Looking for industrial equipment, oilfield supplies,
                        procurement support or global logistics solutions?
                        Our team is ready to assist your next project.
                    </p>
                </div>

                {/* Content */}

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Side */}

                    <div className="bg-primary text-white rounded-4xl p-8 lg:p-12">

                        <h3 className="text-3xl font-semibold mb-10">
                            Get In Touch
                        </h3>

                        <div className="space-y-8">

                            <div className="flex gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <MapPin size={24} />
                                </div>

                                <div>
                                    <h4 className="font-medium mb-1">
                                        Office Address
                                    </h4>

                                    <p className="text-white/70">
                                        Dubai, United Arab Emirates
                                        <br />
                                        Industrial Trading District
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <Phone size={24} />
                                </div>

                                <div>
                                    <h4 className="font-medium mb-1">
                                        Phone Number
                                    </h4>

                                    <p className="text-white/70">
                                        +971 XX XXX XXXX
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <Mail size={24} />
                                </div>

                                <div>
                                    <h4 className="font-medium mb-1">
                                        Email Address
                                    </h4>

                                    <p className="text-white/70">
                                        info@royaldiamond.ae
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <Clock size={24} />
                                </div>

                                <div>
                                    <h4 className="font-medium mb-1">
                                        Working Hours
                                    </h4>

                                    <p className="text-white/70">
                                        Monday - Saturday
                                        <br />
                                        08:00 AM - 06:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA */}

                        <div className="mt-12 p-6 rounded-3xl bg-white/10">
                            <div className="flex items-center gap-3 mb-3">
                                <Building2 size={22} />
                                <h4 className="font-medium">
                                    Industrial Procurement Support
                                </h4>
                            </div>

                            <p className="text-white/70 mb-5">
                                Submit your equipment requirements and
                                receive a tailored quotation from our
                                sourcing specialists.
                            </p>

                            <button className="bg-secondary px-6 py-3 rounded-full font-medium hover:scale-105 transition">
                                Request Quote
                            </button>
                        </div>

                    </div>

                    {/* Form */}

                    <div className="bg-white rounded-4xl p-8 lg:p-12 shadow-sm">

                        <h3 className="text-3xl font-semibold mb-8">
                            Send An Inquiry
                        </h3>

                        <form className="space-y-5">

                            <div className="grid md:grid-cols-2 gap-5">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-[#FF5A1F]"
                                />

                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-[#FF5A1F]"
                                />

                            </div>

                            <div className="grid md:grid-cols-2 gap-5">

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-[#FF5A1F]"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-[#FF5A1F]"
                                />

                            </div>

                            <input
                                type="text"
                                placeholder="Product / Service Required"
                                className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-[#FF5A1F]"
                            />

                            <textarea
                                rows="6"
                                placeholder="Tell us about your requirements..."
                                className="w-full p-5 rounded-2xl border border-gray-200 outline-none resize-none focus:border-[#FF5A1F]"
                            />

                            <button
                                type="submit"
                                className="
                bg-secondary
                text-white
                px-8
                py-4
                rounded-full
                font-medium
                flex
                items-center
                gap-2
                hover:scale-105
                transition
              "
                            >
                                Send Inquiry
                                <ArrowRight size={18} />
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;