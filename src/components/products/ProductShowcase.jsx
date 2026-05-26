import React from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";

export default function ProductShowcase() {
    const featuredProduct = products[0];
    const remainingProducts = products;

    return (
        <section className="py-12 bg-secondary">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                {/* Header */}

                <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16">

                    <div>
                        <p className="text-primary font-medium mb-3">
                            Product Portfolio
                        </p>

                        <h2 className="text-4xl text-white md:text-5xl font-semibold leading-tight">
                            Industrial Products
                            <br />
                            Built For Performance
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6 lg:gap-10 max-w-lg items-start lg:items-end">

                        <p className="max-w-xl text-white/70">
                            Explore our extensive range of oilfield equipment,
                            industrial components, marine supplies and engineering
                            products sourced from trusted global manufacturers.
                        </p>

                        <button className="inline-flex text-sm text-white items-center gap-2 bg-primary px-6 py-3 rounded-full w-fit">
                            Explore Products
                            <ArrowRight size={18} className="text-secondary" />
                        </button>
                    </div>

                </div>

                {/* Featured Product */}

                {/* <div className="group relative overflow-hidden rounded-[40px] bg-[#032850] text-white mb-10">

                    <div className="grid lg:grid-cols-2">

                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">

                            <span className="text-[#FF5A1F] mb-4">
                                Featured Category
                            </span>

                            <h3 className="text-4xl lg:text-5xl font-semibold mb-6">
                                {featuredProduct.title}
                            </h3>

                            <p className="text-white/70 max-w-lg mb-8">
                                {featuredProduct.description}
                            </p>

                            <button className="inline-flex items-center gap-2 bg-[#FF5A1F] px-6 py-3 rounded-full w-fit">
                                Explore Products
                                <ArrowRight size={18} />
                            </button>

                        </div>

                        <div>
                            <img
                                src={featuredProduct.image}
                                alt={featuredProduct.title}
                                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>

                    </div>

                </div> */}

                {/* Product Grid */}

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {remainingProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}