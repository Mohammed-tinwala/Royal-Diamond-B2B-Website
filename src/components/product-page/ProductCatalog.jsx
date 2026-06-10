import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductCatalog() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {

        try {
            const response = await axios.post(
                "https://babjibestpipes.com/royaldiamond/mobileapis/fetchProducts.php"
            );

            if (response.data?.status === true) {
                setProducts(response.data.data || []);
            } else {
                setProducts([]);
            }

        } catch (error) {
            console.error("Products Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    /* =========================
       FILTER PRODUCTS
    ========================= */

    const filteredProducts = useMemo(() => {

        return products.filter((product) => {

            const productName =
                product.pro_name?.toLowerCase() || "";

            return productName.includes(
                searchTerm.toLowerCase()
            );

        });

    }, [products, searchTerm]);

    return (
        <section className="py-12 pt-24 lg:pt-32 bg-[#f8fafc] min-h-screen">
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* =========================
                    HEADER
                ========================= */}
                <div className="mb-4 md:mb-6 lg:mb-8">

                    <span className="text-[#FF5A1F] font-medium">
                        Product Catalog
                    </span>

                    <h2 className="text-4xl md:text-6xl font-semibold mt-3 leading-tight">
                        Industrial Products
                        <br />
                        For Every Requirement
                    </h2>

                    <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
                        Explore our premium collection of industrial valves,
                        fittings, couplings, marine hardware and oilfield
                        equipment supplied across Africa and the Middle East.
                    </p>

                </div>

                {/* =========================
                    SEARCH BAR
                ========================= */}

                <div className="mb-14">
                    <div className="relative max-w-2xl">

                        <Search
                            size={20}
                            className="
                                absolute
                                left-5
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
                            "
                        />

                        <input
                            type="text"
                            placeholder="Search industrial products..."
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                            className="
                                w-full
                                h-16
                                rounded-2xl
                                bg-white
                                border
                                border-gray-200
                                pl-14
                                pr-5
                                text-gray-700
                                outline-none
                                focus:border-[#FF5A1F]
                                focus:ring-4
                                focus:ring-orange-100
                                transition-all
                            "
                        />

                    </div>

                    {/* Search Result Count */}

                    {!loading && (
                        <p className="mt-4 text-gray-500 text-sm">

                            Showing{" "}
                            <span className="font-semibold text-[#032850]">
                                {filteredProducts.length}
                            </span>{" "}
                            products

                        </p>
                    )}

                </div>

                {/* =========================
                    LOADING STATE
                ========================= */}

                {loading ? (

                    <div
                        className="
                            grid
                            sm:grid-cols-2
                            lg:grid-cols-3
                            xl:grid-cols-4
                            gap-8
                        "
                    >

                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="
                                    bg-white
                                    rounded-[28px]
                                    overflow-hidden
                                    animate-pulse
                                    border
                                    border-gray-100
                                "
                            >

                                <div className="h-65 bg-gray-200" />

                                <div className="p-6">

                                    <div className="h-5 bg-gray-200 rounded mb-4" />

                                    <div className="h-4 bg-gray-200 rounded mb-2" />

                                    <div className="h-4 bg-gray-200 rounded w-2/3" />

                                    <div className="h-12 bg-gray-200 rounded-full mt-6" />

                                </div>

                            </div>
                        ))}

                    </div>

                ) : filteredProducts.length > 0 ? (

                    <div
                        className="
                            grid
                            sm:grid-cols-2
                            lg:grid-cols-3
                            xl:grid-cols-4
                            gap-8
                        "
                    >

                        {filteredProducts.map((product) => {

                            const productImage =
                                product.images &&
                                    product.images.length > 0
                                    ? product.images[0].image
                                    : "https://placehold.co/600x400/e5e7eb/6b7280?text=No+Image";

                            return (

                                <ProductCard
                                    key={product.id}
                                    product={{
                                        id: product.id,

                                        title:
                                            product.pro_name ||
                                            "Industrial Product",

                                        description:
                                            product.description?.trim()
                                                ? product.description
                                                : "Premium quality industrial product for oil, gas, marine and infrastructure applications.",

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

                            );
                        })}

                    </div>

                ) : (

                    /* =========================
                        EMPTY STATE
                    ========================= */

                    <div
                        className="
                            bg-white
                            rounded-[32px]
                            py-20
                            px-6
                            text-center
                        "
                    >

                        <h3 className="text-3xl font-semibold text-[#032850]">
                            No Products Found
                        </h3>

                        <p className="mt-4 text-gray-600 max-w-lg mx-auto">
                            We couldn't find any products matching
                            your search. Try using different keywords.
                        </p>

                    </div>

                )}

            </div>

        </section>
    );
}