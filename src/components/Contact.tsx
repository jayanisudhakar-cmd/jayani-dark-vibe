import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jayani.sudhakar@email.com",
    href: "mailto:jayani.sudhakar@email.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/jayanisudhakar",
    username: "@jayanisudhakar"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/jayanisudhakar",
    username: "/in/jayanisudhakar"
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Let's discuss your next project or explore potential collaborations. 
            I'm always excited to work on innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-surface border-border animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-surface-elevated border-border focus:border-primary"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-surface-elevated border-border focus:border-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-surface-elevated border-border focus:border-primary"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-surface-elevated border-border focus:border-primary min-h-[120px]"
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>

              <Button type="submit" className="w-full glow-button text-lg py-3">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Details */}
            <Card className="p-8 bg-surface border-border">
              <h3 className="text-xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-surface border-border">
              <h3 className="text-xl font-bold mb-6 text-foreground">Connect With Me</h3>
              <div className="space-y-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full hover:bg-primary hover:text-primary-foreground border-primary text-primary"
                onClick={() => {
                  // This would typically trigger a download of the actual resume file
                  toast({
                    title: "Resume download started",
                    description: "Your resume will begin downloading shortly."
                  });
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume (PDF)
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};