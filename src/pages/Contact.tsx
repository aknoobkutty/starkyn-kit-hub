import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Users } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-tech-accent" />,
      title: "Our Location",
      details: ["4/1c STARKYN TECHNOLOGIES ", "UDUMALEPET, TIRUPPUR   642126", "India"]
    },
    {
      icon: <Phone className="h-6 w-6 text-tech-light-blue" />,
      title: "Phone Numbers",
      details: ["+91 97914 96777"]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Addresse",
      details: ["starkyn.industries@gmail.com"]
    },
    {
      icon: <Clock className="h-6 w-6 text-tech-navy" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  const quickContacts = [
    {
      platform: "WhatsApp",
      contact: "+91 97914 96777",
      description: "Quick support and instant responses",
      color: "bg-green-500"
    },
    {
      platform: "Telegram",
      contact: "@StarkynTech",
      description: "Technical discussions and updates",
      color: "bg-blue-500"
    },
    {
      platform: "LinkedIn",
      contact: "STARKYN Technologies",
      description: "Professional networking and updates",
      color: "bg-blue-700"
    }
  ];

  const departments = [
    { name: "Sales & Enquiries", email: "sales@starkyntech.com", description: "Product information and quotes" },
    { name: "Technical Support", email: "support@starkyntech.com", description: "Technical assistance and troubleshooting" },
    { name: "R&D Services", email: "rnd@starkyntech.com", description: "Project development and consultation" },
    { name: "Training Programs", email: "training@starkyntech.com", description: "Workshops and certification programs" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-navy to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team for any inquiries, support, or to discuss your next project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Send className="h-8 w-8 text-tech-accent" />
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input type="email" id="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input type="tel" id="phone" placeholder="+91 XXXXX XX210" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Institution</Label>
                    <Input id="organization" placeholder="Your company or institution name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Brief description of your inquiry" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your requirements, project scope, timeline, or any specific questions you have..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Inquiry Type</Label>
                    <select id="category" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select inquiry type</option>
                      <option value="product">Product Information</option>
                      <option value="quote">Request Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="training">Training Programs</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>
                  
                  <Button size="lg" className="w-full bg-primary hover:bg-primary-glow shadow-glow">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-tech-accent/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Quick Contact Options</h2>
            <p className="text-xl text-muted-foreground">
              Connect with us instantly through your preferred platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quickContacts.map((contact, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                <div className={`w-16 h-16 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.platform}</h3>
                <p className="text-primary font-medium mb-2">{contact.contact}</p>
                <p className="text-muted-foreground text-sm">{contact.description}</p>
                <Button variant="outline" className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <a href="https://wa.me/919791496777?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services" target="_blank">
                  Connect Now
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Department Contacts</h2>
            <p className="text-xl text-muted-foreground">
              Reach out to the right team for faster assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-tech-accent" />
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium mb-2">{dept.email}</p>
                  <p className="text-muted-foreground text-sm">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Tiruppur industrialized district
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-tech-dark to-tech-navy flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-tech-accent" />
                <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                <p className="text-gray-300">Map integration will be added here</p>
                <Button variant="secondary" className="mt-4">
                  <a href="https://www.google.com/maps/place/10%C2%B031'58.8%22N+77%C2%B018'16.9%22E/@10.5321828,77.3043224,655m/data=!3m1!1e3!4m4!3m3!8m2!3d10.532986!4d77.304687?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D">
                  Directions</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent technical support, we aim for same-day response."
              },
              {
                question: "Do you provide technical support for purchased products?",
                answer: "Yes, we provide comprehensive technical support including documentation, troubleshooting guides, and direct assistance for all our products."
              },
              {
                question: "Can you create custom project kits?",
                answer: "Absolutely! We specialize in creating custom project kits tailored to specific requirements, curricula, or project objectives."
              },
              {
                question: "Do you offer bulk discounts for educational institutions?",
                answer: "Yes, we offer special pricing for educational institutions, bulk orders, and long-term partnerships. Contact our sales team for a custom quote."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;