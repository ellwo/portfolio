import { ReactNode, useEffect } from 'react';
import { I18nProvider, useI18n } from '../hooks/useI18n';
import StarsBackground from './StarsBackground';
import { Helmet } from 'react-helmet-async';
import useSEO from '../hooks/useSEO';

interface LayoutProps {
  children: ReactNode;
}

const LayoutContent = ({ children }: LayoutProps) => {
  const { language } = useI18n();
  const { seoData, loading } = useSEO(language);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/devicon/2.16.0/devicon.min.css';
    document.head.appendChild(link);

    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(fontAwesome);
    };
  }, []);

  if (loading || !seoData) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <meta name="author" content={seoData.author} />
        <link rel="canonical" href={seoData.url} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={seoData.type} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:locale" content={seoData.locale} />
        <meta property="og:site_name" content={seoData.title} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {seoData.twitterHandle && <meta name="twitter:site" content={seoData.twitterHandle} />}
        <meta name="twitter:url" content={seoData.url} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': seoData.type === 'article' ? 'Article' : 'WebSite',
            name: seoData.title,
            description: seoData.description,
            url: seoData.url,
            image: seoData.image,
            author: {
              '@type': 'Person',
              name: seoData.author
            },
            publisher: {
              '@type': 'Person',
              name: seoData.author
            },
            ...(seoData.publishedAt && { datePublished: seoData.publishedAt }),
            ...(seoData.modifiedAt && { dateModified: seoData.modifiedAt })
          })}
        </script>
      </Helmet>
      <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-space-dark">
        <StarsBackground />
        {/* Main content container */}
        <div className="relative w-full h-full">
          {children}
        </div>
      </div>
    </>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <I18nProvider>
      <LayoutContent>{children}</LayoutContent>
    </I18nProvider>
  );
};

export default Layout;
