import axios from "axios";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {
            fullname,
            email,
            phone,
            subject,
            message,
        } = formData;

        if (!fullname.trim()) {
            toast.error("Please enter your full name");
            return;
        }

        if (!email.trim()) {
            toast.error("Please enter your email address");
            return;
        }

        if (!phone.trim()) {
            toast.error("Please enter your phone number");
            return;
        }

        if (!message.trim()) {
            toast.error("Please enter your message");
            return;
        }

        const toastId = toast.loading(
            "Submitting your enquiry..."
        );

        try {
            setLoading(true);

            console.log("Submitting form:", formData);

            const response = await axios.post(
                "https://babjibestpipes.com/royaldiamond/mobileapis/addContactForm.php",
                {
                    name: fullname,
                    email,
                    phone,
                    subject,
                    message,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("API Response:", response.data);

            if (
                response?.data?.status === true ||
                response?.data?.status === 1 ||
                response?.data?.status === "1" ||
                response?.data?.success === true
            ) {
                toast.success(
                    "Thank you! Your inquiry has been submitted successfully. Our team will contact you shortly.",
                    {
                        id: toastId,
                    }
                );

                setFormData({
                    fullname: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            } else {
                toast.error(
                    response?.data?.message ||
                    "Unable to submit your inquiry. Please try again.",
                    {
                        id: toastId,
                    }
                );
            }
        } catch (error) {
            console.error("Contact Form Error:", error);

            toast.error(
                error?.response?.data?.message ||
                "Server error. Please try again later.",
                {
                    id: toastId,
                }
            );
        } finally {
            setLoading(false);
        }
    };

    
    return (
        <>
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
                    <div>
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="w-full h-14 px-5 rounded-xl border border-gray-200 outline-none focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100 transition-all"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
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
                    </div>

                    {/* Phone */}

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
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
                    </div>

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter the subject of your message"
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
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your requirements..."
                            required
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
                    </div>

                    {/* BUTTON */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 bg-[#FF5A1F] text-white rounded-xl font-medium hover:opacity-90 transition flex items-center justify-center cursor-pointer gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
        </>
    )
}

export default ContactForm
