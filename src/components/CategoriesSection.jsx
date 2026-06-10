import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import axios from "axios";

export default function CategoriesSection() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.post(
                "https://babjibestpipes.com/royaldiamond/mobileapis/fetchCategories.php"
            );

            if (response.data?.status) {
                // console.log("Fetched Categories:", response.data.data);
                setCategories(response.data.data || []);
            }
        } catch (error) {
            console.error("Category Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="pb-12">

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* Header */}

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">

                    <div>
                        <span className="text-secondary font-medium">
                            Product Categories
                        </span>

                        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                            Explore Our
                            <br />
                            Industrial Portfolio
                        </h2>
                    </div>

                    <p className="text-gray-600 max-w-lg">
                        Royal Diamond supplies a wide range of industrial
                        valves, fittings, couplings, hoses and infrastructure
                        products across Africa and the Middle East.
                    </p>

                </div>

                {/* Loading State */}

                {loading ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="h-[320px] rounded-[32px] bg-gray-100 animate-pulse"
                            />
                        ))}

                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {categories.slice(0, 6).map((category) => (
                            <div
                                key={category.id}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[32px]
                                    h-[320px]
                                    cursor-pointer
                                "
                            >

                                {/* Image */}

                                <img
                                    src={category.image}
                                    alt={category.label}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.src =
                                            "https://placehold.co/600x400/e5e7eb/6b7280?text=Category";
                                    }}
                                    className="
                                        absolute
                                        inset-0
                                        w-full
                                        h-full
                                        object-cover
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
                                        bg-gradient-to-t
                                        from-black/90
                                        via-black/40
                                        to-transparent
                                    "
                                />

                                {/* Content */}

                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        right-0
                                        p-6 md:p-8
                                        text-white
                                    "
                                >

                                    <span
                                        className="
                                            inline-block
                                            mb-3
                                            px-3
                                            py-1
                                            rounded-full
                                            bg-secondary
                                            text-xs
                                            font-medium
                                        "
                                    >
                                        Category
                                    </span>

                                    <div className="flex items-end justify-between gap-4">

                                        <h3 className="text-lg md:text-xl font-semibold leading-snug max-w-[220px]">
                                            {category.label}
                                        </h3>

                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-full
                                                bg-white
                                                text-primary
                                                flex
                                                items-center
                                                justify-center
                                                shrink-0
                                                transition
                                                group-hover:bg-secondary
                                                group-hover:text-white
                                            "
                                        >
                                            <ArrowUpRight size={20} />
                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>

        </section>
    );
}