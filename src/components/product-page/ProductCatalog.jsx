import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";

export default function ProductCatalog() {
    return (
        <section className="py-12">

            <div className="max-w-360 mx-auto px-6 lg:px-12">

                <div className="mb-14">

                    <span className="text-[#FF5A1F] font-medium">
                        Product Catalog
                    </span>

                    <h2 className="text-4xl md:text-6xl font-semibold mt-3">
                        Industrial Products
                        For Every Requirement
                    </h2>

                </div>

                <div
                    className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
        "
                >

                    {products.map((product) => (
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