import { ArrowRight, Phone, Globe, Search, Scale, Building2 } from 'lucide-react';
import { useState } from 'react';
import QuotePopup from '../components/QuotePopup';
import SEO from '../components/SEO';

export default function RealEstateInvestment() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const services = [
    {
      icon: Search,
      title: 'Property Selection & Investment Consulting',
      description:
        'We analyze the best residential and commercial property options based on your investment goals and provide tailored recommendations — along with design strategies to enhance market value.'
    },
    {
      icon: Scale,
      title: 'Legal Process Management',
      description:
        'Purchase agreements, title transfers, and all legal procedures are handled in partnership with our trusted network of experienced real estate agents and attorneys.'
    },
    {
      icon: Building2,
      title: 'Professional Support for Commercial Properties',
      description:
        'For rental properties, office buildings, retail spaces, and more, we offer in-depth investment analysis and feasibility studies to guide your decision-making.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Real Estate Investment in the U.S. | Perasus Construction"
        description="End-to-end U.S. real estate investment services for international investors — property selection, legal process management, and professional support for residential and commercial properties."
        canonicalUrl="https://www.perasusconstruction.com/real-estate-investment"
        ogImage="/images/CommercialOfficePerasus.jpg"
      />

      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
        <img
          src="/images/CommercialOfficePerasus.jpg"
          alt="Real Estate Investment in the U.S. with Perasus Construction"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        <div className="relative z-20 container mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Globe size={16} className="text-primary-light flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">International Investment Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Real Estate Investment in the U.S. from Anywhere in the World
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed animate-slide-up-delay">
              We provide international investors with a seamless, end-to-end service for purchasing residential or commercial properties in the United States — ensuring a safe and stress-free experience with the support of our expert team.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up-delay-2">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <a
                href="tel:8624029355"
                className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone size={18} />
                (862) 402-9355
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Partner for U.S. Property Investment
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Whether you're looking for a home, retail space, office, warehouse, or an income-generating investment property, we stand by your side at every stage of the process.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 md:p-8 my-10">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic">
                  At Perasus Construction, we believe every square foot is an opportunity — to grow, generate income, and create long-term value. Whether you're investing in a commercial property or renovating a home to increase its market potential, we offer smart solutions designed to maximize your returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                How We Support Your Investment
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="text-center p-8 bg-primary/5 rounded-2xl border border-primary/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get a Free Consultation
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Ready to invest in U.S. real estate? Contact our expert team today and let us guide you through a safe, seamless, and profitable investment journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="group bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <a
                href="tel:8624029355"
                className="bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-black transition-all duration-300 inline-flex items-center justify-center gap-2 border-2 border-white/20"
              >
                <Phone size={20} />
                (862) 402-9355
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </div>
  );
}
