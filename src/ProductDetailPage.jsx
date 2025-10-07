import React from "react";
import AddToCart from "./components/AddToCart";

function ProductDetailPage() {
  return (
    <div className="bg-gray-100 flex px-4 py-12 h-screen">
      <div className="bg-white flex py-6 px-8 gap-3 flex-shrink">
        <img
          className="w-1/2 object-cover"
          src="https://m.media-amazon.com/images/I/610V6Qae3pL._UF894,1000_QL80_.jpg"
          alt="Black Printed Coffee Mug"
        />
        <div className="w-1/2 px-8">
          <h1 className="text-5xl font-semibold text-gray-500 mb-10">
            Black Printed Coffee Mug
          </h1>
          <p className="text-3xl font-bold text-gray-600 mb-4">$15.00</p>
          <p className="text-gray-500 mb-8 font-semibold text-2xl">
            Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
            consectetur adipisci velit, sed quia non incidunt lores ta porro
            ame. numquam eius modi tempora incidunt lores ta porro ame.
          </p>

          <AddToCart />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
