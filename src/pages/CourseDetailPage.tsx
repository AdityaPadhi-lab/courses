import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Check, AlertTriangle, Share2, BookOpen, Clock, Download, Award, User, ExternalLink, Send } from 'lucide-react';
import { getCourseById } from '../data/courses';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, items } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [enrollmentMethod, setEnrollmentMethod] = useState<'website' | 'telegram'>('website');
  
  const course = id ? getCourseById(id) : undefined;
  const isInCart = id ? items.some(item => item.courseId === id) : false;
  
  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Course Not Found</h2>
          <p className="text-text-secondary mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses" className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition-colors">
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart({
      courseId: course.id,
      title: course.title,
      price: course.price
    });
  };
  
  const handleEnrollment = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    if (enrollmentMethod === 'telegram') {
      window.open('https://t.me/KING_6372', '_blank');
    } else {
      if (!isInCart) {
        handleAddToCart();
      }
      navigate('/checkout');
    }
  };
  
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Link to="/courses" className="text-text-secondary hover:text-primary transition-colors">
            &larr; Back to Courses
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Course Information (Left Side) */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="flex items-center text-text-secondary text-sm mb-2">
                <span className="mr-2">{course.provider}</span>
                <span className="mx-2">•</span>
                <span>{course.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {course.title}
              </h1>
              
              <p className="text-text-secondary text-lg mb-6">
                {course.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {course.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-sm px-3 py-1 rounded-full bg-background-alt text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Course Image */}
            <div className="rounded-xl overflow-hidden mb-10">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Course Features */}
            <div className="bg-background-alt rounded-xl p-6 mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="text-success mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-text-secondary">
                    Complete, hands-on project-based learning experience
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="text-success mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-text-secondary">
                    Real-world industry standard practices and tools
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="text-success mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-text-secondary">
                    Comprehensive curriculum from basics to advanced
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="text-success mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-text-secondary">
                    Interview preparation and placement guidance
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="text-success mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-text-secondary">
                    Access to premium course materials and resources
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="text-success mr-3 mt-1 flex-shrink-0" size={18} />
                  <p className="text-text-secondary">
                    Community support and networking opportunities
                  </p>
                </div>
              </div>
            </div>
            
            {/* Course Bundle Items */}
            {course.isBundle && course.bundleItems && (
              <div className="bg-background-alt rounded-xl p-6 mb-10">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Bundle Includes</h2>
                <div className="space-y-4">
                  {course.bundleItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        <Download className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-text-primary font-medium">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Important Notes */}
            <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-10">
              <div className="flex items-start">
                <AlertTriangle className="text-warning mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Important Information</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• The course is delivered via Telegram after successful payment</li>
                    <li>• You will receive access to the complete course materials within 24 hours</li>
                    <li>• You can verify the course authenticity before purchase by joining our Telegram channel</li>
                    <li>• All sales are final, please review our refund policy before purchasing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enrollment Card (Right Side) */}
          <div className="lg:col-span-1">
            <div className="bg-background-alt rounded-xl shadow-lg overflow-hidden sticky top-24">
              {/* Course Price */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-end mb-4">
                  <h3 className="text-3xl font-bold text-primary">₹{course.price}</h3>
                  {course.originalPrice && (
                    <span className="ml-2 text-text-muted line-through">
                      ₹{course.originalPrice}
                    </span>
                  )}
                  {course.originalPrice && (
                    <span className="ml-3 bg-warning/10 text-warning text-xs px-2 py-1 rounded-full">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                
                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="text-text-muted mr-2" size={18} />
                    <span className="text-text-secondary text-sm">Lifetime Access</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="text-text-muted mr-2" size={18} />
                    <span className="text-text-secondary text-sm">Full Curriculum</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-text-muted mr-2" size={18} />
                    <span className="text-text-secondary text-sm">Certificate</span>
                  </div>
                  <div className="flex items-center">
                    <User className="text-text-muted mr-2" size={18} />
                    <span className="text-text-secondary text-sm">1-on-1 Support</span>
                  </div>
                </div>
                
                {/* Enrollment Method */}
                <div className="mb-6">
                  <label className="block text-text-secondary text-sm mb-2">
                    Enrollment Method
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setEnrollmentMethod('website')}
                      className={`py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors ${
                        enrollmentMethod === 'website'
                          ? 'bg-primary text-white'
                          : 'bg-background text-text-secondary hover:bg-gray-800'
                      }`}
                    >
                      Website Payment
                    </button>
                    <button
                      type="button"
                      onClick={() => setEnrollmentMethod('telegram')}
                      className={`py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors ${
                        enrollmentMethod === 'telegram'
                          ? 'bg-primary text-white'
                          : 'bg-background text-text-secondary hover:bg-gray-800'
                      }`}
                    >
                      Telegram DM
                    </button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleEnrollment}
                    className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    {enrollmentMethod === 'telegram' ? (
                      <>
                        <Send className="mr-2" size={18} />
                        Contact on Telegram
                      </>
                    ) : (
                      <>
                        {isInCart ? 'Proceed to Checkout' : 'Enroll Now'}
                      </>
                    )}
                  </button>
                  
                  {enrollmentMethod === 'website' && !isInCart && (
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-background border border-primary text-text-primary hover:bg-gray-800 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                    >
                      <ShoppingCart className="mr-2" size={18} />
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
              
              {/* Verification */}
              <div className="p-6">
                <h4 className="font-semibold text-text-primary mb-3">Want to Verify Course?</h4>
                <p className="text-text-secondary text-sm mb-4">
                  Join our Telegram channel to see proofs and sample materials before enrolling.
                </p>
                <a
                  href="https://t.me/courses_9865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light inline-flex items-center text-sm font-medium"
                >
                  View Course Proofs
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
              
              {/* Share */}
              <div className="p-6 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <button className="flex items-center text-text-secondary hover:text-primary transition-colors">
                    <Share2 size={18} className="mr-2" />
                    Share
                  </button>
                  <div className="flex space-x-2">
                    <button className="bg-background p-2 rounded-full text-text-secondary hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </button>
                    <button className="bg-background p-2 rounded-full text-text-secondary hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </button>
                    <button className="bg-background p-2 rounded-full text-text-secondary hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;