import React, { useState } from "react";
import ProductDetail from "./ProductDetailPage";
import Filter from "./components/Filter";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination"
import products from "./Products";

function HomePage() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');

  let filteredProducts = products.filter(function (item) {
    return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  if (sort === 'title') {
    filteredProducts = filteredProducts.slice().sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sort === 'price-asc') {
    filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
  }

  function handleSearch(newQuery) {
    setQuery(newQuery);
  }

  function handleSort(sortType) {
    setSort(sortType);
  }

  return (
    <div>
      <div className="bg-gray-100 py-10 px-10 sm:px-40 min-h-screen">
        <div className="bg-white flex flex-col p-12">
          <Filter query={query} sort={sort} onSearch={handleSearch} onSort={handleSort} />
          <ProductGrid products={filteredProducts} />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
