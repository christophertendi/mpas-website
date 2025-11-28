import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, productCategories, filterOptions } from '../data/products';
import './Products.css';

const Products = () => {
  const [filters, setFilters] = useState({
    category: 'All Products'
  });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = filters.category === 'All Products' || product.category === filters.category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setFilters({
      category: 'All Products'
    });
    setSearchTerm('');
  };

  return (
    <div className="products-page">
      <div className="page-hero">
        <div className="container">
          <h1>Product Catalog</h1>
          <p>Proven well test technology solutions from Accuflow</p>
        </div>
      </div>

      <div className="filter-bar">
        <div className="container">
          <div className="filter-content">
            <div className="filter-group">
              <select 
                className="filter-select"
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
              >
                {productCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <input
                type="text"
                className="search-box"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {(filters.category !== 'All Products' || searchTerm) && (
              <button className="reset-btn" onClick={resetFilters}>Reset</button>
            )}
          </div>
        </div>
      </div>

      <section className="catalog-section">
        <div className="container">
          <div className="catalog-header">
            <div className="results-count">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.images && product.images[0] ? (
                    <img 
                      src={`/images/products/${product.images[0]}`} 
                      alt={product.name}
                    />
                  ) : (
                    <div className="product-placeholder">
                      {product.category === '2-Phase Systems' ? '⚙️' : '🔧'}
                    </div>
                  )}
                  {product.id <= 2 && <div className="product-badge">Popular</div>}
                </div>
                <div className="product-info">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-short-desc">{product.shortDesc}</p>
                  <ul className="product-specs">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="product-actions">
                    <Link to={`/products/${product.id}`} className="btn-view">
                      View Details
                    </Link>
                    <a 
                      href={`https://wa.me/6281195521770?text=I'm interested in ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      💬 Inquiry
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-results">
              <p>No products found matching your criteria.</p>
              <button onClick={resetFilters} className="btn btn-primary">Reset Filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
