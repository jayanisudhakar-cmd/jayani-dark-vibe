import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Analytics Dashboard",
    description: "A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization, sales tracking, and customer insights.",
    technologies: ["React", "TypeScript", "Chart.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Task Management Platform",
    description: "A collaborative task management application with team collaboration features, real-time updates, and project tracking capabilities.",
    technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Weather Data Visualization",
    description: "Interactive weather data visualization tool that displays climate patterns, forecasts, and historical weather data using modern charts.",
    technologies: ["Python", "Django", "D3.js", "API Integration"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Personal Finance Tracker",
    description: "A secure personal finance application with expense tracking, budget planning, and financial goal setting with data encryption.",
    technologies: ["React Native", "Firebase", "Chart.js", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Social Media Analytics Tool",
    description: "Analytics platform for social media managers to track engagement, analyze trends, and generate comprehensive reports.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "AI-Powered Content Generator",
    description: "Content generation tool using AI to create blog posts, social media content, and marketing copy with customizable templates.",
    technologies: ["Python", "FastAPI", "OpenAI API", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and creativity
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="p-8 bg-surface border-border card-hover animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-surface-elevated text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    size="sm" 
                    className="glow-button"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="p-6 bg-surface border-border card-hover animate-fade-in-up group"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs flex-1 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs flex-1 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
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
