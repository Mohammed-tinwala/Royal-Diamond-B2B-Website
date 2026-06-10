import React, { useState } from "react";
import { X } from "lucide-react";
import QuoteForm from "./QuoteForm";
import toast from "react-hot-toast";
import axios from "axios";

export default function QuoteModal({ isOpen, onClose, product, setOpenModal }) {


    if (!isOpen) return null;

    return (
        <div
            className="
                fixed
                inset-0
                z-999
                flex
                items-center
                justify-center
                bg-black/60
                backdrop-blur-sm
                p-4
            "
        >

            {/* Modal Box */}

            <div
                className="
                    relative
                    bg-white
                    w-full
                    max-w-3xl
                    rounded-4xl
                    overflow-hidden
                    shadow-2xl
                    max-h-[90vh]
                    overflow-y-auto
                "
            >

                {/* Close Button */}

                <button
                    onClick={onClose}
                    className="
                        absolute
                        top-5
                        right-5
                        w-11
                        h-11
                        rounded-full
                        bg-gray-100
                        hover:bg-gray-200
                        flex
                        items-center
                        justify-center
                        transition
                        z-10
                    "
                >
                    <X size={20} />
                </button>

                {/* Content */}

                <div className="grid lg:grid-cols-2">

                    {/* Product Side */}

                    <div className="bg-[#032850] text-white p-8 lg:p-10">

                        <span
                            className="
                                inline-block
                                px-4
                                py-2
                                rounded-full
                                bg-[#FF5A1F]
                                text-sm
                                font-medium
                            "
                        >
                            Product Inquiry
                        </span>

                        <h2 className="text-3xl font-semibold mt-6 leading-tight">
                            Request a Custom Quote
                        </h2>

                        <p className="mt-4 text-white/70 leading-relaxed">
                            Fill in your details and our team will
                            contact you with pricing, specifications
                            and availability.
                        </p>

                        {/* Product Card */}

                        <div
                            className="
                                mt-10
                                bg-white/10
                                border
                                border-white/10
                                rounded-3xl
                                p-5
                                backdrop-blur-md
                            "
                        >

                            <img
                                src={product?.image}
                                alt={product?.title}
                                className="
                                    w-full
                                    h-52
                                    object-cover
                                    rounded-2xl
                                "
                            />

                            <h3 className="text-xl font-semibold mt-5">
                                {product?.title}
                            </h3>

                            <p className="text-white/70 text-sm mt-3 leading-relaxed">
                                {product?.description}
                            </p>

                        </div>

                    </div>

                    {/* Form Side */}

                    <div className="p-8 lg:p-10">

                        <QuoteForm product={product} isOpen={isOpen} setOpenModal={setOpenModal} />

                    </div>

                </div>

            </div>

        </div>
    );
}