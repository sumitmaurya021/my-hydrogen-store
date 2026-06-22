import { Link } from 'react-router';
import '../assets/css/HeroBanner.css';

export function HeroBanner({ data }) {
  if (!data) return null;
  const { bgImage, subheading, heading, description, button } = data;

  return (
    <section className="hero-banner-section">
      <div className="hero-banner-container">
        <div 
          className="hero-banner-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="hero-banner-overlay"></div>
          <div className="hero-banner-content">
            {subheading && <h4 className="hero-banner-subheading">{subheading}</h4>}
            {heading && <h2 className="hero-banner-heading">{heading}</h2>}
            {description && <p className="hero-banner-description">{description}</p>}
            {button && button.text && button.link && (
              <Link to={button.link} className="hero-banner-button">
                {button.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
