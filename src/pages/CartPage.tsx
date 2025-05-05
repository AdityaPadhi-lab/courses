import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ShoppingCart, AlertTriangle, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { getCourseById } from '../data/courses';

const CartPage: React.FC = () => {
  const { items, removeFromCart, total } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    navigate('/checkout');
  };
  
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-4">Your Cart</h1>
          <p className="text-text-secondary">
            Review your cart before proceeding to checkout.
          </p>
        </div>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-background-alt rounded-xl overflow-hidden shadow-md">
                <div className="p-6 border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-text-primary">
                      Cart Items ({items.length})
                    </h2>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-700">
                  {items.map(item => {
                    const course = getCourseById(item.courseId);
                    return (
                      <div key={item.courseId} className="p-6 flex items-start space-x-4">
                        {/* Course Image */}
                        {course && (
                          <div className="flex-shrink-0">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                          </div>
                        )}
                        
                        {/* Course Info */}
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-text-primary">
                                {item.title}
                              </h3>
                              {course && (
                                <p className="text-text-secondary text-sm">
                                  {course.provider}
                                </p>
                              )}
                            </div>
                            <p className="text-primary font-medium">₹{item.price}</p>
                          </div>
                        </div>
                        
                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.courseId)}
                          className="text-text-muted hover:text-error transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    );
                  })}
                </div>
                
                <div className="p-6 border-t border-gray-700">
                  <Link
                    to="/courses"
                    className="text-primary hover:text-primary-light transition-colors inline-flex items-center"
                  >
                    <ArrowRight size={18} className="mr-2 transform rotate-180" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-background-alt rounded-xl shadow-md sticky top-24">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-xl font-semibold text-text-primary">
                    Order Summary
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Subtotal</span>
                      <span className="text-text-primary">₹{total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Service Fee</span>
                      <span className="text-text-primary">₹0</span>
                    </div>
                    <div className="border-t border-gray-700 pt-4 flex justify-between font-semibold">
                      <span className="text-text-primary">Total</span>
                      <span className="text-primary text-xl">₹{total}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    Proceed to Checkout
                  </button>
                </div>
                
                {/* Payment Notice */}
                <div className="p-6 border-t border-gray-700">
                  <div className="flex items-start text-sm">
                    <AlertTriangle className="text-warning mr-3 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-text-secondary">
                      After payment, access to courses will be provided through Telegram. Join our official
                      channel for proofs and verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-background-alt rounded-xl p-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-background p-6 rounded-full">
                <ShoppingCart className="text-text-muted" size={48} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">Your Cart is Empty</h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Looks like you haven't added any courses to your cart yet.
              Browse our collection to find the perfect course for you.
            </p>
            <Link
              to="/courses"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              Browse Courses
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;