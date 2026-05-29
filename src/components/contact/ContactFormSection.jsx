import React, { useState } from "react";
import axios from "axios";
import {
    Loader2,
} from "lucide-react";

import { toast } from "react-hot-toast";

export default function ContactFormSection() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    /* =========================================
       HANDLE INPUT CHANGE
    ========================================= */

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /* =========================================
       SUBMIT FORM
    ========================================= */

    const handleSubmit = async (e) => {

        e.preventDefault();

        // Validation

        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.message
        ) {

            toast.error("Please fill all required fields.");

            return;
        }

        try {

            setLoading(true);

            const response = await axios.post(
                "https://babjibestpipes.com/royaldiamond/mobileapis/addContactForm.php",
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    subject: formData.subject,
                    message: formData.message,
                }
            );

            console.log("Contact Form Response:", response.data);

            if (
                response.data?.status === true ||
                response.data?.success === true
            ) {

                toast.success(
                    "Inquiry submitted successfully."
                );

                // Reset Form

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    subject: "",
                    message: "",
                });

            } else {

                toast.error(
                    response.data?.message ||
                    "Something went wrong."
                );
            }

        } catch (error) {

            console.error("Contact Form Error:", error);

            toast.error(
                "Unable to submit inquiry. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <section className="py-12 bg-[#f8fafc]">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* =========================================
                        LEFT CONTENT
                    ========================================= */}

                    <div>

                        <span className="text-secondary font-medium">

                            Get In Touch

                        </span>

                        <h2 className="text-4xl md:text-6xl font-semibold mt-4 leading-tight">

                            Send Us A Message

                        </h2>

                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">

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

                    {/* =========================================
                        FORM SECTION
                    ========================================= */}

                    <div
                        className="
                            bg-white
                            rounded-[40px]
                            p-8
                            shadow-sm
                            border
                            border-gray-100
                        "
                    >

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            {/* Full Name */}

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name *"
                                className="
                                    w-full
                                    h-14
                                    px-5
                                    rounded-xl
                                    border
                                    border-gray-200
                                    outline-none
                                    focus:border-[#FF5A1F]
                                    focus:ring-4
                                    focus:ring-orange-100
                                    transition-all
                                "
                            />

                            {/* Email */}

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address *"
                                className="
                                    w-full
                                    h-14
                                    px-5
                                    rounded-xl
                                    border
                                    border-gray-200
                                    outline-none
                                    focus:border-[#FF5A1F]
                                    focus:ring-4
                                    focus:ring-orange-100
                                    transition-all
                                "
                            />

                            {/* Phone */}

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number *"
                                className="
                                    w-full
                                    h-14
                                    px-5
                                    rounded-xl
                                    border
                                    border-gray-200
                                    outline-none
                                    focus:border-[#FF5A1F]
                                    focus:ring-4
                                    focus:ring-orange-100
                                    transition-all
                                "
                            />

                            {/* Company */}

                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company Name"
                                className="
                                    w-full
                                    h-14
                                    px-5
                                    rounded-xl
                                    border
                                    border-gray-200
                                    outline-none
                                    focus:border-[#FF5A1F]
                                    focus:ring-4
                                    focus:ring-orange-100
                                    transition-all
                                "
                            />

                            {/* Subject */}

                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="
                                    w-full
                                    h-14
                                    px-5
                                    rounded-xl
                                    border
                                    border-gray-200
                                    outline-none
                                    focus:border-[#FF5A1F]
                                    focus:ring-4
                                    focus:ring-orange-100
                                    transition-all
                                "
                            />

                            {/* Message */}

                            <textarea
                                rows={6}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your requirements..."
                                className="
                                    w-full
                                    p-5
                                    rounded-xl
                                    border
                                    border-gray-200
                                    outline-none
                                    resize-none
                                    focus:border-[#FF5A1F]
                                    focus:ring-4
                                    focus:ring-orange-100
                                    transition-all
                                "
                            />

                            {/* BUTTON */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    w-full
                                    h-14
                                    bg-[#FF5A1F]
                                    text-white
                                    rounded-xl
                                    font-medium
                                    hover:opacity-90
                                    transition
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    disabled:opacity-70
                                    cursor-pointer
                                "
                            >

                                {loading ? (
                                    <>
                                        <Loader2
                                            size={18}
                                            className="animate-spin"
                                        />

                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Inquiry"
                                )}

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}