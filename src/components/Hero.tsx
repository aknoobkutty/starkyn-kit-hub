import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Users } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-tech-dark via-tech-navy to-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="Technology Innovation" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/90 to-tech-navy/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Innovation in
              <span className="text-tech-accent block">Technology</span>
              <span className="text-tech-light-blue">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Empowering students, engineers, and innovators with cutting-edge project kits, 
              components, and R&D support. From IoT to AI/ML, we provide the tools to build the future.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-accent">500+</div>
                <div className="text-sm text-gray-400">Project Kits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-light-blue">1000+</div>
                <div className="text-sm text-gray-400">Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">50+</div>
                <div className="text-sm text-gray-400">Partners</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-glow shadow-glow text-lg px-8">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-tech-accent text-tech-accent hover:bg-tech-accent hover:text-white text-lg px-8">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Cpu className="h-12 w-12 text-tech-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Project Kits</h3>
              <p className="text-gray-300">Ready-to-use kits for IoT, Robotics, AI/ML, and more. Perfect for students and professionals.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Zap className="h-12 w-12 text-tech-light-blue mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quality Components</h3>
              <p className="text-gray-300">Premium electronic components, sensors, and modules from trusted manufacturers.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Users className="h-12 w-12 text-primary-glow mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-gray-300">Comprehensive R&D support, training, and consultation for your projects.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-tech-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;