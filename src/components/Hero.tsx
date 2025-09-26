import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image Placeholder - will be replaced with actual image */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-fade-in-up">
          <div className="w-28 h-28 bg-surface rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">JS</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Jayani{" "}
            <span className="gradient-text animate-glow">Sudhakar</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Full Stack Developer & Data Enthusiast
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          Building seamless experiences with data-driven insights and cutting-edge technology
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
          <Button 
            size="lg" 
            className="glow-button text-lg px-8 py-4"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="hover:shadow-glow transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:shadow-glow transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:shadow-glow transition-all duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};