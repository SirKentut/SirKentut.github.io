import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const titles = [
  'Software Engineer',
  'Machine Learning Engineer', 
  'Backend Developer',
  'CS Student'
];

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = titles[titleIndex];
      
      if (isDeleting) {
        setCurrentTitle(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      } else {
        setCurrentTitle(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in visible">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary">
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczO-SgMjbLLixvhUIoD2GpEpKOVPMi6EAUczXbdJDfiKIIKNvTAwYeHmjwzBtnuHNTm-_c9fcGOWq2TUgJ2eR_31PA5_rHPguQ6Yzx5Lt139h5CYGCNPLwOcodhh8d5KXPBTxO8u4TAj3Wy8y4DVbD8=w1036-h1554-s-no?authuser=0"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/128';
                console.error('Error loading profile image, using fallback');
              }}
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Pierre Harbin</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            <span className="typing-animation">{currentTitle}</span>
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Computer Science student at SFSU with experience in machine learning, backend development, and high-performance computing. Previously at GitHub, CodeDay, and Lawrence Berkeley National Laboratory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToContact} size="lg" className="px-8">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a href="mailto:pierreharbin@gmail.com" className="text-gray-500 hover:text-primary text-2xl transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/pierreharbin" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary text-2xl transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/SirKentut" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary text-2xl transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
