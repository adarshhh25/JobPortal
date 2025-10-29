import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Media Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#F83002] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">JP</span>
              </div>
                <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Connect with us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-700 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-700 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/employer" className="text-gray-700 transition-colors">
                  Employer home
                </a>
              </li>
              <li>
                <a href="/sitemap" className="text-gray-700 transition-colors">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="/credits" className="text-gray-700 transition-colors">
                  Credits
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="/help" className="text-gray-700 transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="/summons" className="text-gray-700 transition-colors">
                  Summons/Notices
                </a>
              </li>
              <li>
                <a href="/grievances" className="text-gray-700 transition-colors">
                  Grievances
                </a>
              </li>
              <li>
                <a href="/report" className="text-gray-700 transition-colors">
                  Report issue
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-gray-700 transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-700 transition-colors">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="/fraud-alert" className="text-gray-700 transition-colors">
                  Fraud alert
                </a>
              </li>
              <li>
                <a href="/trust-safety" className="text-gray-700 transition-colors">
                  Trust & safety
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © 2024 JobPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;