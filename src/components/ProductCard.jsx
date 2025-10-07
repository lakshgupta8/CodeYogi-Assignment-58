import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ title, category, price, originalPrice, image, isSale }) {
  return (
    <Link to="/product">
      <div className="bg-white">
        <div className="relative pt-6">
          <img
            src={image}
            alt={title}
            className="w-80 h-80 object-contain bg-gray-100 mb-3"
          />
          {isSale == "true" && (
            <span className="absolute top-2 right-0 rounded-full bg-red-500 text-black font-bold text-xs px-1 py-2.5 z-10">
              Sale!
            </span>
          )}
        </div>

        <p className="text-sm text-gray-400">{category}</p>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <div className="flex text-red-500">☆☆☆☆☆</div>
        <div className="flex gap-2 mt-1 mb-8">
          {originalPrice && (
            <span className="text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-red-500 font-bold">${price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
