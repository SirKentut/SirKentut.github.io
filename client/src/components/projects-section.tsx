import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Dna } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Derma-Detect",
      subtitle: "TreeHacks 10.0 Submission",
      description: "TreeHacks 10.0 submission featuring a convolutional neural network trained on 10,000 dermatoscopic images to classify malignant skin lesions with 86% accuracy, winning the $500 Convex Sponsor Prize.",
      badge: "🏆 2nd Place Winner",
      badgeColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      icon: Brain,
      gradient: "from-blue-400 to-purple-500",
      tags: ["Python", "CNN", "Keras", "Computer Vision"],
      tagColor: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
    },
    {
      title: "DNA Sequencing",
      subtitle: "Gen-Pinc Research",
      description: "Led a project to identify regulatory motifs in DNA sequences crucial for gene regulation using a convolutional neural network with techniques like Dropout, One-Hot Encoding, and Silico Mutagenesis.",
      badge: "Research Project",
      badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      icon: Dna,
      gradient: "from-green-400 to-blue-500",
      tags: ["Python", "Keras", "Pandas", "Bioinformatics"],
      tagColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in visible">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card shadow-lg overflow-hidden">
                {/* Project visualization */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <project.icon className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-lg font-medium">{project.subtitle}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge className={project.badgeColor}>
                      {project.badge}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className={project.tagColor}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="flex items-center text-primary hover:text-blue-700 transition-colors">
                      <ExternalLink className="mr-2 h-4 w-4" />View Project
                    </a>
                    <a href="#" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      <Github className="mr-2 h-4 w-4" />Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
