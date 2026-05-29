import React, { useState } from "react";
import {
    ArrowUpRight,
    Sparkles,
    Star,
} from "lucide-react";

import QuoteModal from "../quotation/QuoteModal";

export default function ProductCard({ product }) {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-4xl
                    bg-white
                    border
                    border-white/10
                    shadow-sm
                    hover:shadow-2xl
                    transition-all
                    duration-500
                    flex
                    flex-col
                    h-full
                "
            >

                {/* =========================================
                    IMAGE SECTION
                ========================================= */}

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
                            h-64
                            w-full
                            object-contain
                            p-6
                            transition-transform
                            duration-700
                            group-hover:scale-110
                        "
                    />

                    {/* Overlay */}

                    <div
                        className="
                            absolute
                            inset-0
                            bg-linear-to-t
                            from-black/40
                            via-transparent
                            to-transparent
                            opacity-0
                            group-hover:opacity-100
                            transition-all
                            duration-500
                        "
                    />

                    {/* =========================================
                        BADGES
                    ========================================= */}

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">

                        {/* Category */}

                        <span
                            className="
                                bg-primary
                                text-white
                                px-4
                                py-2
                                rounded-full
                                text-xs
                                font-medium
                                shadow-lg
                            "
                        >
                            {product.category}
                        </span>

                        {/* Latest */}

                        {Number(product.latest) === 1 && (
                            <span
                                className="
                                    bg-white
                                    text-secondary
                                    px-3
                                    py-2
                                    rounded-full
                                    text-xs
                                    font-semibold
                                    flex
                                    items-center
                                    gap-1
                                    shadow-md
                                "
                            >
                                <Sparkles size={12} />
                                Latest
                            </span>
                        )}

                        {/* Bestseller */}

                        {Number(product.bestselling) === 1 && (
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
                                    shadow-md
                                "
                            >
                                <Star size={12} />
                                Bestseller
                            </span>
                        )}

                    </div>

                </div>

                {/* =========================================
                    CONTENT
                ========================================= */}

                <div className="p-6 flex flex-col flex-1">

                    {/* Top */}

                    <div className="flex justify-between items-start gap-4 mb-4">

                        {/* Product Title */}

                        <h3
                            className="
                                text-2xl
                                font-semibold
                                text-secondary
                                leading-snug
                                line-clamp-2
                                transition-colors
                                duration-300
                                group-hover:text-primary
                            "
                        >
                            {product.title}
                        </h3>

                        {/* Arrow Button */}

                        <button
                            onClick={() => setOpenModal(true)}
                            className="
                                w-11
                                h-11
                                rounded-full
                                bg-secondary
                                text-white
                                flex
                                items-center
                                justify-center
                                shrink-0
                                transition-all
                                duration-300
                                hover:bg-primary
                                hover:rotate-45
                                cursor-pointer
                            "
                        >
                            <ArrowUpRight size={18} />
                        </button>

                    </div>

                    {/* Description */}

                    <p
                        className="
                            text-gray-600
                            leading-relaxed
                            line-clamp-2
                            flex-1
                        "
                    >
                        {product.description}
                    </p>

                    {/* =========================================
                        BUTTON
                    ========================================= */}

                    {/* <button
                        onClick={() => setOpenModal(true)}
                        className="
                            mt-7
                            h-13
                            rounded-full
                            bg-secondary
                            text-white
                            font-medium
                            flex
                            items-center
                            justify-center
                            gap-2
                            transition-all
                            duration-300
                            hover:bg-primary
                            hover:shadow-lg
                            cursor-pointer
                        "
                    >
                        Get A Quote

                        <ArrowUpRight
                            size={17}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                            "
                        />
                    </button> */}

                </div>

                {/* Hover Border */}

                <div
                    className="
                        absolute
                        inset-0
                        rounded-[32px]
                        border
                        border-transparent
                        group-hover:border-primary/20
                        transition-all
                        duration-500
                        pointer-events-none
                    "
                />

            </div>

        </>
    );
}