import React from "react";
import ContactForm from "./ContactForm";

export default function ContactFormSection() {

    return (

        <section className="py-12 bg-[#f8fafc]">
            <div className="max-w-360 mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content Information */}
                    <div>
                        <span className="text-secondary font-medium">Get In Touch</span>
                        <h2 className="text-4xl md:text-6xl font-semibold mt-4 leading-tight">Send Us A Message</h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            Tell us about your sourcing,
                            procurement or logistics requirements.
                            Our team will respond shortly.
                        </p>

                        <div className="mt-10 space-y-5">
                            <div>
                                <h4 className="font-semibold">Procurement Support</h4>
                                <p className="text-gray-600">Global supplier sourcing</p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Logistics Services</h4>
                                <p className="text-gray-600">International shipping solutions</p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Industrial Products</h4>
                                <p className="text-gray-600">Oil & gas and industrial equipment</p>
                            </div>

                        </div>

                    </div>

                    {/* Contact Form  */}
                    <ContactForm />
                </div>

            </div>

        </section>
    );
}