import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-tech-accent" />,
      title: "Innovation",
      description: "Constantly pushing the boundaries of technology to create solutions that matter."
    },
    {
      icon: <Award className="h-8 w-8 text-tech-light-blue" />,
      title: "Quality",
      description: "Committed to delivering premium products and services that exceed expectations."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Education",
      description: "Empowering students and professionals with knowledge and practical skills."
    },
    {
      icon: <Rocket className="h-8 w-8 text-tech-navy" />,
      title: "Growth",
      description: "Supporting the growth of our partners, customers, and the tech community."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "STARKYN TECHNOLOGIES LLP established with a vision to innovate." },
    { year: "2021", title: "First Product Launch", description: "Launched our first line of IoT development kits." },
    { year: "2022", title: "Partnership Program", description: "Established partnerships with leading educational institutions." },
    { year: "2023", title: "R&D Excellence", description: "Expanded R&D capabilities and launched advanced robotics kits." },
    { year: "2024", title: "Market Leadership", description: "Recognized as a leading provider of technology solutions." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-navy to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About STARKYN</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a technology and innovation company dedicated to empowering students, engineers, 
              and innovators with cutting-edge solutions and comprehensive support.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                STARKYN TECHNOLOGIES LLP was born from a simple yet powerful vision: to bridge the gap 
                between theoretical knowledge and practical innovation. Founded by a team of passionate 
                engineers and educators, we recognized the need for high-quality, accessible technology 
                solutions in the educational and professional sectors.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a small initiative to support local engineering students has grown into 
                a comprehensive technology solutions provider, serving institutions, professionals, and 
                innovators across various domains.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to innovate and expand our offerings, always staying true to our 
                core mission of making advanced technology accessible and practical for everyone.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-tech-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Products Available</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-tech-light-blue mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Students Served</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Partner Institutions</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-tech-navy mb-2">1+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-l-4 border-l-tech-accent">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-tech-accent" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize access to advanced technology by providing high-quality project kits, 
                  components, and comprehensive R&D support. We strive to foster innovation, enable 
                  practical learning, and support the next generation of technology leaders.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-l-4 border-l-tech-light-blue">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Eye className="h-8 w-8 text-tech-light-blue" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading catalyst for technology innovation and education, creating a world 
                  where cutting-edge technology is accessible to all, enabling breakthrough innovations 
                  and transforming ideas into reality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-tech-accent/10 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section
      <section className="py-20 bg-gradient-to-r from-tech-dark to-tech-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300">
              Key milestones in our growth and innovation story
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-tech-accent/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="text-2xl font-bold text-tech-accent">{milestone.year}</div>
                        </div>
                        <CardTitle className="text-white">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative flex items-center justify-center w-4 h-4">
                    <div className="w-4 h-4 bg-tech-accent rounded-full border-4 border-tech-dark"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Commitment</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are committed to excellence in everything we do. Our team of experienced engineers, 
              educators, and innovators work tirelessly to ensure that our products and services 
              meet the highest standards of quality and reliability. We believe in the power of 
              technology to transform lives and create a better future for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;