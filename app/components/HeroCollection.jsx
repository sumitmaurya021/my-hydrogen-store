import { Link } from 'react-router';
import { CollectionCard } from './CollectionCard';
import '../assets/css/HeroCollection.css';

export function HeroCollection({
    heading,
    subheading,
    description,
    buttonText,
    buttonLink,
    collections,
    bgTheme = 'dark',
    bgImage,
    gridHeading,
}) {
    const topStyle = bgImage ? { backgroundImage: `url("${bgImage}")` } : {};

    return (
        <section className="hero-collection-wrapper">

            <div 
                className={`hero-collection__top hero-collection__top--theme-${bgTheme}`}
                style={topStyle}
            >
                <div className="hero-collection__content">
                    {subheading && <p className="hero-collection__subheading">{subheading}</p>}
                    {heading && (
                        <h2 className="hero-collection__heading">
                            {heading.split('\n').map((line, i) => (
                                <span key={i}>{line}{i === 0 && <br />}</span>
                            ))}
                        </h2>
                    )}
                    {description && <p className="hero-collection__description">{description}</p>}

                    {buttonText && buttonLink && (
                        <Link to={buttonLink} className="hero-collection__button">
                            {buttonText}
                        </Link>
                    )}
                </div>
            </div>

            <div className="hero-collection__bottom">
                {gridHeading && <h3 className="hero-collection__grid-heading">{gridHeading}</h3>}
                <div className="hero-collection__grid">
                    {collections && collections.length > 0 ? (
                        collections.map((collection, index) => (
                            <CollectionCard key={collection.id || index} collection={collection} />
                        ))
                    ) : (
                        <p>No collections found.</p>
                    )}
                </div>
            </div>

        </section>
    );
}
