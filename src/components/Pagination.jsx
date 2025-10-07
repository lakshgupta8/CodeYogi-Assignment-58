import React from "react";

function Pagination() {
  return (
    <div className="flex mt-8 gap-1">
      <button className="bg-white text-center text-red-600 border-red-600 border-1 h-8 w-8 focus:text-white focus:bg-red-600">
        1
      </button>
      <button className="bg-white text-center text-red-600 border-red-600 border-1 h-8 w-8 focus:text-white focus:bg-red-600">
        2
      </button>
      <button className="bg-white text-center text-red-600 border-red-600 border-1 h-8 w-8 focus:text-white focus:bg-red-600">
        &raquo;
      </button>
    </div>
  );
}

export default Pagination;
