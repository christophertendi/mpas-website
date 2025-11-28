import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = React.useState(0);

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h2>Product not found</h2>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-detail-page">
      <section className="product-detail-section">
        <div className="container">
          <div className="product-detail-grid">
            {/* Gallery */}
            <div className="product-gallery">
              <div className="main-product-image">
                {product.images && product.images[selectedImage] ? (
                  <img 
                    src={`/images/products/${product.images[selectedImage]}`} 
                    alt={product.name}
                  />
                ) : (
                  <div className="product-image-placeholder">
                    {product.category === '2-Phase Systems' ? '⚙️' : '🔧'}
                  </div>
                )}
              </div>
              <div className="thumbnail-grid">
                {product.images && product.images.map((img, i) => (
                  <div 
                    key={i} 
                    className={`thumbnail ${i === selectedImage ? 'active' : ''}`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <img 
                      src={`/images/products/${img}`} 
                      alt={`${product.name} - View ${i + 1}`}
                    />
                  </div>
                ))}
                {/* Fill remaining thumbnails with placeholders if less than 4 images */}
                {product.images && [...Array(Math.max(0, 4 - product.images.length))].map((_, i) => (
                  <div key={`placeholder-${i}`} className="thumbnail">
                    <div className="thumbnail-placeholder">
                      {product.category === '2-Phase Systems' ? '⚙️' : '🔧'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="product-details">
              <div className="product-category-badge">{product.category}</div>
              <h1>{product.name}</h1>
              
              {/* Configuration badges for 2-Phase SR & LT */}
              {product.id === 1 && (
                <div className="configuration-badges">
                  <span className="config-badge sr">SR - Standard Configuration</span>
                  <span className="config-badge lt">LT - Compact Configuration</span>
                </div>
              )}
              
              <p className="product-intro">{product.description}</p>

              {/* Features */}
              <div className="detail-section">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="detail-section">
                <h3>Benefits</h3>
                <ul className="benefits-list">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table */}
              <div className="detail-section">
                <h3>Technical Specifications</h3>
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key}>
                        <th>{key}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Download Section */}
              <div className="download-section">
                <h4>Download Documents</h4>
                <div className="download-links">
                  {/* <a href="#" className="download-link">
                    📄 Technical Data Sheet (PDF)
                  </a> */}
                  <a 
                    href="/accuflow brochure new_250610_145406.pdf" 
                    className="download-link"
                    download="Accuflow_Product_Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 Accuflow Brochure  (PDF)
                  </a>
                  {/* <a href="#" className="download-link">
                    📄 Installation Guide (PDF)
                  </a> */}
                </div>
              </div>

              {/* Actions */}
              <div className="product-detail-actions">
                <a 
                  href={`https://wa.me/6281195521770?text=I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  💬 WhatsApp Inquiry
                </a>
                <Link to="/contact" className="btn btn-secondary btn-large">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h2>Related Products</h2>
              <div className="related-grid">
                {relatedProducts.map(relatedProduct => (
                  <div 
                    key={relatedProduct.id} 
                    className="related-card"
                    onClick={() => navigate(`/products/${relatedProduct.id}`)}
                  >
                    <div className="related-image">
                      {relatedProduct.images && relatedProduct.images[0] ? (
                        <img 
                          src={`/images/products/${relatedProduct.images[0]}`} 
                          alt={relatedProduct.name}
                        />
                      ) : (
                        <>{relatedProduct.category === '2-Phase Systems' ? '⚙️' : '🔧'}</>
                      )}
                    </div>
                    <div className="related-info">
                      <div className="product-category">{relatedProduct.category}</div>
                      <h4>{relatedProduct.name}</h4>
                      <p>{relatedProduct.shortDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
