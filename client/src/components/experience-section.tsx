import { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function ExperienceSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const experiencesPerPage = 3;
  
  const experiences = [
    {
      company: "GitHub",
      role: "Software Engineer",
      period: "June 2024 - August 2024",
      location: "San Francisco, CA",
      icon: SiGithub,
      iconBg: "bg-gray-900",
      iconColor: "text-white",
      achievements: [
        "Developed a new package to aggregate and analyze CPU usage data, resolving dependency issues, and optimized fileserver rebalancer performance by 10% with a CPU weight metric, impacting 550 million repositories.",
        "Automated CPU data collection for continuous monitoring and created internal tooling that improved developer workflow by 50% by reducing 3 steps for aggregating health stats.",
        "Ensured data integrity using Go's concurrency features for thread-safe operations and enhanced code quality through pair programming and code reviews."
      ]
    },
    {
      company: "CodeDay",
      role: "Software Engineer",
      period: "October 2023 - December 2023",
      location: "Remote",
      icon: () => <div className="text-2xl">💻</div>,
      iconBg: "bg-orange-500",
      iconColor: "text-white",
      achievements: [
        "Co-authored pull request (#1100) in the Open Energy Dashboard, a platform serving over 10,000 active users.",
        "Implemented MetricTest and UnitTest for readings retrieval API; enhanced data handling for displaying energy points and converting kWh to lbs of CO2. Utilizing JavaScript, Node.js, Mocha, and Chai for development and testing."
      ]
    },
    {
      company: "University of California, San Francisco",
      role: "Catalyst Intern",
      period: "June 2023 - August 2023",
      location: "San Francisco, CA • Remote",
      icon: () => <div className="text-2xl">🏥</div>,
      iconBg: "bg-blue-600",
      iconColor: "text-white",
      achievements: [
        "Ran pre-clinical trials on 5 cadavers for a soft robot used in semi-invasive paranasal sinus biopsies and tumor extraction.",
        "Implemented a soft body design minimizing tissue damage and reducing pushing forces by 50% for a safer biopsy experience.",
        "Researched and documented the competitive landscape of robotic surgical tools for the endonasal cavity.",
        "Achieved 0.1 cm tip positioning accuracy for painless navigation within nasal cavity."
      ]
    },
    {
      company: "Lawrence Berkeley National Laboratory",
      role: "High-Performance Computing Intern",
      period: "May 2023 - July 2023",
      location: "Berkeley, CA",
      icon: () => <div className="text-2xl">⚛️</div>,
      iconBg: "bg-green-600",
      iconColor: "text-white",
      achievements: [
        "Discovered an 85% correlation between power outages in impoverished areas during heatwaves.",
        "Presented research at the Smoky Mountain Data Challenge to 850+ scientists from Argonne, LBNL, & ORNL.",
        "Held daily sprint sessions researching power outage correlation to DME-reliant populations primarily using Python and GeoPandas on the Perlmutter Supercomputer."
      ]
    }
  ];

  const totalPages = Math.ceil(experiences.length / experiencesPerPage);
  const startIndex = currentPage * experiencesPerPage;
  const currentExperiences = experiences.slice(startIndex, startIndex + experiencesPerPage);

  const handlePrevPage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const experienceSection = document.getElementById('experience');
    const currentScrollY = window.scrollY;
    setCurrentPage(prev => Math.max(0, prev - 1));
    // Maintain scroll position
    setTimeout(() => {
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        window.scrollTo({ top: elementTop - 80, behavior: 'instant' });
      }
    }, 0);
  };

  const handleNextPage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const experienceSection = document.getElementById('experience');
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
    // Maintain scroll position
    setTimeout(() => {
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        window.scrollTo({ top: elementTop - 80, behavior: 'instant' });
      }
    }, 0);
  };

  const handlePageSelect = (e: React.MouseEvent, pageIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    const experienceSection = document.getElementById('experience');
    setCurrentPage(pageIndex);
    // Maintain scroll position
    setTimeout(() => {
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        window.scrollTo({ top: elementTop - 80, behavior: 'instant' });
      }
    }, 0);
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in visible">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Professional Experience</h2>
          
          <div className="space-y-12">
            {currentExperiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/4">
                    <div className={`${exp.iconBg} ${exp.iconColor} p-3 rounded-lg inline-block mb-2`}>
                      {exp.icon === SiGithub ? <SiGithub className="text-2xl" /> : <exp.icon />}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                  </div>
                  <div className="lg:w-3/4">
                    <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-primary font-medium mb-4">{exp.company}</h4>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <CheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={(e) => handlePageSelect(e, i)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                      currentPage === i
                        ? "bg-primary text-primary-foreground"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="flex items-center"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
