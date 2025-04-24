import { useRef, useEffect, useState } from 'react';
import { useI18n } from '../hooks/useI18n';
import { experienceData } from '../api/mockData';

const Timeline = () => {
  const { language, isRTL } = useI18n();
  const experiences = experienceData[language];
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(experiences.length).fill(false));

  // Set up intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setIsVisible(prev => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            
            // Once visible, no need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, [language]);

  return (
    <section className="bg-space p-10">
      <div className="max-w-4xl w-full mx-auto overflow-hidden px-4">
        <h2 className="text-3xl font-bold text-gradient text-center mb-12">
          {language === 'en' ? 'Professional Journey' : 'المسيرة المهنية'}
        </h2>
        
        <div
          ref={timelineRef}
          className={`relative ${isRTL ? 'mr-6' : 'ml-6'} space-y-10`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Timeline vertical line */}
          <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 bottom-0 w-0.5 bg-accent/30`}></div>
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item transition-all duration-700 ${
                isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`absolute ${isRTL ? '-right-2' : '-left-2'} top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent`}></div>
              <div className={`${isRTL ? 'pr-8' : 'pl-8'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <a 
                    href={exp.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-light text-xl font-bold"
                  >
                    {exp.company}
                  </a>
                  <span className="text-gray-400">{exp.year}</span>
                </div>
                <h3 className="text-white text-lg mb-2">{exp.position}</h3>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-accent flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
