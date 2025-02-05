import { useEffect, useState } from "react";
import "../styles/LandingPage.css";
import carImage from "../assets/car.png";
import logoImage from "../assets/logo.png"

export default function LandingPage() {
  const [animateCar, setAnimateCar] = useState(false);

  const featureData = [
    {
      title: "Precision Targeting & Audience Segmentation",
      content: "- Geo-Targeted Ad Placement: Select the exact locations where your ads will appear.<br />" +
        "- Demographic Targeting: Tailor campaigns based on age, income, and lifestyle.<br />" +
        "- Context-Aware Advertising: Adapt ads dynamically to maximize engagement.",
      benefits: ["✔ Behavioral Learning", "✔ Deep Genre Exploration", "✔ Contextual Recommendations"]
    },
    {
      title: "Real-Time Ad Deployment & Optimization",
      content: "- Instant Campaign Activation: Upload and deploy within seconds.<br />" +
        "- Live Monitoring & Modifications: Adjust campaigns in real-time.<br />" +
        "- Dynamic CPM Pricing: Ensure optimal cost efficiency.",
      benefits: ["✔ Behavioral Learning", "✔ Deep Genre Exploration", "✔ Contextual Recommendations"]
    },
    {
      title: "Performance Tracking & Campaign Analytics",
      content: "- Verified Impressions: Track via GPS and timestamps.<br />" +
        "- Audience Insights: Receive detailed engagement reports.<br />" +
        "- Post-Campaign Reporting: Get performance breakdowns.",
      benefits: ["✔ Behavioral Learning", "✔ Deep Genre Exploration", "✔ Contextual Recommendations"]
    }
  ];

  useEffect(() => {
    setTimeout(() => setAnimateCar(true), 500);
  }, []);

  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo">
          <img src={logoImage} alt="KOI Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#technologie">Technologie</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#about">About us</a></li>
          </ul>
        </nav>
        <button className="contact-btn">Contact us</button>
      </header>

      <section className="hero-section">
        <div className="background-effect"></div>
        <div className="car-container">
          <div className={`car ${animateCar ? "animate" : ""}`}>
            <img src={carImage} alt="Car" />
          </div>
        </div>
        <h1>
          Turn leads <span className="highlight">into</span> <span className="highlight-orange">revenue, fast.</span>
        </h1>
        <p>
          Unveil insights enhanced by AI from previously gathered user emails and domains.
          Now also enriched with Twitter & Telegram.
        </p>
        <button className="read-more">Read More</button>
      </section>

      <section className="smart-listening-section">
        <h2>The Smart, Fair, and Superior Way to Listen</h2>
        <div className="listening-features">
          {featureData.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: feature.content }} />
              <ul className="feature-benefits">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
