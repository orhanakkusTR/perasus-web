import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle2, Calendar, Building2, Home as HomeIcon, Hammer } from 'lucide-react';
import QuotePopup from '../components/QuotePopup';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function Gallery() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const projects = [
    {
      title: 'Modern Farmhouse Kitchen',
      category: 'Kitchens',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/KitcehnPerasus.jpg',
      description: 'Complete kitchen transformation with white shaker cabinets and marble countertops',
      location: 'Cherry Hill, NJ',
      year: '2024'
    },
    {
      title: 'Luxury Master Bathroom',
      category: 'Bathrooms',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/BathroomPerasus.jpg',
      description: 'Spa-inspired bathroom with walk-in shower and soaking tub',
      location: 'Moorestown, NJ',
      year: '2024'
    },
    {
      title: 'Contemporary Kitchen Design',
      category: 'Kitchens',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/KitchenPerasus02.jpg',
      description: 'Sleek modern kitchen with custom dark wood cabinets',
      location: 'Haddonfield, NJ',
      year: '2023'
    },
    {
      title: 'Classic White Kitchen',
      category: 'Kitchens',
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Timeless white kitchen with subway tile and pendant lighting',
      location: 'Marlton, NJ',
      year: '2024'
    },
    {
      title: 'Luxury Vinyl Plank Installation',
      category: 'Flooring',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/FloorPerasus.jpg',
      description: 'Premium LVP flooring throughout modern home',
      location: 'Voorhees, NJ',
      year: '2024'
    },
    {
      title: 'Guest Bathroom Refresh',
      category: 'Bathrooms',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern powder room with floating vanity and geometric tile',
      location: 'Cherry Hill, NJ',
      year: '2023'
    },
    {
      title: 'Gourmet Chef Kitchen',
      category: 'Kitchens',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional-grade kitchen with quartz waterfall island',
      location: 'Haddonfield, NJ',
      year: '2024'
    },
    {
      title: 'Spa Master Bath',
      category: 'Bathrooms',
      image: 'https://images.unsplash.com/photo-1564540583246-934409427776?w=800&q=80',
      description: 'Luxurious retreat with heated floors and custom lighting',
      location: 'Moorestown, NJ',
      year: '2023'
    },
    {
      title: 'Open Concept Renovation',
      category: 'Full Renovations',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/Basementperasus01.jpg',
      description: 'Complete home transformation with kitchen and living space redesign',
      location: 'Cherry Hill, NJ',
      year: '2024'
    },
    {
      title: 'Transitional Kitchen',
      category: 'Kitchens',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/TransitionKitcehnPerasus.jpg',
      description: 'Perfect blend of traditional and contemporary design elements',
      location: 'Marlton, NJ',
      year: '2023'
    },
    {
      title: 'Commercial Office Renovation',
      category: 'Commercial',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/CommercialOfficePerasus.jpg',
      description: 'Complete office space transformation with modern finishes',
      location: 'Philadelphia, PA',
      year: '2024'
    },
    {
      title: 'Kids Bathroom Makeover',
      category: 'Bathrooms',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
      description: 'Fun and functional bathroom designed for family living',
      location: 'Cherry Hill, NJ',
      year: '2023'
    },
    {
      title: 'Hardwood Floor Refinishing',
      category: 'Flooring',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/Harwoodperasus.jpg',
      description: 'Beautiful oak hardwood restoration and refinishing',
      location: 'Haddonfield, NJ',
      year: '2024'
    },
    {
      title: 'Modern Restaurant Build-Out',
      category: 'Commercial',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/RestaurantPerasus.jpg',
      description: 'Full commercial kitchen and dining area construction',
      location: 'New York, NY',
      year: '2023'
    },
    {
      title: 'Whole House Renovation',
      category: 'Full Renovations',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/12/HomerenovationPerasus.jpg',
      description: 'Complete home renovation including all rooms and finishes',
      location: 'Voorhees, NJ',
      year: '2024'
    }
  ];

  const portfolioData = {
    name: 'Perasus Construction Portfolio',
    description: 'View our completed projects including kitchen renovations, bathroom remodels, flooring installations, and commercial construction in New Jersey, New York, and Pennsylvania.',
    url: 'https://perasusconstruction.com/portfolio'
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Projects & Portfolio - Perasus Construction | Kitchen, Bathroom & Commercial Renovations"
        description="Browse our portfolio of completed construction projects in New Jersey, New York & Pennsylvania. Kitchen renovations, bathroom remodels, flooring, and commercial construction. 20+ years experience."
        canonicalUrl="https://perasusconstruction.com/portfolio"
        ogImage="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
      />
      <StructuredData type="BreadcrumbList" data={portfolioData} />

      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
        <img
          src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Construction projects portfolio"
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
              Our Portfolio
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed animate-slide-up-delay">
              Explore our collection of stunning transformations across residential and commercial projects in New Jersey, New York, and Pennsylvania
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up-delay-2">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <Calendar size={18} className="mr-2" />
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center justify-center text-sm sm:text-base"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-primary-dark font-semibold text-sm uppercase tracking-wider">Featured Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
              {projects.length} Projects
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="bg-gradient-to-r from-primary to-primary-dark p-5 md:p-6 flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      {project.category}
                    </span>
                    <span className="text-xs text-white/80">{project.year}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-white/90 mb-3 line-clamp-2">{project.description}</p>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <CheckCircle2 size={14} />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Project Gallery</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 md:mb-6">Featured Work</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of stunning transformations
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative break-inside-avoid mb-4 md:mb-6 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold text-white mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-xs text-white/80">{project.location} • {project.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-primary-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4">Our Promise</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Every project we undertake is a testament to our commitment to excellence and customer satisfaction
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Building2,
                  number: '500+',
                  label: 'Completed Projects',
                  description: 'Successfully delivered transformations across New Jersey, New York, Pennsylvania'
                },
                {
                  icon: HomeIcon,
                  number: '100%',
                  label: 'Client Satisfaction',
                  description: 'Dedicated to exceeding expectations on every job'
                },
                {
                  icon: Hammer,
                  number: '20+',
                  label: 'Years Experience',
                  description: 'International expertise in construction & engineering'
                }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="text-primary" size={32} />
                      </div>
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-3">{stat.number}</div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{stat.label}</div>
                    <div className="text-sm sm:text-base text-gray-600">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">Ready to Create Your Dream Space?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-white/90">
              Let's discuss your project and bring your vision to life. Get your free consultation and estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="group bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Get Free Estimate <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </div>
  );
}
