import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import { PRODUCTS } from '../data/products';

const Home = () => {
  const [keyword, setKeyword] = useState('');

  const filteredProducts = useMemo(() => {
    const lower = keyword.toLowerCase();
    return PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(lower)
    );
  }, [keyword]);

  return (
    <div>
      <SearchBar keyword={keyword} onChange={setKeyword} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
