import { Card } from "@/components/ui/card";
import { Code, Database, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building end-to-end solutions with modern technologies"
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Transforming raw data into actionable insights"
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Creative solutions to complex technical challenges"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively in diverse, dynamic teams"
  }
];

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm <span className="text-primary font-semibold">Jayani Sudhakar</span>, 
              a passionate developer who thrives at the intersection of technology and creativity. 
              My journey in software development began with a curiosity about how things work, 
              and has evolved into a deep appreciation for crafting solutions that make a difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in full-stack development with a strong focus on data-driven applications. 
              Whether it's building responsive web applications, analyzing complex datasets, or 
              designing intuitive user experiences, I approach each project with enthusiasm 
              and attention to detail.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. 
              I believe in continuous learning and the power of collaboration to create 
              innovative solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="p-6 bg-surface border-border card-hover text-center"
              >
                <highlight.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};