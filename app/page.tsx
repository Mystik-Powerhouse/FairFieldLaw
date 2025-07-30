"use client"

import React from 'react';
import { Scale, Shield, Users, Phone, Mail, MapPin, Clock, ChevronRight, Star, Award, BookOpen } from 'lucide-react';

const LawFirmWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Scale className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-bold">FairfieldLaw</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#team" className="hover:text-amber-400 transition-colors">Team</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>
          <button className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-lg transition-colors">
            Free Consultation
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative text-white py-24 overflow-hidden">
  {/* Background image with blur */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: 'url(image2.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(6px)',
      transform: 'scale(1.05)' // optional: slightly zoom in for better edge blur
    }}
  ></div>

  {/* Color overlay for better contrast */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-amber-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 to-gray-200 bg-clip-text text-transparent">
                Your Legal Shield
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-black leading-relaxed">
              Committed to safeguarding your intellectual property with expert legal advice and representation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Get Legal Protection
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">About Us</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                FairfieldLaw is a distinguished law firm specializing in copyright and intellectual property law. 
                With a focus on providing exceptional services such as DMCA takedowns, consultations, and legal protection, 
                our team of experienced lawyers ensures the highest level of professionalism and efficiency.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="image.png" 
                  alt="Legal documents and gavel"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start mt-12">
            <div className="lg:order-2">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our core values revolve around empowering and protecting creators. We are dedicated to helping 
                individuals and businesses navigate the complexities of copyright and intellectual property law 
                with clarity and confidence. At the heart of our practice is a client-first mindset — we believe 
                in delivering thoughtful, tailored legal solutions that safeguard the ideas, brands, and innovations 
                that matter most.
              </p>
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
            <div className="lg:order-1">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-sm text-gray-600">Cases Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to protect your intellectual property and creative assets
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">DMCA Takedowns</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Swift and effective removal of infringing content across all major platforms and websites.
              </p>
              <button className="text-amber-600 font-semibold flex items-center hover:text-amber-700">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Scale className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">IP Consultations</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert guidance on copyright registration, trademark protection, and IP strategy development.
              </p>
              <button className="text-amber-600 font-semibold flex items-center hover:text-amber-700">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Legal Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive legal representation for copyright infringement and IP disputes.
              </p>
              <button className="text-amber-600 font-semibold flex items-center hover:text-amber-700">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of legal professionals is dedicated to safeguarding your rights and offering expert legal counsel
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <img 
                src="istockphoto-1492247375-612x612.jpg"
                alt="Malcolm Deshawn"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Rebecca Langford</h3>
                <p className="text-amber-600 font-semibold mb-4">Senior Attorney</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With a wealth of experience in intellectual property law, Rebecca is committed to providing 
                  top-notch legal services to our clients.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-700">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>(203) 555-0198</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>rebecca.langford@fairfieldlawgroup.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <img 
                src="istockphoto-1475634137-612x612.jpg"
                alt="Alexander Whitmore"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thomas Caldwell</h3>
                <p className="text-amber-600 font-semibold mb-4">Legal Consultant</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Thomas' expertise in copyright law ensures our clients receive tailored legal solutions 
                  that protect their creative assets effectively.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-700">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>(203) 555-0198</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>thomas.caldwell@fairfieldlawgroup.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <img 
                src="istockphoto-1445193966-612x612.jpg"
                alt="Victoria Langford"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Elena Martinez</h3>
                <p className="text-amber-600 font-semibold mb-4">Specialist</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Elenas's focus on intellectual property intricacies allows her to provide specialized 
                  advice that ensures clients' intellectual creations are safeguarded.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-700">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>(203) 555-0198</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>rebecca.langford@fairfieldlawgroup.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about our services</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "FairfieldLaw provided exceptional service in protecting my creative work. Their DMCA takedown 
                process was swift and effective. Highly recommended!"
              </p>
              <div className="font-semibold text-slate-900">Sarah Johnson</div>
              <div className="text-gray-600">Digital Artist</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Professional, knowledgeable, and results-driven. The team helped us navigate complex IP issues 
                with confidence and achieved excellent outcomes."
              </p>
              <div className="font-semibold text-slate-900">Michael Chen</div>
              <div className="text-gray-600">Tech Entrepreneur</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-gray-300">Get in touch for a free consultation</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">255 Westport Avenue, Suite 300<br />Stamford, CT 06901</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">(203) 555-0198</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@FairfieldLaw.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <div className="text-gray-300 space-y-1">
                      <p>Mon - Fri: 8:00 am – 8:00 pm</p>
                      <p>Saturday: 9:00 am – 7:00 pm</p>
                      <p>Sunday: 9:00 am – 9:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-slate-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-slate-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-slate-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-slate-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                ></textarea>
                <button
                  onClick={() => alert('Message sent! We will get back to you soon.')}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold text-white">FairfieldLaw</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Protecting your intellectual property with expert legal guidance and unwavering dedication.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Copyright Law</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">DMCA Takedowns</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Trademark Protection</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">IP Litigation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p>(203) 555-0198</p>
                <p>info@FairfieldLaw.com</p>
                <p>100 Broad Street, Suite 210<br />Stamford, CT 06901</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p>&copy; 2025 FairfieldLaw. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LawFirmWebsite;