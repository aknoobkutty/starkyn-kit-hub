import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, Zap } from "lucide-react";
import iotKit from "@/assets/iot-kit.jpg";
import roboticsKit from "@/assets/robotics-kit.jpg";
import components from "@/assets/components.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Campus IoT System",
      category: "IoT Solutions",
      description: "Comprehensive IoT system for campus automation including smart lighting, security, and energy management.",
      image: iotKit,
      client: "ABC Engineering College",
      duration: "6 months",
      year: "2024",
      technologies: ["ESP32", "LoRaWAN", "MQTT", "Cloud Analytics"],
      outcomes: [
        "30% reduction in energy consumption",
        "Automated security monitoring",
        "Real-time campus analytics"
      ]
    },
    {
      id: 2,
      title: "Autonomous Warehouse Robot",
      category: "Robotics & AI",
      description: "AI-powered autonomous robot for warehouse inventory management and goods transportation.",
      image: roboticsKit,
      client: "XYZ Logistics Pvt Ltd",
      duration: "8 months", 
      year: "2023",
      technologies: ["ROS", "Computer Vision", "LIDAR", "Deep Learning"],
      outcomes: [
        "50% faster inventory processing",
        "Reduced human error by 90%",
        "24/7 automated operations"
      ]
    },
    {
      id: 3,
      title: "Environmental Monitoring Network",
      category: "Sensor Networks",
      description: "Distributed sensor network for real-time environmental monitoring across industrial areas.",
      image: components,
      client: "Green Tech Industries",
      duration: "4 months",
      year: "2024",
      technologies: ["Wireless Sensors", "LoRa", "Data Analytics", "Mobile App"],
      outcomes: [
        "Real-time pollution tracking",
        "Predictive maintenance alerts",
        "Compliance reporting automation"
      ]
    },
    {
      id: 4,
      title: "Smart Agriculture System",
      category: "AgriTech",
      description: "Precision agriculture solution with automated irrigation, crop monitoring, and yield prediction.",
      image: iotKit,
      client: "Modern Farms Cooperative",
      duration: "10 months",
      year: "2023",
      technologies: ["Soil Sensors", "Weather Station", "AI/ML", "Drone Integration"],
      outcomes: [
        "25% increase in crop yield",
        "40% water conservation",
        "Predictive crop health analysis"
      ]
    },
    {
      id: 5,
      title: "Industrial Automation Suite",
      category: "Industrial IoT",
      description: "Complete factory automation system with predictive maintenance and quality control.",
      image: roboticsKit,
      client: "Manufacturing Corp",
      duration: "12 months",
      year: "2022",
      technologies: ["PLC Integration", "Edge Computing", "Machine Learning", "HMI"],
      outcomes: [
        "60% reduction in downtime",
        "Improved product quality",
        "Predictive maintenance system"
      ]
    },
    {
      id: 6,
      title: "Healthcare Monitoring Platform",
      category: "HealthTech",
      description: "Patient monitoring system with wearable sensors and real-time health analytics.",
      image: components,
      client: "City General Hospital",
      duration: "7 months",
      year: "2024",
      technologies: ["Wearable Sensors", "Bluetooth", "Cloud Platform", "Mobile App"],
      outcomes: [
        "Remote patient monitoring",
        "Early warning system",
        "Reduced hospital readmissions"
      ]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Zap className="h-6 w-6" /> },
    { number: "25+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "4+", label: "Years Experience", icon: <Calendar className="h-6 w-6" /> },
    { number: "15+", label: "Technologies", icon: <ExternalLink className="h-6 w-6" /> }
  ];

  const categories = [
    "All Projects",
    "IoT Solutions", 
    "Robotics & AI",
    "Sensor Networks",
    "AgriTech",
    "Industrial IoT",
    "HealthTech"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-navy to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing successful projects and innovative solutions we've delivered for our clients
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-tech-accent/10 rounded-full w-fit">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"} 
                size="sm"
                className={index === 0 ? "bg-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-tech-accent text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Client:</span>
                      <div className="font-semibold">{project.client}</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Duration:</span>
                      <div className="font-semibold">{project.duration}</div>
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-medium text-muted-foreground text-sm">Technologies:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-medium text-muted-foreground text-sm">Key Outcomes:</span>
                    <ul className="mt-2 space-y-1">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-tech-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Testimonials from satisfied clients and partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "STARKYN delivered an exceptional IoT solution that transformed our campus operations. Their technical expertise and dedication to quality is unmatched.",
                author: "Dr. Rajesh Kumar",
                position: "Director, ABC Engineering College",
                rating: 5
              },
              {
                quote: "The autonomous warehouse robot exceeded our expectations. The efficiency gains and cost savings have been remarkable.",
                author: "Sarah Patel",
                position: "Operations Manager, XYZ Logistics",
                rating: 5
              },
              {
                quote: "Professional team with deep technical knowledge. They understood our requirements and delivered a perfect solution on time.",
                author: "Amit Singh",
                position: "CTO, Green Tech Industries",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-tech-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can bring your innovative ideas to life with our expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Discuss Your Project
            </Button>
            <Button size="lg" variant="ghost" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
              View More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;