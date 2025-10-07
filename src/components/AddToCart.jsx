import React from "react";

function AddToCart() {
  return (
    <div className="flex items-center">
      <input
        type="number"
        defaultValue={1}
        min={1}
        className="text-gray-600 w-16 px-3 py-2 mr-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-16 py-2 rounded-md">
        ADD TO CART
      </button>
    </div>
  );
}

export default AddToCart;
