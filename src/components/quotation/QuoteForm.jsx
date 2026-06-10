import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Loader2 } from "lucide-react";

export default function QuoteForm({ product, isOpen, setOpenModal }) {

    // console.log("QuoteForm Rendered for Product:", product?.title);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        quantity: "",
        message: "",
    })

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fullName, email, phone, companyName, quantity, message } = formData;

        if (!fullName.trim()) {
            toast.error("Please enter your full name.");
            return;
        }

        if (!email.trim()) {
            toast.error("Please enter your email.");
            return;
        }

        if (!phone.trim()) {
            toast.error("Please enter your phone number.");
            return;
        }

        if (!quantity.trim()) {
            toast.error("Please enter the quantity.");
            return;
        }

        if (!message.trim()) {
            toast.error("Please enter a message.");
            return;
        }

        const toastId = toast.loading("Submitting your quote request...");

        try {
            setLoading(true);
            console.log("Form Data Submitted:", formData);

            // Simulate API call
            const response = await axios.post("https://babjibestpipes.com/royaldiamond/mobileapis/submitProductEnquiry.php",
                {
                    name: fullName,
                    email,
                    phone,
                    company_name: companyName,
                    quantity,
                    message,
                    product_name: product?.title || "N/A"
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
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
                    "Thank you! Your quote request has been submitted successfully. Our team will contact you shortly.",
                    {
                        id: toastId,
                    }
                );

                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    companyName: "",
                    quantity: "",
                    message: "",
                });

                setOpenModal(false);
            } else {
                toast.error(
                    response?.data?.message ||
                    "Unable to submit your quote request. Please try again.",
                    {
                        id: toastId,
                    }
                );
            }
        } catch (error) {
            console.error("Quote Submission Error:", error);
            toast.error(
                "An error occurred while submitting your quote request. Please try again.",
                {
                    id: toastId,
                }
            );
        } finally {
            setLoading(false);
        }

    };

    return (
        <div>

            <h3 className="text-3xl font-semibold text-[#032850]">
                Get a Quote
            </h3>

            <p className="mt-3 text-gray-600">
                Product:{" "}
                <span className="font-medium">
                    {product?.title}
                </span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
            >

                {/* Name */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="
                            mt-2
                            w-full
                            h-14
                            rounded-2xl
                            border
                            border-gray-200
                            px-5
                            outline-none
                            focus:border-[#FF5A1F]
                        "
                    />

                </div>

                {/* Company */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Company Name
                    </label>

                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="
                            mt-2
                            w-full
                            h-14
                            rounded-2xl
                            border
                            border-gray-200
                            px-5
                            outline-none
                            focus:border-[#FF5A1F]
                        "
                    />

                </div>

                {/* Email */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="
                            mt-2
                            w-full
                            h-14
                            rounded-2xl
                            border
                            border-gray-200
                            px-5
                            outline-none
                            focus:border-[#FF5A1F]
                        "
                    />

                </div>

                {/* Phone */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your contact number"
                        className="
                            mt-2
                            w-full
                            h-14
                            rounded-2xl
                            border
                            border-gray-200
                            px-5
                            outline-none
                            focus:border-[#FF5A1F]
                        "
                    />

                </div>

                {/* Quantity */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Quantity Required <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="number"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Example: 100 Pieces"
                        className="
                            mt-2
                            w-full
                            h-14
                            rounded-2xl
                            border
                            border-gray-200
                            px-5
                            outline-none
                            focus:border-[#FF5A1F]
                        "
                    />

                </div>

                {/* Message */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Message <span className="text-red-500">*</span>
                    </label>

                    <textarea
                        rows="4"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your requirements..."
                        className="
                            mt-2
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            px-5
                            py-4
                            outline-none
                            resize-none
                            focus:border-[#FF5A1F]
                        "
                    />
                </div>

                {/* Submit */}
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
                        "Submit Quote"
                    )}
                </button>

            </form>

        </div>
    );
}