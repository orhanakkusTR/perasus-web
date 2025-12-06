import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Sparkles, Navigation, Calendar, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';
import ChristmasDealPopup from '../components/ChristmasDealPopup';
import QuotePopup from '../components/QuotePopup';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isChristmasPopupOpen, setIsChristmasPopupOpen] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const currentDate = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short'
      });

      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service || 'Not specified',
          message: formData.message
        }]);

      if (dbError) {
        console.error('Database error:', dbError);
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service || 'Not specified',
        message: formData.message,
        current_date: currentDate
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Perasus Construction - Free Quote (862) 402-9355 - New Jersey, New York & Pennsylvania"
        description="Get in touch with Perasus Construction for your construction project in New Jersey, New York & Pennsylvania. Call (862) 402-9355 for a free consultation."
        canonicalUrl="https://perasusconstruction.com/contact"
        ogImage="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
      />
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
        <img
          src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Contact Perasus Construction"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        <div className="relative z-20 container mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Mail size={16} className="text-primary-light flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Let's Start Your Project</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Get In Touch
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed animate-slide-up-delay">
              Ready to start your construction project? We're here to help bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up-delay-2">
              <a
                href="tel:8624029355"
                className="group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="mr-2" size={18} />
                Call Us Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="mailto:info@perasusconstruction.com"
                className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 rounded-lg">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-50 border-2 border-red-500 text-red-800 px-6 py-4 rounded-lg">
                  <p className="font-semibold">Something went wrong!</p>
                  <p className="text-sm">Please try again or call us directly at (862) 402-9355</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="(XXX) XXX-XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="residential">Residential Construction</option>
                      <option value="kitchen">Kitchen Remodeling</option>
                      <option value="bathroom">Bathroom Remodeling</option>
                      <option value="flooring">Flooring Installation</option>
                      <option value="hvac">HVAC Services</option>
                      <option value="electrical">Electrical & Plumbing</option>
                      <option value="outdoor">Outdoor Projects</option>
                      <option value="renovation">Full Property Renovation</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-[1.02] inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by Perasus Construction regarding your project.
                </p>
              </form>

              <div className="mt-8 bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Schedule a Consultation</h3>
                <p className="leading-relaxed mb-6">
                  Let's discuss your project in detail. Our expert team is ready to provide professional guidance and free estimates.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:8624029355"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>
                  <button
                    onClick={() => setIsQuotePopupOpen(true)}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    <Calendar size={20} />
                    Request Free Quote
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/20 backdrop-blur-md rounded-full p-2.5">
                      <Sparkles size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                  </div>
                  <div className="space-y-3 text-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full p-1 mt-1">
                        <Phone size={14} className="text-primary" />
                      </div>
                      <p className="text-sm">20+ Years of International Experience</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full p-1 mt-1">
                        <Phone size={14} className="text-primary" />
                      </div>
                      <p className="text-sm">Insured Professionals</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full p-1 mt-1">
                        <Phone size={14} className="text-primary" />
                      </div>
                      <p className="text-sm">Quality Workmanship Guaranteed</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full p-1 mt-1">
                        <Phone size={14} className="text-primary" />
                      </div>
                      <p className="text-sm">Serving New Jersey, New York & Pennsylvania</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
                  <p className="text-gray-600 font-medium mb-6">Your Perasus Team</p>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <Phone className="text-primary" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                          <a href="tel:8624029355" className="text-gray-600 hover:text-primary transition-colors">
                            (862) 402-9355
                          </a>
                          <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <Mail className="text-primary" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                          <a href="mailto:info@perasusconstruction.com" className="text-gray-600 hover:text-primary transition-colors break-all">
                            info@perasusconstruction.com
                          </a>
                          <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <MapPin className="text-primary" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                          <p className="text-gray-600">
                            New Jersey, New York & Pennsylvania
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <Clock className="text-primary" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                          <div className="text-gray-600 space-y-1 text-sm">
                            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-600/10 p-3 rounded-lg flex-shrink-0">
                          <MessageCircle className="text-green-600" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                          <a href="https://wa.me/18629300170" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                            +1 (862) 930-0170
                          </a>
                          <p className="text-sm text-gray-500 mt-1">Start Your Project</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-white/90 max-w-3xl mx-auto">
              Schedule your free consultation today and let's discuss your construction project
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:8624029355"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Phone size={20} />
                Call Now: (862) 402-9355
              </a>
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Calendar size={20} />
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-teal-100 text-primary-dark px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">FAQ</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our remodeling services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: '⏱️',
                  question: 'How long does a typical kitchen remodel take?',
                  answer: 'Most kitchen remodels take 4-6 weeks from start to finish, depending on the scope of work. We provide a detailed timeline during your consultation.'
                },
                {
                  icon: '💬',
                  question: 'Do you offer free consultations?',
                  answer: 'Yes! We offer complimentary in-home consultations to discuss your project, take measurements, and provide design recommendations.'
                },
                {
                  icon: '🛡️',
                  question: 'Are you licensed and insured?',
                  answer: 'Absolutely. We are fully licensed, bonded, and insured. We maintain all necessary certifications and insurance to protect you and your home.'
                },
                {
                  icon: '📍',
                  question: 'What areas do you serve?',
                  answer: 'We serve New Jersey, New York, and Pennsylvania, and can accommodate projects nationwide upon agreement.'
                },
                {
                  icon: '💳',
                  question: 'Do you provide financing options?',
                  answer: 'Yes, we work with several financing partners to offer flexible payment plans that fit your budget. Ask us about current financing options during your consultation.'
                },
                {
                  icon: '⭐',
                  question: 'What brands and materials do you work with?',
                  answer: 'We work with premium brands and offer a wide selection of materials including granite, quartz, marble countertops, and custom cabinetry from trusted manufacturers.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-100 to-primary-dark50 rounded-xl flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                      {faq.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{faq.question}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg md:text-xl font-bold text-gray-900 mb-6">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="tel:8624029355"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <Phone size={20} />
                  Call Us: (862) 402-9355
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-brand-blue-dark transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <Navigation size={20} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChristmasDealPopup
        isOpen={isChristmasPopupOpen}
        onClose={() => setIsChristmasPopupOpen(false)}
        onGetQuote={() => setIsQuotePopupOpen(true)}
      />
      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />
    </div>
  );
}
