import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    institution: "University of Technology",
    degree: "Bachelor of Technology in Computer Science",
    year: "2020 - 2024",
    status: "Completed",
    highlights: [
      "Dean's List - 3 consecutive semesters",
      "Relevant Coursework: Data Structures, Database Systems, Web Development",
      "Final Year Project: AI-powered recommendation system",
      "GPA: 3.8/4.0"
    ]
  },
  {
    institution: "Data Science Institute",
    degree: "Certification in Advanced Data Analytics",
    year: "2023",
    status: "Completed",
    highlights: [
      "Machine Learning and Statistical Analysis",
      "Python for Data Science",
      "Data Visualization with Tableau and Power BI",
      "Capstone Project: Predictive Analytics for E-commerce"
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "March 2024",
    credentialUrl: "#"
  },
  {
    name: "Google Analytics Certified",
    issuer: "Google",
    date: "February 2024",
    credentialUrl: "#"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "January 2024",
    credentialUrl: "#"
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    date: "December 2023",
    credentialUrl: "#"
  }
];

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            Academic Background
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={edu.institution} 
                className="p-8 bg-card border-border card-hover animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="timeline-item pl-8">
                  <div className="timeline-dot"></div>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-primary font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.year}
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name} 
                className="p-6 bg-card border-border card-hover animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(cert.credentialUrl, '_blank')}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-primary font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      Verified
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};