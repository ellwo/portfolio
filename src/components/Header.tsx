import { useState, useEffect } from 'react';
import { useI18n } from '../hooks/useI18n';
import { profileData, badgesData } from '../api/mockData';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Smartphone, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TechGraph from './TechGraph';

interface BadgeProps {
  name: string;
  icon: string;
  tooltip_desc: string;
  link: string;
  priority_percent: number;
}

  

const TypingEffect = ({ titles }: { titles: string[] }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullTitles, setShowFullTitles] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    if (showFullTitles) return;

    let timeout: NodeJS.Timeout;

    if (isTyping && !isDeleting) {
      if (displayText === titles[currentIndex]) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 1200);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(titles[currentIndex].substring(0, displayText.length + 1));
        }, typingSpeed);
      }
    } else if (isDeleting) {
      if (displayText === '') {
        if (currentIndex === titles.length - 1) {
          setCurrentIndex(-1);
          // setShowFullTitles(true);
        } else {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
          setIsDeleting(false);
          setTypingSpeed(100);
        }
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, isDeleting, titles, showFullTitles, typingSpeed]);

  if (showFullTitles) {
    return (
      <div className="text-lg text-accent flex flex-wrap gap-x-2 gap-y-1 max-w-[270px]">
        {titles.map((title, index) => (
          <span key={index}>
            {title}
            {index < titles.length - 1 && <span className="mx-1 text-accent">/</span>}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="relative inline-block w-full overflow-hidden whitespace-nowrap h-7">
      <div className="inline-block text-accent">
        {displayText}
        <span className="inline-block w-1 h-5 bg-accent animate-cursor-blink ml-1"></span>
      </div>
    </div>
  );
};

const Header = () => {
  const { language, setLanguage, isRTL } = useI18n();
  const [contactOpen, setContactOpen] = useState(false);
  
  const profile = profileData[language];
  const badges = badgesData[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <section className="section- relative bg-transparent flex items-center justify-center py-10 md:py-0">
      <div className="w-full max-w-6xl mx-auto flex flex-col  items-center md:items-start gap-6 md:gap-12 px-4">
        {/* Left side content */}
        <div className="flex flex-col pt-10 sm:flex-row items-center sm:items-start flex-1 min-w-0">
          <div className="avatar-container animate-float mb-4 sm:mb-0 sm:mr-6 self-center">
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="w-64 h-64 md:w-64 md:h-64 rounded-full mx-auto"
            />
          </div>
          <div className="flex-1 min-w-0 w-full">
            <h1 className="md:text-4xl text-2xl font-bold text-gradient mb-2">{profile.name}</h1>
            <div className="h-7 overflow-hidden">
              <TypingEffect titles={profile.titles} />
            </div>
            <p className="text-gray-300 leading-relaxed mt-3 mb-1  text-base" style={{fontSize:'1.06rem', lineHeight: '1.6'}}>{profile.bio}</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button 
                variant="outline" 
                onClick={toggleLanguage}
                className="border-accent text-accent hover:bg-accent"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
              <Button 
                onClick={() => setContactOpen(true)}
                className="bg-accent text-black hover:bg-accent/90 hover:animate-pulse"
              >
                {language === 'en' ? 'Contact Me' : 'تواصل معي'}
              </Button>
            </div>
          </div>
        </div>
        {/* Tech Graph */}
        <div className="w-full min-h-[600px] relative">
          <TechGraph badges={badges} />
        </div>
      </div>
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="bg-space-light border-accent/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-gradient text-2xl font-bold">
              {language === 'en' ? 'Contact Me' : 'تواصل معي'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Mail className="text-accent h-5 w-5" />
              <a href={`mailto:${profile.contact.email}`} className="text-gray-100 hover:text-accent">
                {profile.contact.email}
              </a>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Smartphone className="text-accent h-5 w-5" />
              <a href={`tel:${profile.contact.phone}`} className="text-gray-100 hover:text-accent">
                {profile.contact.phone}
              </a>
            </div>
            <div className="flex space-x-4 rtl:space-x-reverse pt-2">
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-gray-100 hover:text-accent transition-colors" />
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-gray-100 hover:text-accent transition-colors" />
              </a>
              <a href={profile.contact.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-gray-100 hover:text-accent transition-colors" />
              </a>
            </div>
            <form className="mt-4 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Your Name' : 'اسمك'}
                  className="w-full p-3 bg-space-dark border border-accent/30 rounded focus:ring-accent focus:border-accent text-white"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder={language === 'en' ? 'Your Message' : 'رسالتك'}
                  className="w-full p-3 bg-space-dark border border-accent/30 rounded focus:ring-accent focus:border-accent text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-accent text-black hover:bg-accent/90">
                {language === 'en' ? 'Send Message' : 'إرسال رسالة'}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Header;
