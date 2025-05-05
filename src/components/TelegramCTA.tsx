import React from 'react';
import { ExternalLink, Send } from 'lucide-react';

const TelegramCTA: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center bg-background-alt rounded-2xl p-8 shadow-lg">
          <div className="flex-1 mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Want Course Proofs & Direct Access?
            </h2>
            <p className="text-text-secondary mb-6">
              Join our official Telegram channel for proofs, student reviews, and special offers. 
              For direct enrollment, message us at <span className="text-primary">@KING_6372</span>
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://t.me/courses_9865" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Join Official Channel
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a 
                href="https://t.me/KING_6372" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-background hover:bg-gray-800 text-text-primary px-6 py-3 rounded-lg font-medium transition-colors border border-primary/30 inline-flex items-center justify-center"
              >
                DM to Enroll
                <Send size={18} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 relative">
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 bg-primary w-6 h-6 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 bg-secondary w-6 h-6 rounded-full"></div>
              
              <div className="text-center">
                <div className="bg-primary/10 inline-flex p-4 rounded-full mb-4">
                  <Send size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Telegram Benefits
                </h3>
                <ul className="text-left text-text-secondary space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="bg-success/20 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                    View course proofs before purchase
                  </li>
                  <li className="flex items-center">
                    <div className="bg-success/20 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                    Get early access to new courses
                  </li>
                  <li className="flex items-center">
                    <div className="bg-success/20 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                    Receive study materials & updates
                  </li>
                  <li className="flex items-center">
                    <div className="bg-success/20 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                    Quick support via direct messages
                  </li>
                </ul>
                <a 
                  href="https://t.me/courses_9865" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-light font-medium inline-flex items-center"
                >
                  Join Now
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramCTA;