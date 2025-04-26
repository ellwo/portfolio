import { ReactNode, useEffect } from 'react';
import { I18nProvider, useI18n } from '../hooks/useI18n';
import StarsBackground from './StarsBackground';
import useSEO from '../hooks/useSEO';
import SEO from './SEO';

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
      <SEO data={seoData} />
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
