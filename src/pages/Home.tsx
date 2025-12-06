import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, ArrowRight, Sparkles, X, Building2, Users, Award, Clock, Home as HomeIcon, Briefcase, Hammer, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import QuotePopup from '../components/QuotePopup';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const organizationData = {
    name: 'Perasus Construction',
    description: 'Licensed General Contractor - Construction, Renovation & Project Management in New Jersey, New York, Pennsylvania',
    url: 'https://perasusconstruction.com',
    logo: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/perasus-logo.png',
    telephone: '+1-862-402-9355',
    email: 'info@perasusconstruction.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'New Jersey',
      addressRegion: 'NJ',
      postalCode: '',
      addressCountry: 'US'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    priceRange: '$$$',
    areaServed: [
      {
        '@type': 'State',
        name: 'New Jersey'
      },
      {
        '@type': 'State',
        name: 'New York'
      },
      {
        '@type': 'State',
        name: 'Pennsylvania'
      }
    ],
    sameAs: [
      'https://www.facebook.com/perasusconstruction',
      'https://www.instagram.com/perasusconstruction'
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Perasus Construction - Licensed General Contractor | Design • Build • Project Management"
        description="Licensed General Contractor with 20+ years experience. Commercial & Residential construction, renovation, and project management serving New Jersey, New York, Pennsylvania. Call (862) 402-9355."
        canonicalUrl="https://perasusconstruction.com"
        ogImage="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
      />
      <StructuredData type="LocalBusiness" data={organizationData} />

      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
        <img
          src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />

        <div className="relative z-20 container mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight animate-slide-up">
              Perasus Construction<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">
                Build Your Vision
              </span>
            </h1>

            <div className="space-y-2 mb-6 md:mb-8 animate-slide-up-delay">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-light">
                Design • Build • Project Management
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-200">
                Commercial & Residential Renovations
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Serving New Jersey, New York, Pennsylvania | 20+ Years Experience
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 animate-slide-up-delay-2">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <Link
                to="/portfolio"
                className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center justify-center text-sm sm:text-base"
              >
                View Projects
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">About Perasus Construction</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                20 Years of International Construction Excellence
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                With nearly 20 years of engineering and construction experience, our team is composed of experts with international backgrounds who have served as engineers and managers on numerous large and small-scale projects across Asia, Europe, Africa, and the Americas.
              </p>

              <div className="space-y-3 mb-6 md:mb-8">
                {[
                  'Licensed General Contractor serving New Jersey, New York & Pennsylvania',
                  'Full-service renovation, remodeling and ground-up construction solutions & Interior Design',
                  'Turnkey project management from design to completion',
                  'Eco-friendly materials and energy-efficient solutions',
                  'Trusted network of specialized subcontractors'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Learn More About Us <ChevronRight size={20} />
              </Link>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <img
                    src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/MainpagePerasus.jpg"
                    alt="Commercial construction"
                    width="600"
                    height="400"
                    className="rounded-xl md:rounded-2xl shadow-xl w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <img
                    src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/anasayfaPerrasus.jpg"
                    alt="Renovation project"
                    width="600"
                    height="800"
                    className="rounded-xl md:rounded-2xl shadow-xl w-full h-56 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                  <img
                    src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/HomerenovationPerasus-1.jpg"
                    alt="Interior design"
                    width="600"
                    height="800"
                    className="rounded-xl md:rounded-2xl shadow-xl w-full h-56 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="relative">
                    <img
                      src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/RoofPerasus.jpg"
                      alt="Project completion"
                      width="600"
                      height="400"
                      className="rounded-xl md:rounded-2xl shadow-xl w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-primary text-white px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl shadow-2xl">
                      <div className="text-base md:text-xl font-bold">On-Time</div>
                      <div className="text-xs md:text-sm">Delivery</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 bg-primary text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl">
                <div className="text-2xl md:text-4xl font-bold mb-1">20+</div>
                <div className="text-xs md:text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 md:mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From commercial renovations to residential remodeling, we deliver exceptional results with professional project management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            <Link
              to="/services"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90 group-hover:opacity-95 transition-opacity"></div>
              <div className="relative p-8 md:p-10 text-white">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Commercial Services</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Professional renovation and construction services for offices, restaurants, hotels, retail spaces, and more.
                </p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  Explore Commercial Services <ChevronRight size={20} />
                </div>
              </div>
            </Link>

            <Link
              to="/services"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-dark opacity-90 group-hover:opacity-95 transition-opacity"></div>
              <div className="relative p-8 md:p-10 text-white">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <HomeIcon size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Residential Services</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Complete home renovations including kitchens, bathrooms, basements, outdoor spaces, and full home extensions.
                </p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  Explore Residential Services <ChevronRight size={20} />
                </div>
              </div>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Hammer,
                title: 'Project Design',
                description: 'Architectural design, 3D visualization, and material selection'
              },
              {
                icon: Building2,
                title: 'Project Build',
                description: 'Quality construction with meticulous attention to detail'
              },
              {
                icon: Users,
                title: 'Project Management',
                description: 'Turnkey coordination from planning to completion'
              },
              {
                icon: Lightbulb,
                title: 'Consulting',
                description: 'Energy efficiency, sustainability, and compliance support'
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-light font-semibold text-xs sm:text-sm uppercase tracking-wider">Featured Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6">What We Specialize In</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Restaurant & Cafe Renovations',
                description: 'Complete interior remodeling for restaurants, markets, and cafes',
                image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Commercial'
              },
              {
                title: 'Hotel Interior Design',
                description: 'Guest rooms, lobbies, reception areas, and spa facilities',
                image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Commercial'
              },
              {
                title: 'Kitchen Remodeling',
                description: 'Custom cabinets, countertops, tile, and complete kitchen transformations',
                image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Residential'
              },
              {
                title: 'Bathroom Renovation',
                description: 'Complete bathroom remodeling with waterproofing and modern fixtures',
                image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Residential'
              },
              {
                title: 'HVAC Systems',
                description: 'Commercial and residential heating, ventilation, and cooling installations',
                image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Both'
              },
              {
                title: 'Outdoor Living Spaces',
                description: 'Decks, fences, concrete work, and landscaping solutions',
                image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Residential'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group rounded-xl md:rounded-2xl overflow-hidden bg-brand-blue-dark transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    width="800"
                    height="600"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {service.category}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setTimeout(() => {
                        window.location.href = '/services';
                      }, 300);
                    }}
                    className="inline-flex items-center text-primary text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 md:mb-6">Our Commitment to Excellence</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Trust, transparency, and superior workmanship in every project
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Building2,
                title: 'Licensed & Insured',
                description: 'Fully licensed General Contractor with comprehensive subcontractor network'
              },
              {
                icon: Users,
                title: 'International Expertise',
                description: '20+ years of engineering and construction experience worldwide'
              },
              {
                icon: Award,
                title: 'Quality Guarantee',
                description: 'Superior workmanship with attention to detail and long-term satisfaction'
              },
              {
                icon: Clock,
                title: 'On-Time & On-Budget',
                description: 'Disciplined project management ensuring timely delivery'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-primary-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Recent Projects</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3">Our Work Speaks For Itself</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {[
              { image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Modern Farmhouse Kitchen' },
              { image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80', title: 'Luxury Master Bathroom' },
              { image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Contemporary Kitchen Design' },
              { image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Luxury Vinyl Plank Installation' },
              { image: 'https://images.unsplash.com/photo-1564540583246-934409427776?w=800&q=80', title: 'Spa Master Bath' },
              { image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Gourmet Chef Kitchen' }
            ].map((project, index) => (
              <button
                key={index}
                onClick={() => setLightboxImage(project.image)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width="600"
                  height="600"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">{project.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-orange-100 leading-relaxed">
              Schedule a free consultation today. Our expert team is ready to bring your vision to life with professional design, construction, and project management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
              >
                Get Free Estimate <ArrowRight className="ml-2" size={18} />
              </button>
              <a
                href="tel:8624029355"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
              >
                Call: (862) 402-9355
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-[101]"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-4xl max-h-[80vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Project"
              width="1200"
              height="800"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </div>
  );
}
