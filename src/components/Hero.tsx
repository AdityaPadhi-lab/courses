import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, BookOpen, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-8 pb-16 sm:pt-16 lg:pt-24">
      {/* Decorative floating elements */}
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-light to-secondary-light opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Hero Content */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              <Zap size={16} className="mr-1" />
              Limited Time Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6 animate-glow">
              Premium Tech Courses at Just <span className="text-primary">₹250</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto md:mx-0">
              Boost your skills with top-rated courses from industry experts. Master coding, ace placements, and dominate tech like a pro!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/courses"
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center"
              >
                Browse Courses <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/telegram"
                className="bg-background-alt hover:bg-gray-800 text-text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-primary/30 inline-flex items-center justify-center"
              >
                Join Telegram Channel
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 text-center">
              <div className="p-4 rounded-lg bg-background-alt">
                <p className="text-2xl font-bold text-primary">13+</p>
                <p className="text-text-secondary text-sm">Premium Courses</p>
              </div>
              <div className="p-4 rounded-lg bg-background-alt">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-text-secondary text-sm">Special Bundles</p>
              </div>
              <div className="p-4 rounded-lg bg-background-alt">
                <p className="text-2xl font-bold text-primary">97%</p>
                <p className="text-text-secondary text-sm">Average Discount</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Features */}
          <div className="relative">
            <div className="bg-background-alt p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="bg-primary/10 rounded-xl p-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary rounded-lg p-3">
                      <BookOpen className="text-white" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-text-primary">Top-Tier Courses</h3>
                      <p className="text-text-secondary mt-1">
                        Authentic premium courses from leading educators like Apna College, Love Babbar, and more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 rounded-xl p-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-secondary rounded-lg p-3">
                      <Users className="text-white" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-text-primary">Student-Friendly Pricing</h3>
                      <p className="text-text-secondary mt-1">
                        All courses at just ₹250, specially priced for students to make quality education accessible.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary rounded-lg p-3">
                      <Zap className="text-white" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-text-primary">Instant Access</h3>
                      <p className="text-text-secondary mt-1">
                        Get immediate access to course materials after purchase. No waiting periods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating shapes for visual appeal */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;