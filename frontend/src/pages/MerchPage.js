import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { ExternalLink, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const MerchPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured items for the slider
  const featuredItems = [
    {
      title: "Spinnersonic Official Spinner",
      description: "High-quality metal fidget spinner with game mechanics",
      price: "£29.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Featured"
    }
  ];

  // All 48 merchandise items
  const merchItems = [
    // Gaming Accessories (12 items)
    {
      title: "Spinnersonic Official Spinner",
      description: "High-quality metal fidget spinner",
      price: "£29.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Gaming"
    },
    {
      title: "Triangle Chess Set",
      description: "Premium wooden board set",
      price: "£149.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
      category: "Gaming"
    },
    {
      title: "Spellcheck Word Guide",
      description: "Official strategy guide",
      price: "£19.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
      category: "Gaming"
    },
    {
      title: "Doomlane Racing Wheel",
      description: "Custom gaming wheel controller",
      price: "£89.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/a8g9ilrg_pexels-ash-craig-122861-376464.jpg",
      category: "Gaming"
    },
    {
      title: "Tac ticx Strategy Board",
      description: "Physical version of the digital game",
      price: "£59.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/d4j87eyh_pexels-robinstickel-70497.jpg",
      category: "Gaming"
    },
    {
      title: "Gaming Mouse Pad XL",
      description: "Voltis Labs branded mouse pad",
      price: "£24.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Gaming"
    },
    {
      title: "Mechanical Keyboard",
      description: "RGB backlit gaming keyboard",
      price: "£129.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
      category: "Gaming"
    },
    {
      title: "Wireless Gaming Headset",
      description: "7.1 surround sound headset",
      price: "£99.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
      category: "Gaming"
    },
    {
      title: "Gaming Controller Stand",
      description: "LED-lit controller display stand",
      price: "£34.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/a8g9ilrg_pexels-ash-craig-122861-376464.jpg",
      category: "Gaming"
    },
    {
      title: "Voltis Labs Gaming Chair",
      description: "Ergonomic with LED lighting",
      price: "£299.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/d4j87eyh_pexels-robinstickel-70497.jpg",
      category: "Gaming"
    },
    {
      title: "Streaming Webcam HD",
      description: "1080p webcam for streaming",
      price: "£79.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Gaming"
    },
    {
      title: "Cable Management Kit",
      description: "RGB cable management system",
      price: "£44.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
      category: "Gaming"
    },

    // Apparel (12 items)
    {
      title: "Spinnersonic Racing Jacket",
      description: "Premium racing-style jacket",
      price: "£79.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
      category: "Apparel"
    },
    {
      title: "Triangle Chess T-Shirt",
      description: "Geometric design tee",
      price: "£24.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/a8g9ilrg_pexels-ash-craig-122861-376464.jpg",
      category: "Apparel"
    },
    {
      title: "Voltis Labs Hoodie",
      description: "Premium cotton blend hoodie",
      price: "£49.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/d4j87eyh_pexels-robinstickel-70497.jpg",
      category: "Apparel"
    },
    {
      title: "Gamer Cap",
      description: "Adjustable snapback cap",
      price: "£19.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Apparel"
    },
    {
      title: "Gaming Socks Set",
      description: "4-pack of gaming themed socks",
      price: "£16.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
      category: "Apparel"
    },
    {
      title: "Doomlane Tank Top",
      description: "Athletic tank top",
      price: "£22.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
      category: "Apparel"
    },
    {
      title: "Gaming Gloves",
      description: "Anti-sweat gaming gloves",
      price: "£12.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/a8g9ilrg_pexels-ash-craig-122861-376464.jpg",
      category: "Apparel"
    },
    {
      title: "Spellcheck Wizard Robe",
      description: "Cosplay wizard robe",
      price: "£64.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/d4j87eyh_pexels-robinstickel-70497.jpg",
      category: "Apparel"
    },
    {
      title: "Logo Beanie",
      description: "Knitted beanie with logo",
      price: "£18.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Apparel"
    },
    {
      title: "Athletic Shorts",
      description: "Moisture-wicking gaming shorts",
      price: "£29.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
      category: "Apparel"
    },
    {
      title: "Zip-up Jacket",
      description: "Lightweight gaming jacket",
      price: "£54.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
      category: "Apparel"
    },
    {
      title: "Gaming Jersey",
      description: "Professional esports jersey",
      price: "£39.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/a8g9ilrg_pexels-ash-craig-122861-376464.jpg",
      category: "Apparel"
    },

    // Collectibles (12 items)
    {
      title: "Spinner Figure Collection",
      description: "Set of 6 collectible figures",
      price: "£49.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/d4j87eyh_pexels-robinstickel-70497.jpg",
      category: "Collectibles"
    },
    {
      title: "Limited Edition Poster Set",
      description: "12 exclusive game posters",
      price: "£34.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Collectibles"
    },
    {
      title: "Art Book Collection",
      description: "Complete game art books",
      price: "£89.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
      category: "Collectibles"
    },
    {
      title: "Soundtrack Vinyl Box",
      description: "All game soundtracks on vinyl",
      price: "£129.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
      category: "Collectibles"
    },
    {
      title: "Character Pins Set",
      description: "Enamel pins of game characters",
      price: "£24.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/a8g9ilrg_pexels-ash-craig-122861-376464.jpg",
      category: "Collectibles"
    },
    {
      title: "Holographic Sticker Pack",
      description: "Premium holographic stickers",
      price: "£14.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/d4j87eyh_pexels-robinstickel-70497.jpg",
      category: "Collectibles"
    },
    {
      title: "Game Logo Keychain Set",
      description: "Metal keychains for all games",
      price: "£19.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Collectibles"
    },
    {
      title: "Collector's Card Game",
      description: "Trading cards featuring game characters",
      price: "£39.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
      category: "Collectibles"
    },
    {
      title: "Neon Sign Mini",
      description: "LED neon game logo sign",
      price: "£69.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
      category: "Collectibles"
    },
    {
      title: "Crystal Paperweight",
      description: "3D etched crystal paperweight",
      price: "£44.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/a8g9ilrg_pexels-ash-craig-122861-376464.jpg",
      category: "Collectibles"
    },
    {
      title: "Designer Clock",
      description: "Wall clock with game themes",
      price: "£54.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/d4j87eyh_pexels-robinstickel-70497.jpg",
      category: "Collectibles"
    },
    {
      title: "Trophy Replica Set",
      description: "Miniature tournament trophies",
      price: "£74.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Collectibles"
    },

    // Tech & Accessories (12 items)
    {
      title: "Wireless Earbuds",
      description: "Gaming earbuds with low latency",
      price: "£79.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
      category: "Tech"
    },
    {
      title: "Phone Case Collection",
      description: "Cases for all major phone models",
      price: "£24.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
      category: "Tech"
    },
    {
      title: "Portable Power Bank",
      description: "10000mAh with game artwork",
      price: "£34.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/a8g9ilrg_pexels-ash-craig-122861-376464.jpg",
      category: "Tech"
    },
    {
      title: "USB Flash Drive Set",
      description: "Game-themed USB drives",
      price: "£29.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/d4j87eyh_pexels-robinstickel-70497.jpg",
      category: "Tech"
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable speaker with RGB lights",
      price: "£59.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Tech"
    },
    {
      title: "Laptop Sleeve",
      description: "Padded sleeve with game artwork",
      price: "$39.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
      category: "Tech"
    },
    {
      title: "Desktop Organizer",
      description: "Multi-compartment desk organizer",
      price: "£44.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
      category: "Tech"
    },
    {
      title: "LED Strip Lights",
      description: "RGB strip lights for gaming setup",
      price: "£34.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/a8g9ilrg_pexels-ash-craig-122861-376464.jpg",
      category: "Tech"
    },
    {
      title: "Webcam Cover Set",
      description: "Privacy covers with game logos",
      price: "£9.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/d4j87eyh_pexels-robinstickel-70497.jpg",
      category: "Tech"
    },
    {
      title: "Gaming Monitor Stand",
      description: "Adjustable monitor stand with storage",
      price: "£64.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png",
      category: "Tech"
    },
    {
      title: "Wireless Charging Pad",
      description: "Fast wireless charger with LED",
      price: "$39.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
      category: "Tech"
    },
    {
      title: "Cable Organizer Kit",
      description: "Complete cable management solution",
      price: "£24.99",
      image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
      category: "Tech"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  return (
    <div className="merch-page">
      <Header />
      <main className="main-content">
        <div className="merch-content">
          {/* Featured Items Slider */}
          <section className="featured-slider">
            <h2 className="section-title">Featured Items</h2>
            <div className="slider-container">
              <div 
                className="slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredItems.map((item, index) => (
                  <div key={index} className="featured-slide">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="featured-image"
                    />
                    <div className="featured-info">
                      <div className="featured-category">{item.category}</div>
                      <h3 className="featured-title">{item.title}</h3>
                      <p className="featured-description">{item.description}</p>
                      <div className="featured-price">{item.price}</div>
                      <button className="featured-btn">
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="merch-grid-section">
            <h2 className="section-title">All Products ({merchItems.length} items)</h2>
            <div className="merch-grid">
              {merchItems.map((item, index) => (
                <div key={index} className="merch-card">
                  <div className="merch-image-container">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="merch-image"
                      onError={(e) => {
                        e.target.src = 'https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/0v9v8a91_Group%201244831544.png';
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