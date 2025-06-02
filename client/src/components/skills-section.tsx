import { Code, Layers, Settings, Brain } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "Go", "C/C++", "Kotlin"]
    },
    {
      title: "Frameworks",
      icon: Layers,
      iconBg: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600 dark:text-green-400",
      skills: ["React.js", "React Native", "Node.js", "Spring", "Flutter", "Keras"]
    },
    {
      title: "Tools & Cloud",
      icon: Settings,
      iconBg: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600 dark:text-purple-400",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "CI/CD"]
    },
    {
      title: "Specializations",
      icon: Brain,
      iconBg: "bg-orange-100 dark:bg-orange-900",
      iconColor: "text-orange-600 dark:text-orange-400",
      skills: ["Machine Learning", "Computer Vision", "NLP", "Data Analysis", "DevOps", "Full-Stack"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in visible">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className={`${category.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className={`h-8 w-8 ${category.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="skill-tag bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg hover:shadow-md transition-all duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
