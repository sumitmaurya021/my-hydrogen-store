import {Link} from 'react-router';
import '~/assets/css/AnnouncementBar.css';

export function AnnouncementBar(props) {
  const text = props.text;
  const linkText = props.linkText;
  const linkUrl = props.linkUrl;
  const backgroundColor = props.backgroundColor || '#e31c23';
  const textColor = props.textColor || '#ffffff';
  const padding = props.padding || '0.5rem 1rem';

  return (
    <div 
      className="announcement-bar" 
      style={{ backgroundColor: backgroundColor, color: textColor, padding: padding }}
    >
      <div className="announcement-bar-content">
        <span>{text}</span>
        
        {linkText ? (
          <Link 
            to={linkUrl} 
            className="announcement-bar-link" 
            style={{ color: textColor }}
          >
            {linkText}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

