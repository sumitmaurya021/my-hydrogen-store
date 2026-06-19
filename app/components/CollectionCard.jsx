import { Image } from '@shopify/hydrogen';
import '~/assets/css/CollectionCard.css';
export function CollectionCard({ collection }) {

    if (!collection) {
        console.log("Collection Not Found");
        return null;
    }

    return (
        <>
            <div className="collection-card">
                <div className='collection-card__image-wrapper'>
                    {collection.image && (
                        <Image
                            data={collection.image}
                            alt={collection.title}
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="collection-card__image"
                        />
                    )}
                </div>

                <div className="collection-card__info">
                    <h3 className="collection-card__title">{collection.title}</h3>
                    {/* SVG Arrow Icon */}
                    <span className="collection-card__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="black" />
                            <path d="M10 8L14 12L10 16" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
            </div>
        </>
    );
}