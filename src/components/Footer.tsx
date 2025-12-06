import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/perasus-logo.png"
              alt="Perasus Construction Logo"
              width="280"
              height="67"
              className="h-16 w-auto mb-6"
              loading="lazy"
            />
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Licensed General Contractor with 20+ years of international construction experience. Serving New Jersey, New York, and Pennsylvania with quality commercial and residential projects.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Visit our Facebook page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Visit our Instagram page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Visit our YouTube channel" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <Youtube size={20} />
              </a>
              <a href="#" aria-label="Visit our LinkedIn page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg mb-6">Quick Links</p>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-6">Services</p>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-primary transition-colors cursor-pointer">Commercial Renovations</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Residential Remodeling</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Project Management</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Design & Build</li>
              <li className="hover:text-primary transition-colors cursor-pointer">General Contracting</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-6">Contact Info</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                <a href="tel:8624029355" aria-label="Call us at (862) 402-9355" className="hover:text-primary transition-colors">
                  (862) 402-9355
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@perasusconstruction.com" className="hover:text-primary transition-colors">
                  info@perasusconstruction.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>
                  New Jersey, New York & Pennsylvania
                </span>
              </li>
              <li className="text-sm">
                <div className="font-medium text-gray-700 mb-1">Response within 24 hours</div>
                <div>Monday-Friday 8:00 AM - 5:00 PM</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-center md:text-left">
            &copy; 2025 Perasus Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-600 text-sm">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
