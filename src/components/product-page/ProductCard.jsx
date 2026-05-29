import React, { useState } from "react";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import QuoteModal from "../quotation/QuoteModal";

export default function ProductCard({ product }) {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div
                className="
                group
                relative
                bg-white
                rounded-[32px]
                overflow-hidden
                border
                border-gray-100
                hover:border-transparent
                hover:shadow-2xl
                transition-all
                duration-500
                flex
                flex-col
                h-full
            "
            >

                {/* Image Section */}

                <div className="relative overflow-hidden bg-[#f8fafc]">

                    {/* Product Image */}

                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        onError={(e) => {
                            e.target.src =
                                "https://placehold.co/600x400/e5e7eb/6b7280?text=No+Image";
                        }}
                        className="
                        w-full
                        h-72
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
                    />

                    {/* Overlay Gradient */}

                    <div
                        className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/40
                        via-transparent
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition
                    "
                    />

                    {/* Top Badges */}

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">

                        {/* Category Badge */}

                        <span
                            className="
                            bg-[#FF5A1F]
                            text-white
                            px-4
                            py-2
                            rounded-full
                            text-xs
                            font-medium
                            backdrop-blur-sm
                        "
                        >
                            {product.category}
                        </span>

                        {/* Latest Badge */}

                        {product.latest === 1 && (
                            <span
                                className="
                                bg-white/90
                                text-[#032850]
                                px-3
                                py-2
                                rounded-full
                                text-xs
                                font-semibold
                                flex
                                items-center
                                gap-1
                            "
                            >
                                <Sparkles size={12} />
                                Latest
                            </span>
                        )}

                        {/* Bestseller Badge */}

                        {product.bestselling === 1 && (
                            <span
                                className="
                                bg-yellow-400
                                text-black
                                px-3
                                py-2
                                rounded-full
                                text-xs
                                font-semibold
                                flex
                                items-center
                                gap-1
                            "
                            >
                                <Star size={12} />
                                Bestseller
                            </span>
                        )}

                    </div>

                </div>

                {/* Content */}

                <div className="p-7 flex flex-col flex-1">

                    {/* Product Title */}

                    <h3
                        className="
                        text-2xl
                        font-semibold
                        leading-snug
                        text-[#032850]
                        line-clamp-2
                        min-h-[64px]
                    "
                    >
                        {product.title}
                    </h3>

                    {/* Description */}

                    <p
                        className="
                        text-gray-600
                        mt-4
                        leading-relaxed
                        flex-1
                        line-clamp-4
                        min-h-[110px]
                    "
                    >
                        {product.description}
                    </p>

                    {/* Bottom Section */}

                    <div className="mt-7 flex items-center justify-between gap-4">

                        {/* Quote Button */}

                        <button
                            onClick={() => setOpenModal(true)}
                            className="
                            flex-1
                            h-13
                            rounded-full
                            bg-[#032850]
                            text-white
                            flex
                            items-center
                            justify-center
                            gap-2
                            hover:bg-[#FF5A1F]
                            transition-all
                            duration-300
                            cursor-pointer
                            font-medium
                        "
                        >
                            Get A Quote

                            <ArrowRight
                                size={17}
                                className="
                                transition-transform
                                group-hover:translate-x-1
                            "
                            />
                        </button>

                        {/* Arrow Button */}

                        {/* <button
                        className="
                            w-13
                            h-13
                            rounded-full
                            border
                            border-gray-200
                            flex
                            items-center
                            justify-center
                            text-[#032850]
                            hover:bg-[#032850]
                            hover:text-white
                            transition-all
                            duration-300
                            shrink-0
                            cursor-pointer
                        "
                    >
                        <ArrowRight size={18} />
                    </button> */}

                    </div>

                </div>
            </div>

            <QuoteModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                product={product}
            />

        </>
    );
}