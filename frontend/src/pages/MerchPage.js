import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { ExternalLink, ShoppingCart } from "lucide-react";

const MerchPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const merchItems = [
    {
      title: "Creaks Collector's Box",
      description: "Limited to 1000 units",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1704123298707-d68f96152464",
      category: "Collector's Edition"
    },
    {
      title: "Samorost 3 Soundtrack Vinyl",
      description: "Original soundtrack by Floex",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1673350808686-209dc177c898",
      category: "Music"
    },
    {
      title: "Machinarium Art Book",
      description: "Beautiful concept art collection",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1755741503757-6c65894e0d3f",
      category: "Art Book"
    },
    {
      title: "CHUCHEL Plush Toy",
      description: "Soft and cuddly CHUCHEL character",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1637094408647-0d81d08f81b5",
      category: "Toy"
    },
    {
      title: "Botanicula T-Shirt",
      description: "Organic cotton with tree design",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1722223223055-6ff2c5f80d89",
      category: "Apparel"
    },
    {
      title: "Pilgrims Board Game",
      description: "Family-friendly adventure board game",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1601987177651-8edfe6c20009",
      category: "Board Game"
    }
  ];

  return (
    <div className="merch-page">
      <Header />
      <main className="main-content">
        <div className="merch-content">
          <section className="merch-header">
            <h1 className="page-title">Official Merchandise</h1>
            <p className="page-description">
              Discover exclusive Amanita Design merchandise, from collector's editions to apparel and accessories.
            </p>
            <a 
              href="https://merch.amanita-design.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="external-store-link"
            >
              <ExternalLink size={20} />
              Visit Official Store
            </a>
          </section>

          <section className="merch-grid-section">
            <div className="merch-grid">
              {merchItems.map((item, index) => (
                <div key={index} className="merch-card">
                  <div className="merch-image-container">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="merch-image"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1697851429014-8b5f5fb76313';
                      }}
                    />
                    <div className="merch-category">{item.category}</div>
                  </div>
                  <div className="merch-info">
                    <h3 className="merch-title">{item.title}</h3>
                    <p className="merch-description">{item.description}</p>
                    <div className="merch-footer">
                      <span className="merch-price">{item.price}</span>
                      <button className="add-to-cart-btn">
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={() => setShowCookieConsent(false)} />
      )}
    </div>
  );
};

export default MerchPage;