import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

export default function ProductShowcase() {

    const [isVisible, setIsVisible] = useState(false);

    const [groupedProducts, setGroupedProducts] = useState({});

    const [loading, setLoading] = useState(true);

    const sectionRef = useRef(null);

    const navigate = useNavigate();

    /* =========================================
       INTERSECTION ANIMATION
    ========================================= */

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {

                    setIsVisible(true);

                }

            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {

            observer.observe(sectionRef.current);

        }

        return () => observer.disconnect();

    }, []);

    /* =========================================
       FETCH PRODUCTS
    ========================================= */

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const response = await axios.post(
                "https://babjibestpipes.com/royaldiamond/mobileapis/fetchProducts.php"
            );

            // console.log("Products Response:", response.data);

            if (response.data?.status === true) {

                const allProducts = response.data.data || [];

                // =========================================
                // GROUP PRODUCTS CATEGORY-WISE
                // SHOW ONLY 4 PRODUCTS PER CATEGORY
                // =========================================

                const grouped = {};

                allProducts.forEach((product) => {

                    const category =
                        product.category_name || "Industrial Products";

                    if (!grouped[category]) {

                        grouped[category] = [];

                    }

                    // Limit only 4 products
                    if (grouped[category].length < 4) {

                        grouped[category].push(product);

                    }

                });

                setGroupedProducts(grouped);

            }

        } catch (error) {

            console.error("Fetch Products Error:", error);

        } finally {

            setLoading(false);

        }
    };

    return (

        <section
            ref={sectionRef}
            className="py-24 bg-secondary overflow-hidden"
        >

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                {/* =========================================
                    HEADER
                ========================================= */}

                <div
                    className={`
                        flex
                        flex-col
                        lg:flex-row
                        justify-between
                        gap-8
                        mb-16
                        transition-all
                        duration-1000
                        ease-out
                        ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }
                    `}
                >

                    <div>

                        <p className="text-primary font-medium mb-3 uppercase tracking-widest text-sm">

                            Product Portfolio

                        </p>

                        <h2 className="text-4xl text-white md:text-5xl font-semibold leading-tight">

                            Industrial Products
                            <br />
                            Built For Performance

                        </h2>

                    </div>

                    <div className="flex flex-col gap-6 lg:gap-10 max-w-lg items-start lg:items-end">

                        <p className="max-w-xl text-white/70 lg:text-right">

                            Explore our extensive range of industrial
                            products, pipe fittings, valves, wire
                            solutions and engineering materials
                            manufactured for global industries.

                        </p>

                        <button
                            onClick={() => navigate("/products")}
                            className="
                                group
                                inline-flex
                                text-sm
                                text-white
                                items-center
                                gap-2
                                bg-primary
                                px-7
                                py-3.5
                                rounded-full
                                w-fit
                                transition-all
                                hover:pr-9
                                relative
                                overflow-hidden
                            "
                        >

                            <span className="relative z-10">

                                Explore Products

                            </span>

                            <ArrowRight
                                size={18}
                                className="
                                    text-secondary
                                    relative
                                    z-10
                                    transition-transform
                                    group-hover:translate-x-1
                                "
                            />

                        </button>

                    </div>

                </div>

                {/* =========================================
                    LOADING STATE
                ========================================= */}

                {loading ? (

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            xl:grid-cols-4
                            gap-6
                        "
                    >

                        {[...Array(4)].map((_, index) => (

                            <div
                                key={index}
                                className="
                                    bg-white/5
                                    border
                                    border-white/10
                                    rounded-[32px]
                                    overflow-hidden
                                    animate-pulse
                                "
                            >

                                <div className="h-72 bg-white/10" />

                                <div className="p-6">

                                    <div className="h-5 bg-white/10 rounded mb-4" />

                                    <div className="h-4 bg-white/10 rounded mb-2" />

                                    <div className="h-4 bg-white/10 rounded w-2/3" />

                                    <div className="h-12 bg-white/10 rounded-full mt-6" />

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    <div className="space-y-20">

                        {Object.keys(groupedProducts).map(
                            (category, categoryIndex) => (

                                <div key={categoryIndex}>

                                    {/* =========================================
                                        PRODUCT GRID
                                    ========================================= */}

                                    <div
                                        className="
                                            grid
                                            md:grid-cols-2
                                            xl:grid-cols-4
                                            gap-6
                                        "
                                    >

                                        {groupedProducts[category].map(
                                            (product, index) => {

                                                const productImage =
                                                    product.images &&
                                                        product.images.length > 0
                                                        ? product.images[0].image
                                                        : "https://placehold.co/600x400/e5e7eb/6b7280?text=No+Image";

                                                return (

                                                    <div
                                                        key={product.id}
                                                        style={{
                                                            transitionDelay: `${index * 100}ms`,
                                                        }}
                                                        className={`
                                                            transition-all
                                                            duration-700
                                                            ease-out
                                                            ${isVisible
                                                                ? "opacity-100 translate-y-0 scale-100"
                                                                : "opacity-0 translate-y-20 scale-95"
                                                            }
                                                        `}
                                                    >

                                                        <ProductCard
                                                            product={{
                                                                id: product.id,

                                                                title:
                                                                    product.pro_name ||
                                                                    "Industrial Product",

                                                                description:
                                                                    product.description?.trim()
                                                                        ? product.description
                                                                        : "Premium quality industrial product for infrastructure and engineering applications.",

                                                                image: productImage,

                                                                category:
                                                                    product.category_name ||
                                                                    "Industrial",

                                                                bestselling:
                                                                    product.bestselling,

                                                                latest:
                                                                    product.latest,
                                                            }}
                                                        />

                                                    </div>

                                                );
                                            }
                                        )}

                                    </div>

                                </div>
                            )
                        )}

                    </div>

                )}

            </div>

        </section>
    );
}