import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Check, ArrowRight } from 'lucide-react';
import { getBundleCourses } from '../data/courses';

const BundleOffers: React.FC = () => {
  const bundles = getBundleCourses();
  
  return (
    <section className="py-16 bg-background-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-3">Special Bundle Offers</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Get more value with our specially curated course bundles at exclusive prices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map(bundle => (
            <div 
              key={bundle.id}
              className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Package className="text-primary" size={24} />
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-text-primary">{bundle.title}</h3>
                </div>
                
                <p className="text-text-secondary mb-6">{bundle.description}</p>
                
                <div className="space-y-3 mb-6 flex-grow">
                  {bundle.bundleItems?.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-success mr-2 flex-shrink-0 mt-1" size={18} />
                      <p className="text-text-secondary">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-primary">₹{bundle.price}</span>
                    {bundle.originalPrice && (
                      <span className="text-sm text-text-muted line-through ml-2">
                        ₹{bundle.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="px-3 py-1 bg-warning/20 text-warning text-sm rounded-full">
                    Limited Time
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Link 
                    to={`/courses/${bundle.id}`}
                    className="py-2 bg-background-alt text-text-primary hover:bg-gray-800 rounded-lg transition-colors text-center"
                  >
                    View Details
                  </Link>
                  <Link 
                    to={`/enroll/${bundle.id}`}
                    className="py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors text-center"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/bundles" 
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
          >
            View all bundles
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BundleOffers;