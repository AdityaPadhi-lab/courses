import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

const PromoSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-2/3 md:pr-8">
                <div className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-white/20 mb-6">
                  <Clock size={16} className="mr-2" />
                  Limited Time Offer
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Unlock All Top Tech Courses at Student-Friendly Prices!
                </h2>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Sparkles size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <p>Get authentic premium courses from leading educators at just ₹250 each</p>
                  </li>
                  <li className="flex items-start">
                    <Sparkles size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <p>Access to special bundles and exclusive study materials</p>
                  </li>
                  <li className="flex items-start">
                    <Sparkles size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <p>Join a community of learners and boost your career prospects</p>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link 
                    to="/courses" 
                    className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    Browse Courses <ArrowRight size={18} className="ml-2" />
                  </Link>
                  <a 
                    href="https://t.me/courses_9865" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                  >
                    Join Telegram Channel
                  </a>
                </div>
              </div>
              
              {/* Countdown Timer or Offer Details */}
              <div className="mt-10 md:mt-0 md:w-1/3">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="text-warning mr-2" size={20} />
                    <h3 className="font-semibold">Special Offer Details</h3>
                  </div>
                  
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex justify-between">
                      <span>Regular Price:</span>
                      <span className="line-through">₹3999 - ₹9999</span>
                    </li>
                    <li className="flex justify-between font-semibold">
                      <span>Our Price:</span>
                      <span>₹250 Only</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Your Savings:</span>
                      <span className="text-success">Up to 97%</span>
                    </li>
                    <li className="border-t border-white/20 pt-3 mt-3 flex justify-between">
                      <span>Offer Valid For:</span>
                      <span className="text-warning">Limited Time</span>
                    </li>
                  </ul>
                  
                  <Link 
                    to="/telegram" 
                    className="w-full px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors text-center block"
                  >
                    DM to Enroll: @KING_6372
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;