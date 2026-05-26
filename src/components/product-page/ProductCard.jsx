import React from "react";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
    return (
        <div
            className="
      group
      bg-white
      rounded-[32px]
      overflow-hidden
      border
      border-gray-100
      hover:shadow-xl
      transition-all
      duration-500
      flex
      flex-col
    "
        >
            {/* Image */}

            <div className="relative overflow-hidden h-72">

                <img
                    src={product.image}
                    alt={product.title}
                    className="
            w-full
            h-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
                />

                <div className="absolute top-4 left-4">

                    <span
                        className="
            bg-[#FF5A1F]
            text-white
            px-4
            py-2
            rounded-full
            text-xs
            font-medium
          "
                    >
                        {product.label}
                    </span>

                </div>

            </div>

            {/* Content */}

            <div className="p-7 flex flex-col flex-1">

                <span className="text-[#FF5A1F] text-sm font-medium">
                    {product.category}
                </span>

                <h3 className="text-2xl font-semibold mt-3">
                    {product.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed flex-1">
                    {product.description}
                </p>

                <button
                    className="
          mt-6
          h-12
          rounded-full
          bg-[#032850]
          text-white
          flex
          items-center
          justify-center
          gap-2
          hover:bg-[#FF5A1F]
          transition
        "
                >
                    Get A Quote

                    <ArrowRight size={16} />
                </button>

            </div>

        </div>
    );
}