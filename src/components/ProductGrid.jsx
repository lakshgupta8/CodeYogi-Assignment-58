import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
    return (
        <div className="flex flex-wrap gap-10 md:gap-18 my-4">
            {products.map(function (item) {
              return (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  image={item.image}
                  isSale={item.isSale}
                />
              );
            })}
          </div>
    );
}

export default ProductGrid;