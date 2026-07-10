import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

function PinterestIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2.01.03-2.87.19-.78 1.2-5.06 1.2-5.06s-.3-.61-.3-1.51c0-1.42.82-2.48 1.85-2.48.87 0 1.29.65 1.29 1.44 0 .87-.56 2.18-.85 3.4-.24 1.02.51 1.85 1.51 1.85 1.82 0 3.21-1.92 3.21-4.68 0-2.45-1.76-4.16-4.27-4.16-2.91 0-4.62 2.18-4.62 4.43 0 .88.34 1.82.76 2.33.08.1.1.19.07.29-.08.32-.25 1.02-.28 1.16-.05.19-.15.23-.35.14-1.31-.61-2.13-2.53-2.13-4.07 0-3.31 2.41-6.36 6.94-6.36 3.65 0 6.48 2.6 6.48 6.07 0 3.62-2.28 6.54-5.45 6.54-1.06 0-2.07-.55-2.41-1.21l-.65 2.49c-.24.91-.88 2.05-1.31 2.75.99.3 2.03.47 3.12.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.05.86.13V9.4a6.33 6.33 0 0 0-.86-.05A6.34 6.34 0 0 0 3.15 15.7a6.34 6.34 0 0 0 10.86 4.42 6.3 6.3 0 0 0 1.82-4.45V8.65a8.16 8.16 0 0 0 4.77 1.52V6.75c-.34 0-.68-.02-1.01-.06z" />
    </svg>
  );
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/images/perasus-logo.png"
              alt="Perasus Construction Logo"
              width="220"
              height="94"
              className="h-16 md:h-20 w-auto mb-6"
              loading="lazy"
            />
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Licensed General Contractor with 20+ years of international construction experience. Serving New Jersey, New York, and Pennsylvania with quality commercial and residential projects.
            </p>
            <p className="text-sm font-medium text-gray-700 mb-6">Licensed &bull; Insured &bull; Bonded</p>
            <div className="flex flex-wrap gap-4">
              {/* TODO: gerçek sosyal medya linki eklenecek */}
              <a href="#" aria-label="Visit our Instagram page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              {/* TODO: gerçek sosyal medya linki eklenecek */}
              <a href="#" aria-label="Visit our Facebook page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              {/* TODO: gerçek sosyal medya linki eklenecek */}
              <a href="#" aria-label="Visit our Pinterest page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <PinterestIcon size={20} />
              </a>
              {/* TODO: gerçek sosyal medya linki eklenecek */}
              <a href="#" aria-label="Visit our TikTok page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <TikTokIcon size={20} />
              </a>
              {/* TODO: gerçek sosyal medya linki eklenecek */}
              <a href="#" aria-label="Visit our X (Twitter) page" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <XIcon size={20} />
              </a>
              {/* TODO: gerçek sosyal medya linki eklenecek */}
              <a href="#" aria-label="Visit our YouTube channel" className="bg-gray-100 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                <Youtube size={20} />
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
              <li className="text-sm italic text-gray-400 pt-2">
                Your Perasus Team
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
