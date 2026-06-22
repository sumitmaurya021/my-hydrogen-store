import {Link, useLoaderData} from 'react-router';
import {Image, getPaginationVariables} from '@shopify/hydrogen';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import '../assets/css/BlogsPage.css';

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: `Hydrogen | All Blogs`}];
};

/**
 * @param {Route.LoaderArgs} args
 */
export async function loader(args) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold.
 * @param {Route.LoaderArgs}
 */
async function loadCriticalData({context, request}) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 12, // Show more articles per page
  });

  const [{articles}] = await Promise.all([
    context.storefront.query(ARTICLES_QUERY, {
      variables: {
        ...paginationVariables,
      },
    }),
  ]);

  return {articles};
}

/**
 * Load data for rendering content below the fold.
 * @param {Route.LoaderArgs}
 */
function loadDeferredData({context}) {
  return {};
}

export default function Blogs() {
  /** @type {LoaderReturnData} */
  const {articles} = useLoaderData();

  return (
    <div className="blogs-page-container">
      <div className="blogs-page-header">
        <h1 className="blogs-page-title">All Blog Posts</h1>
      </div>
      <PaginatedResourceSection connection={articles} resourcesClassName="blog-grid">
        {({node: article, index}) => (
          <ArticleItem
            article={article}
            key={article.id}
            loading={index < 2 ? 'eager' : 'lazy'}
          />
        )}
      </PaginatedResourceSection>
    </div>
  );
}

/**
 * @param {{
 *   article: ArticleItemFragment;
 *   loading?: HTMLImageElement['loading'];
 * }}
 */
function ArticleItem({article, loading}) {
  const publishedAt = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedAt));
  
  // Use the blog handle if available, otherwise default to "news"
  const blogHandle = article.blog?.handle || 'news';

  return (
    <div className="blog-article" key={article.id}>
      <Link to={`/blogs/${blogHandle}/${article.handle}`}>
        {article.image ? (
          <div className="blog-article-image">
            <Image
              alt={article.image.altText || article.title}
              aspectRatio="3/2"
              data={article.image}
              loading={loading}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        ) : (
          <div className="blog-article-image" style={{backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <span>No Image</span>
          </div>
        )}
        <div className="blog-article-content">
          <h3 className="blog-article-title">{article.title}</h3>
          <span className="blog-article-date">{publishedAt}</span>
        </div>
      </Link>
    </div>
  );
}

const ARTICLES_QUERY = `#graphql
  query Articles(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    articles(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor,
      sortKey: PUBLISHED_AT,
      reverse: true
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        ...ArticleItem
      }
    }
  }

  fragment ArticleItem on Article {
    author: authorV2 {
      name
    }
    contentHtml
    handle
    id
    image {
      id
      altText
      url
      width
      height
    }
    publishedAt
    title
    blog {
      handle
    }
  }
`;

/** @typedef {import('./+types/blogs._index').Route} Route */
/** @typedef {import('storefrontapi.generated').ArticleItemFragment} ArticleItemFragment */
/** @typedef {ReturnType<typeof useLoaderData<typeof loader>>} LoaderReturnData */
