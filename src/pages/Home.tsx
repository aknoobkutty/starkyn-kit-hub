import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cpu, Wrench, GraduationCap, Lightbulb, Shield, Award } from "lucide-react";
import iotKit from "@/assets/iot-kit.jpg";
import roboticsKit from "@/assets/robotics-kit.jpg";
import components from "@/assets/components.jpg";

const Home = () => {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8 text-tech-accent" />,
      title: "R&D Support",
      description: "Comprehensive research and development assistance for innovative projects."
    },
    {
      icon: <Wrench className="h-8 w-8 text-tech-light-blue" />,
      title: "Project Development",
      description: "End-to-end project development from concept to implementation."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Workshops & Training",
      description: "Expert-led workshops and training programs for students and professionals."
    }
  ];

  const productCategories = [
    {
      title: "IoT Development Kits",
      description: "Complete kits for Internet of Things projects with sensors and connectivity modules.",
      image: iotKit,
      features: ["ESP32/Arduino", "Wireless Modules", "Sensor Suite", "Cloud Integration"]
    },
    {
      title: "Robotics Kits",
      description: "Advanced robotics kits for building autonomous systems and robotic applications.",
      image: roboticsKit,
      features: ["Motor Controllers", "Servo Motors", "AI Integration", "Remote Control"]
    },
    {
      title: "Electronic Components",
      description: "Premium quality electronic components and modules for all your project needs.",
      image: components,
      features: ["Microcontrollers", "Sensors", "Power Modules", "Communication"]
    }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assured",
      description: "All products tested and certified"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Support",
      description: "Technical assistance from professionals"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Latest Technology",
      description: "Cutting-edge components and kits"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions to support your innovation journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-tech-accent/10 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our premium collection of project kits and components
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-tech-accent rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary-glow shadow-glow">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-tech-dark to-tech-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose STARKYN?</h2>
            <p className="text-xl text-gray-300">
              Your trusted partner in technology innovation and education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-tech-accent/20 rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-tech-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert consultation and premium quality components for your innovation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contact Us Today
            </Button>
            <Button size="lg" variant="ghost" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-light-blue mb-4">
              STARKYN <span className="text-tech-accent">TECHNOLOGIES</span>
            </div>
            <p className="text-gray-400 mb-6">Innovating Technology Solutions</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-tech-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-tech-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-tech-accent transition-colors">Support</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
              © 2024 STARKYN TECHNOLOGIES LLP. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;