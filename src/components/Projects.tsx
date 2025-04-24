
import { useRef, useEffect, useState } from 'react';
import { useI18n } from '../hooks/useI18n';
import { projectsData } from '../api/mockData';

const Projects = () => {
  const { language } = useI18n();
  const projects = projectsData[language];
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(projects.length).fill(false));
  
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

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => {
      projectCards.forEach((card) => observer.unobserve(card));
    };
  }, [language]);

  return (
    <section className="section-container">
      <div className="max-w-6xl w-full mx-auto overflow-hidden">
        <h2 className="text-3xl font-bold text-gradient text-center mb-12">
          {language === 'en' ? 'Featured Projects' : 'المشاريع المميزة'}
        </h2>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`project-card transition-all duration-700 ${
                isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-accent mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary-light text-gray-300 border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
