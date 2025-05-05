import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram as Telegram, Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-alt pt-16 pb-8 text-text-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-primary text-2xl font-bold">
                Tech <span className="text-secondary">Hub</span>
              </span>
            </Link>
            <p className="mb-4 opacity-75">
              Unlock top tech courses at student-friendly prices. Premium coding courses at just ₹250.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://t.me/courses_9865" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                <Telegram size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="hover:text-primary transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/bundles" className="hover:text-primary transition-colors">
                  Course Bundles
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-text-primary">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses/1" className="hover:text-primary transition-colors">
                  Apna College - Sigma 6.0
                </Link>
              </li>
              <li>
                <Link to="/courses/6" className="hover:text-primary transition-colors">
                  Sheriyans Backend Domination
                </Link>
              </li>
              <li>
                <Link to="/courses/8" className="hover:text-primary transition-colors">
                  Naresh IT - Data Science & AI
                </Link>
              </li>
              <li>
                <Link to="/courses/9" className="hover:text-primary transition-colors">
                  Love Babbar - Supreme 2.0
                </Link>
              </li>
              <li>
                <Link to="/courses/13" className="hover:text-primary transition-colors">
                  Sigma Batch 7
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Telegram className="mr-3 text-primary mt-1" size={18} />
                <div>
                  <p>Telegram</p>
                  <a href="https://t.me/KING_6372" className="text-primary hover:underline">@KING_6372</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 text-primary mt-1" size={18} />
                <div>
                  <p>Email Support</p>
                  <a href="mailto:support@techeduhub.com" className="text-primary hover:underline">support@techeduhub.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <Telegram className="mr-3 text-primary mt-1" size={18} />
                <div>
                  <p>Official Channel</p>
                  <a href="https://t.me/courses_9865" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">t.me/courses_9865</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} TechEduHub. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;