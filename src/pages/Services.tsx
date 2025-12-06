import { ArrowRight, Phone, CheckCircle2, Briefcase, Home as HomeIcon, Store, Hotel, Building, School, Palette, Zap, Wind, Droplets, Sparkles } from 'lucide-react';
import { useState } from 'react';
import QuotePopup from '../components/QuotePopup';
import SEO from '../components/SEO';

export default function Services() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'commercial' | 'residential'>('commercial');

  const commercialServices = [
    {
      icon: Store,
      title: 'Restaurants / Markets / Cafes',
      description: 'Complete interior remodeling and concept upgrades for food service establishments',
      features: [
        'Partition systems and space planning',
        'Commercial flooring installation',
        'Kitchen equipment integration',
        'Dining area design and renovation',
        'Bar and counter installations',
        'Commercial lighting systems'
      ]
    },
    {
      icon: Hotel,
      title: 'Hotel Interior Renovation',
      description: 'Comprehensive hotel renovation services for guest satisfaction',
      features: [
        'Guest room renovations',
        'Lobby and reception areas',
        'SPA facilities design',
        'Corridor and hallway upgrades',
        'Hotel furniture installation',
        'Lighting and ambiance creation'
      ]
    },
    {
      icon: Building,
      title: 'Bank & Office Renovation',
      description: 'Professional bank and office interior design with security infrastructure',
      features: [
        'Security infrastructure integration',
        'Professional interior design',
        'Teller station installations',
        'Vault room modifications',
        'Customer service area design',
        'Modern lighting and finishes'
      ]
    },
    {
      icon: School,
      title: 'Schools & Clinics',
      description: 'Educational and healthcare facility renovation and modernization',
      features: [
        'Classroom renovations',
        'Dental clinic interior design',
        'Healthcare center upgrades',
        'ADA compliance modifications',
        'Modern lighting and HVAC',
        'Durable and easy-to-clean finishes'
      ]
    },
    {
      icon: HomeIcon,
      title: 'Airbnb / Short-Term Rental Design',
      description: 'Professional interior design and transformation for rental properties',
      features: [
        'Complete interior makeover',
        'Furniture and decor consultation',
        'Kitchen and bathroom upgrades',
        'Modern and appealing aesthetics',
        'Durable and low-maintenance materials',
        'Photography-ready finishes'
      ]
    },
    {
      icon: Palette,
      title: 'Commercial Façade & Signage',
      description: 'Exterior cladding, entrance design, and signage infrastructure',
      features: [
        'Commercial façade cladding',
        'Entrance design and installation',
        'Signage infrastructure preparation',
        'Storefront renovations',
        'Awning and canopy installation',
        'Exterior lighting integration'
      ]
    },
    {
      icon: Zap,
      title: 'Electrical & Plumbing',
      description: 'Professional electrical and plumbing infrastructure installations',
      features: [
        'Electrical panel upgrades',
        'Commercial lighting design',
        'LED lighting installations',
        'Emergency lighting systems',
        'Plumbing installations and repairs',
        'Code-compliant installations'
      ]
    },
    {
      icon: Wind,
      title: 'HVAC (Commercial)',
      description: 'Commercial heating, ventilation, and air conditioning systems',
      features: [
        'Central heating systems',
        'Ventilation design and installation',
        'Commercial cooling solutions',
        'Ductwork installation',
        'Energy-efficient HVAC systems',
        'Regular maintenance programs'
      ]
    },
    {
      icon: Sparkles,
      title: 'Outdoor Commercial Seating',
      description: 'Outdoor seating areas and customer waiting spaces',
      features: [
        'Deck construction',
        'Patio design and installation',
        'Weather-resistant materials',
        'Pergola and shade structures',
        'Outdoor furniture integration',
        'Landscaping coordination'
      ]
    },
    {
      icon: Droplets,
      title: 'Power Washing',
      description: 'Professional power washing for commercial properties',
      features: [
        'Restaurant kitchen cleaning',
        'Entryway and sidewalk washing',
        'Parking lot cleaning',
        'Building exterior washing',
        'Graffiti removal',
        'Regular maintenance services'
      ]
    }
  ];

  const residentialServices = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Professional interior design services with 3D visualization',
      features: [
        'Interior design planning',
        '3D rendering and visualization',
        'Material and color selection',
        'Space planning and optimization',
        'Design-build coordination',
        'Custom design solutions'
      ]
    },
    {
      icon: Store,
      title: 'Kitchen Remodeling',
      description: 'Complete kitchen transformation with custom solutions',
      features: [
        'Cabinet installation (custom & stock)',
        'Countertop installation (Quartz, Granite)',
        'Tile and flooring upgrades',
        'Backsplash installation',
        'Modern appliance integration',
        'Lighting and electrical upgrades'
      ]
    },
    {
      icon: Droplets,
      title: 'Bathroom Remodeling',
      description: 'Full bathroom renovation with waterproofing',
      features: [
        'Waterproofing systems',
        'Shower and tub upgrades',
        'Tile installation (floor & wall)',
        'Vanity and fixture installation',
        'Modern plumbing fixtures',
        'Ventilation improvements'
      ]
    },
    {
      icon: Building,
      title: 'Basement Renovation',
      description: 'Transform your basement into functional living space',
      features: [
        'Framing and drywall',
        'Flooring installation',
        'Electrical and lighting',
        'Plumbing for bathrooms',
        'HVAC extensions',
        'Egress window installation'
      ]
    },
    {
      icon: Sparkles,
      title: 'Flooring (Hardwood & Tile)',
      description: 'Professional flooring installation and refinishing',
      features: [
        'Hardwood sanding and staining',
        'Hardwood polishing',
        'Luxury vinyl plank (LVP)',
        'Ceramic and porcelain tile',
        'Natural stone installation',
        'Subfloor preparation'
      ]
    },
    {
      icon: HomeIcon,
      title: 'Home Theater Installation',
      description: 'Custom home theater room design and installation',
      features: [
        'Acoustic treatment',
        'Custom seating installation',
        'Lighting design',
        'Equipment integration',
        'Sound system setup',
        'Décor and finishes'
      ]
    },
    {
      icon: Wind,
      title: 'HVAC Installation',
      description: 'Residential heating, cooling, and ventilation systems',
      features: [
        'Boiler installation',
        'Central ventilation systems',
        'Split AC systems',
        'Ductwork installation',
        'Thermostat upgrades',
        'Energy-efficient solutions'
      ]
    },
    {
      icon: Zap,
      title: 'Electrical & Plumbing',
      description: 'Comprehensive electrical and plumbing upgrades',
      features: [
        'Electrical panel upgrades',
        'Outlet and switch installation',
        'Lighting fixture installation',
        'Plumbing repairs and upgrades',
        'Water heater installation',
        'Fixture and faucet replacement'
      ]
    },
    {
      icon: Store,
      title: 'Garage Epoxy Flooring',
      description: 'Durable and attractive garage floor coatings',
      features: [
        'Surface preparation',
        'Epoxy coating application',
        'Chip flooring options',
        'Polyurea topcoats',
        'Custom color options',
        'Slip-resistant finishes'
      ]
    },
    {
      icon: Building,
      title: 'Deck & Fence Construction',
      description: 'Outdoor living spaces with quality materials',
      features: [
        'Wooden deck construction',
        'Composite deck installation',
        'Fence installation (wood, vinyl)',
        'Retaining wall construction',
        'Deck staining and sealing',
        'Custom railing designs'
      ]
    },
    {
      icon: Sparkles,
      title: 'Concrete & Paver Installation',
      description: 'Durable concrete work and decorative pavers',
      features: [
        'Concrete sidewalk pouring',
        'Driveway installation',
        'Paver stone installation',
        'Patio construction',
        'Steps and walkways',
        'Decorative concrete finishes'
      ]
    },
    {
      icon: Droplets,
      title: 'Gutter Services',
      description: 'Complete gutter cleaning, repair, and installation',
      features: [
        'Gutter cleaning',
        'Gutter repair',
        'New gutter installation',
        'Downspout installation',
        'Gutter guard installation',
        'Drainage solutions'
      ]
    },
    {
      icon: HomeIcon,
      title: 'Power Washing',
      description: 'Residential exterior cleaning services',
      features: [
        'Exterior wall cleaning',
        'Driveway washing',
        'Garage floor cleaning',
        'Deck and fence cleaning',
        'Siding cleaning',
        'Patio and walkway washing'
      ]
    },
    {
      icon: Building,
      title: 'Roof & Siding',
      description: 'Roofing repairs, replacement, and siding installation',
      features: [
        'Roof repair and replacement',
        'Waterproofing systems',
        'Siding installation (vinyl, fiber cement)',
        'Soffit and fascia work',
        'Gutter integration',
        'Exterior trim and finishing'
      ]
    },
    {
      icon: HomeIcon,
      title: 'Home Extensions',
      description: 'Expand your home with verandas, garages, and sunrooms',
      features: [
        'Sunroom construction',
        'Veranda additions',
        'Garage construction',
        'Room additions',
        'Foundation work',
        'Permits and compliance'
      ]
    }
  ];

  const currentServices = activeCategory === 'commercial' ? commercialServices : residentialServices;

  return (
    <div className="min-h-screen">
      <SEO
        title="Construction Services - Commercial & Residential | Perasus Construction"
        description="Comprehensive construction and renovation services in New Jersey, New York, Pennsylvania. Commercial: restaurants, hotels, offices. Residential: kitchens, bathrooms, HVAC, outdoor spaces."
        canonicalUrl="https://perasusconstruction.com/services"
        ogImage="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
      />

      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
        <img
          src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Construction services"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        <div className="relative z-20 container mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Briefcase size={16} className="text-primary-light flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Commercial & Residential Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Our Services
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed animate-slide-up-delay">
              Comprehensive construction and renovation solutions for commercial and residential projects
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up-delay-2">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <a
                href="tel:8624029355"
                className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="mr-2" size={18} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="inline-flex flex-col sm:flex-row rounded-xl border-2 border-gray-200 p-1.5 bg-gray-50 shadow-md w-full sm:w-auto max-w-md sm:max-w-none">
              <button
                onClick={() => setActiveCategory('commercial')}
                className={`px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base ${
                  activeCategory === 'commercial'
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Briefcase size={20} className="flex-shrink-0" />
                <span className="whitespace-nowrap">Commercial Services</span>
              </button>
              <button
                onClick={() => setActiveCategory('residential')}
                className={`px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base mt-1.5 sm:mt-0 ${
                  activeCategory === 'residential'
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <HomeIcon size={20} className="flex-shrink-0" />
                <span className="whitespace-nowrap">Residential Services</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
                >
                  <div className={`p-6 md:p-8 ${activeCategory === 'commercial' ? 'bg-gradient-to-br from-primary/10 to-primary/5' : 'bg-gradient-to-br from-gray-100 to-gray-50'}`}>
                    <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-md">
                      <Icon className={activeCategory === 'commercial' ? 'text-primary' : 'text-gray-700'} size={28} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-xs md:text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsQuotePopupOpen(true)}
                      className="w-full bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2"
                    >
                      Request Quote <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                From concept to completion, we manage every detail professionally
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  step: '01',
                  title: 'Project Design',
                  description: 'Architectural design, 3D visualization, material selection, and detailed planning'
                },
                {
                  step: '02',
                  title: 'Project Build',
                  description: 'Professional construction with quality materials and expert craftsmanship'
                },
                {
                  step: '03',
                  title: 'Project Management',
                  description: 'Complete coordination, on-time delivery, and quality assurance'
                }
              ].map((item, index) => (
                <div key={index} className="relative bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">{item.step}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-orange-100 leading-relaxed">
              Contact us today for a free consultation and detailed estimate. Our expert team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:8624029355"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Call: (862) 402-9355
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </div>
  );
}
