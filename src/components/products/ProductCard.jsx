import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
    return (
        <div className="group relative overflow-hidden rounded-4xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">

            <div className="overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain transition duration-700 group-hover:scale-110"
                />
            </div>

            <div className="p-6">

                <div className="flex justify-between items-start mb-4">

                    <h3 className="text-xl font-semibold">
                        {product.title}
                    </h3>

                    <button className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
                        <ArrowUpRight size={18} />
                    </button>

                </div>

                <p className="text-gray-600 leading-relaxed">
                    {product.description}
                </p>

            </div>
        </div>
    );
}