import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 88 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 82 }
    ]
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React", level: 92 },
      { name: "Vue.js", level: 78 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      { name: "SASS/SCSS", level: 85 }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 78 },
      { name: "Firebase", level: 75 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 80 },
      { name: "Tableau", level: 75 }
    ]
  }
];

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

const SkillBar = ({ name, level, index }: SkillBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="p-8 bg-card border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={skillIndex}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};