import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShoppingCart, Eye, Star } from "lucide-react";
import iotKit from "@/assets/iot-kit.jpg";
import roboticsKit from "@/assets/robotics-kit.jpg";
import components from "@/assets/components.jpg";

const Products = () => {
  const productCategories = [
    {
      id: "iot",
      name: "IoT Development Kits",
      description: "Complete Internet of Things development solutions",
      image: iotKit,
      count: 45
    },
    {
      id: "robotics", 
      name: "Robotics Kits",
      description: "Advanced robotics and automation systems",
      image: roboticsKit,
      count: 32
    },
    {
      id: "ai-ml",
      name: "AI/ML Kits", 
      description: "Artificial Intelligence and Machine Learning platforms",
      image: components,
      count: 28
    },
    {
      id: "arduino",
      name: "Arduino & Raspberry Pi",
      description: "Microcontroller and single-board computer kits",
      image: iotKit,
      count: 67
    },
    {
      id: "wireless",
      name: "Wireless & Sensor Kits",
      description: "Communication and sensing solutions",
      image: components,
      count: 54
    },
    {
      id: "final-year",
      name: "Final Year Project Kits",
      description: "Complete project solutions for engineering students",
      image: roboticsKit,
      count: 89
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Advanced IoT Development Kit",
      description: "Complete IoT solution with ESP32, sensors, and cloud connectivity",
      image: iotKit,
      price: "₹4,999",
      originalPrice: "₹6,999", 
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      features: ["ESP32 WiFi Module", "10+ Sensors", "Cloud Dashboard", "Mobile App"]
    },
    {
      id: 2,
      name: "Smart Robotics Starter Kit",
      description: "Build intelligent robots with AI-powered components",
      image: roboticsKit,
      price: "₹7,499",
      originalPrice: "₹9,999",
      rating: 4.9,
      reviews: 89,
      badge: "New",
      features: ["Servo Motors", "Ultrasonic Sensors", "Camera Module", "AI Processing"]
    },
    {
      id: 3,
      name: "Professional Component Bundle",
      description: "Essential electronic components for advanced projects",
      image: components,
      price: "₹2,999",
      originalPrice: "₹3,999",
      rating: 4.7,
      reviews: 256,
      badge: "Popular",
      features: ["200+ Components", "Breadboards", "Jumper Wires", "Storage Box"]
    }
  ];

  const components_list = [
    { category: "Microcontrollers", items: ["Arduino Uno", "ESP32", "Raspberry Pi 4", "STM32"] },
    { category: "Sensors", items: ["Temperature", "Humidity", "Motion", "Gas", "Pressure"] },
    { category: "Motors & Drivers", items: ["Servo Motors", "Stepper Motors", "DC Motors", "Motor Drivers"] },
    { category: "Power Electronics", items: ["Batteries", "Voltage Regulators", "Solar Panels", "Capacitors"] },
    { category: "Communication", items: ["WiFi Modules", "Bluetooth", "LoRa", "GSM/GPS"] },
    { category: "Display & Interface", items: ["LCD Displays", "OLED", "Touch Screens", "LEDs"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-navy to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive collection of project kits and electronic components
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products, kits, components..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                Sort by Price
              </Button>
              <Button variant="outline" size="sm">
                Category
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Project Kit Categories</h2>
            <p className="text-xl text-muted-foreground">
              Choose from our specialized kit collections
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {category.count} Items
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Browse Category
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground">
              Our most popular and highly-rated products
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-tech-accent text-white">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-tech-accent rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary-glow">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Electronic Components</h2>
            <p className="text-xl text-muted-foreground">
              High-quality components for all your project needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components_list.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item}</span>
                        <Button variant="ghost" size="sm" className="text-xs">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Browse All
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-tech-dark to-tech-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Products?</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Quality Assured", description: "All products tested and certified for reliability" },
              { title: "Fast Shipping", description: "Quick delivery across India with tracking support" },
              { title: "Expert Support", description: "Technical assistance and documentation included" },
              { title: "Best Prices", description: "Competitive pricing with bulk order discounts" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
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
          <h2 className="text-4xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Can't find what you're looking for? We create custom kits and solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Request Custom Kit
            </Button>
            <Button size="lg" variant="ghost" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;