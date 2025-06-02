import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Globe, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in visible">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Background</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm a passionate Computer Science student at San Francisco State University with a strong foundation in software engineering, machine learning, and data analysis. My academic journey includes an enriching semester at Chung Ang University in Korea, where I gained international perspective on computer science education.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                With hands-on experience at top-tier organizations like GitHub and Lawrence Berkeley National Laboratory, I've contributed to large-scale systems serving millions of users and conducted research that has been presented to hundreds of scientists.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm particularly interested in the intersection of machine learning and software engineering, with projects ranging from medical AI applications to DNA sequence analysis.
              </p>
            </div>
            
            <div className="space-y-8">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <GraduationCap className="text-primary mr-3 h-5 w-5" />
                    San Francisco State University
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">Bachelor's in Computer Science</p>
                  <p className="text-gray-600 dark:text-gray-400">Minor in Economics • Minor in Data Science</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">May 2021 - May 2025 | GPA: 3.8</p>
                  <p className="text-sm font-medium text-primary">Graduated Magna Cum Laude</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <Globe className="text-primary mr-3 h-5 w-5" />
                    Chung Ang University (Korea)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">Bachelor's in Computer Science</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">August 2024 - December 2024 | GPA: 3.9</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <MapPin className="text-primary mr-3 h-5 w-5" />
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Open to remote opportunities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
