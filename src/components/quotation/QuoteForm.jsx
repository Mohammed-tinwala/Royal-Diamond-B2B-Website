import React, { useState } from "react";

export default function QuoteForm({ product }) {

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        quantity: "",
        message: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log({
            product,
            customer: formData
        });

        alert("Quotation Request Submitted");

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
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
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
                        name="company"
                        value={formData.company}
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
                        Email Address
                    </label>

                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
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
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your contact number"
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
                        Quantity Required
                    </label>

                    <input
                        type="text"
                        name="quantity"
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
                        Additional Details
                    </label>

                    <textarea
                        rows="4"
                        name="message"
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
                    className="
                        w-full
                        h-14
                        rounded-2xl
                        bg-[#032850]
                        hover:bg-[#FF5A1F]
                        text-white
                        font-medium
                        transition
                    "
                >
                    Submit Quotation Request
                </button>

            </form>

        </div>
    );
}