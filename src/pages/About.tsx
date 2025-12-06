import { Link } from 'react-router-dom';
import { ArrowRight, Award, Building2, Leaf, Target, Eye, Heart, Shield, Clock, Users, Zap, Droplet, Sun, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import QuotePopup from '../components/QuotePopup';
import SEO from '../components/SEO';

export default function About() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SEO
        title="About Perasus Construction - Nearly 20 Years of Excellence in New Jersey, New York & Pennsylvania"
        description="Learn about Perasus Construction - Licensed General Contractor with international expertise. Residential, commercial & public construction services in New Jersey, New York & Pennsylvania."
        canonicalUrl="https://perasusconstruction.com/about"
        ogImage="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
      />
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
        <img
          src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="About Perasus Construction"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        <div className="relative z-20 container mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Award size={16} className="text-primary-light flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">20+ Years of Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              About Us
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed animate-slide-up-delay">
              With nearly two decades of international expertise, we bring world-class construction and project management to New Jersey, New York, and Pennsylvania.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up-delay-2">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <Link
                to="/portfolio"
                className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center justify-center text-sm sm:text-base"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Building Excellence for Nearly 20 Years
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                With nearly two decades of construction and project management experience, Perasus Construction brings together a team of internationally trained professionals who have successfully delivered projects across <span className="font-semibold text-gray-900">Asia, Europe, Africa, and the Americas</span>.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                We provide comprehensive construction, renovation, and remodeling services for residential, commercial, and public buildings throughout <span className="font-semibold text-gray-900">New Jersey, New York, and Pennsylvania</span>.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                As a licensed General Contractor, we offer a full range of capabilities under one roof — including interior design, on-site execution, and complete project coordination. By collaborating with a trusted network of specialized subcontractors, we ensure every project is completed with exceptional craftsmanship and precision.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                From planning and design to permitting, procurement, on-site management, and final delivery, our team manages the entire process seamlessly. Our goal is simple: to provide the highest quality results while ensuring a smooth, transparent, and stress-free experience for our clients.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 md:p-8 my-10">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic">
                  At Perasus Construction, we believe our clients deserve nothing but the best. We operate with integrity, discipline, and a results-driven approach at every stage of the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Leaf size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Environmentally Responsible Construction
              </h2>
              <div className="w-20 h-1 bg-white/50 mx-auto"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 mb-8">
              <p className="text-lg md:text-xl leading-relaxed text-white mb-8">
                As a nature-conscious company, we integrate eco-friendly materials and sustainable practices into our services. Our expertise includes:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Energy-efficient Solutions</h4>
                    <p className="text-white/90 text-sm">Advanced systems to reduce energy consumption</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Droplet size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Water Conservation</h4>
                    <p className="text-white/90 text-sm">Methods to minimize water waste</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Leaf size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Eco-Friendly Materials</h4>
                    <p className="text-white/90 text-sm">Recyclable and environmentally responsible</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Sun size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Insulation & Lighting</h4>
                    <p className="text-white/90 text-sm">Upgraded insulation & LED lighting solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                We aim to build spaces that are not only beautiful and functional, but also environmentally responsible and future-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center p-8 bg-primary/5 rounded-2xl border border-primary/10 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Target size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  To enhance living and working environments by delivering high-quality, functional, and long-lasting structures that improve everyday life.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                  <Eye size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  To become the most trusted, recommended, and preferred construction company in our region through excellence, reliability, and innovation.
                </p>
              </div>

              <div className="text-center p-8 bg-primary/5 rounded-2xl border border-primary/10 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Heart size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Trust', 'Transparency', 'Environmental Responsibility', 'On-Time Delivery', 'Superior Workmanship', 'Customer Satisfaction'].map((value) => (
                    <span key={value} className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full whitespace-nowrap">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Contact us today for a free consultation and let's discuss how we can bring your vision to life with our nearly 20 years of international construction expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="group bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <Link
                to="/services"
                className="bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-black transition-all duration-300 inline-flex items-center justify-center border-2 border-white/20"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </div>
  );
}
