import { Link } from 'react-router';
import { Image } from '@shopify/hydrogen';
import '../assets/css/LatestBlogs.css';

// Simple function to strip HTML tags and get plain text accurately
function stripHtml(html) {
  if (!html) return '';
  // Replace tags with a space so words don't mash together
  return html.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
}

// Calculate reading time based on 200 words per minute
function getReadingTime(html) {
  const text = stripHtml(html);
  if (!text) return '1 min read';
  
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

export function LatestBlogs({ articles }) {
  if (!articles || !articles.nodes || articles.nodes.length === 0) return null;

  return (
    <section className="latest-blogs-section">
      <h2 className="latest-blogs-heading">See what's new in the world of Peloton</h2>
      
      <div className="latest-blogs-grid">
        {articles.nodes.map((article) => {
          const readingTime = getReadingTime(article.contentHtml);
          const excerpt = article.seo?.description || stripHtml(article.contentHtml);
          // Use blog handle if available, otherwise default to news
          const blogHandle = article.blog?.handle || 'news';

          return (
            <Link 
              key={article.id} 
              to={`/blogs/${blogHandle}/${article.handle}`} 
              className="latest-blog-card"
            >
              <div className="latest-blog-image-wrapper">
                {article.image ? (
                  <Image
                    data={article.image}
                    alt={article.image.altText || article.title}
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    No Image
                  </div>
                )}
              </div>
              <div className="latest-blog-content">
                <h3 className="latest-blog-title">{article.title}</h3>
                <p className="latest-blog-excerpt">{excerpt}</p>
                <div className="latest-blog-meta">
                  {readingTime}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <Link to="/blogs" className="latest-blogs-view-more">
        View More
      </Link>
    </section>
  );
}
