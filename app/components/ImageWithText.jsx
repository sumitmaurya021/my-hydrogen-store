import { Link } from 'react-router';
import '~/assets/css/ImageWithText.css';

export function ImageWithText({ data }) {
  if (!data) return null;
  
  const isImageRight = data.imagePosition === 'right';
  const textAlignClass = data.textAlign === 'left' ? 'text-left' : 'text-center';
  const sizeClass = data.textSize === 'large' ? 'size-large' : 'size-small';

  return (
    <section className={`image-with-text-section ${isImageRight ? 'image-right' : ''}`}>
      <div className="image-with-text-media">
        <img src={data.imageUrl} alt={data.title} loading="lazy" />
      </div>
      <div className={`image-with-text-content ${textAlignClass} ${sizeClass}`}>
        <div className="image-with-text-inner">
          <h3 className="image-with-text-title">{data.title}</h3>
          <p className="image-with-text-description">{data.description}</p>
          <Link to={data.buttonLink} className="image-with-text-button">
            {data.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
