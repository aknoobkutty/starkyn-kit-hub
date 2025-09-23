import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Wrench, GraduationCap, Users, Clock, Award, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Lightbulb className="h-12 w-12 text-tech-accent" />,
      title: "R&D Support",
      description: "Comprehensive research and development assistance for innovative projects across various technology domains.",
      features: [
        "Project concept development",
        "Technical feasibility analysis", 
        "Prototype development",
        "Testing and validation",
        "Documentation support"
      ],
      duration: "2-12 weeks",
      price: "Custom Quote"
    },
    {
      icon: <Wrench className="h-12 w-12 text-tech-light-blue" />,
      title: "Project Development",
      description: "End-to-end project development from initial concept to final implementation and deployment.",
      features: [
        "Complete project lifecycle management",
        "Hardware & software integration",
        "Custom PCB design",
        "Firmware development",
        "Quality assurance testing"
      ],
      duration: "4-16 weeks",
      price: "Custom Quote"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Workshops & Training",
      description: "Expert-led workshops and training programs for students, professionals, and institutions.",
      features: [
        "Hands-on practical sessions",
        "Industry-relevant curriculum",
        "Certificate programs",
        "Corporate training",
        "Online & offline modes"
      ],
      duration: "1-5 days",
      price: "Custom Quote"
    }
  ];

  const additionalServices = [
    {
      title: "Technical Consultation",
      description: "Expert advice on technology selection, architecture design, and implementation strategies.",
      icon: <Users className="h-6 w-6 text-tech-accent" />
    },
    {
      title: "Rapid Prototyping",
      description: "Quick development of working prototypes for proof-of-concept and demonstration.",
      icon: <Clock className="h-6 w-6 text-tech-light-blue" />
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and validation services to ensure product reliability.",
      icon: <Award className="h-6 w-6 text-primary" />
    }
  ];

  const industries = [
    "Educational Institutions",
    "Startups & SMEs", 
    "Research Organizations",
    "Government Agencies",
    "Corporate R&D",
    "Individual Innovators"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-navy to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions and expert support to bring your innovative ideas to life
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full"></div>
                
                <CardHeader className="pb-6">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-tech-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{service.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Starting from</div>
                      <div className="font-semibold text-primary">{service.price}</div>
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Specialized support services to complement your project needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-tech-accent/10 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Supporting innovation across diverse sectors and organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-r from-primary/10 to-tech-accent/10 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-foreground">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-tech-dark to-tech-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">
              A systematic approach to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your requirements and objectives" },
              { step: "02", title: "Planning", description: "Detailed project planning and resource allocation" },
              { step: "03", title: "Execution", description: "Implementation with regular progress updates" },
              { step: "04", title: "Delivery", description: "Testing, documentation, and final delivery" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-tech-accent rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-tech-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert consultation and turn your innovative ideas into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="ghost" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;