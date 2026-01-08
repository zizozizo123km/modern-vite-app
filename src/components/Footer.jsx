import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Support', href: '#' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Logo/Branding */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-extrabold text-indigo-400 mb-4 tracking-tight">
              ModernApp
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Building robust and scalable solutions for the digital age.
            </p>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {navItems.slice(0, 3).map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-gray-400 hover:text-indigo-400 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {navItems.slice(3, 5).map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-gray-400 hover:text-indigo-400 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support & Legal */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
                <li>
                    <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-300">Terms of Service</a>
                </li>
                <li>
                    <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-300">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-300">Support</a>
                </li>
            </ul>
          </div>
        </div>

        {/* Separator and Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          
          {/* Copyright */}
          <p className="text-sm text-gray-500 order-2 md:order-1 mt-6 md:mt-0">
            &copy; {currentYear} ModernApp Inc. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 order-1 md:order-2">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                aria-label={link.label}
                className="text-gray-400 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;