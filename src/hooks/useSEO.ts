import { useState, useEffect } from 'react';
import { profileData } from '../api/mockData';

interface SEOData {
  title: string;
  description: string;
  image: string;
  url: string;
  author: string;
  keywords: string[];
  type?: string;
  locale?: string;
  twitterHandle?: string;
  publishedAt?: string;
  modifiedAt?: string;
}

export const useSEO = (language: string = 'en') => {
  const [seoData, setSeoData] = useState<SEOData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSEOData = async () => {
      try {
        // In a real application, this would be an API call
        // const response = await fetch('/api/seo');
        // const data = await response.json();

        // For now, we'll use the mock data
        const profile = profileData[language];
        
        // Construct SEO data from profile
        const seoData: SEOData = {
          title: `${profile.name} - ${profile.titles[0]}`,
          description: profile.bio,
          image: profile.avatar,
          url: typeof window !== 'undefined' ? window.location.href : '',
          author: profile.name,
          keywords: [
            'software engineer',
            'web development',
            'full stack developer',
            ...profile.titles,
            // Add more relevant keywords based on your profile
          ],
          type: 'profile',
          locale: language === 'ar' ? 'ar_SA' : 'en_US',
          twitterHandle: profile.contact?.twitter,
          publishedAt: new Date().toISOString(),
          modifiedAt: new Date().toISOString(),
        };

        setSeoData(seoData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch SEO data');
        setLoading(false);
      }
    };

    fetchSEOData();
  }, [language]);

  return { seoData, loading, error };
};

export default useSEO; 