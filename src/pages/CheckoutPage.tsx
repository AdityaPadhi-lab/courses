import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, User, Mail, Phone, AlertTriangle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const CheckoutPage: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'bank'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    phone: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // In a real application, you would handle the payment with Razorpay or another payment gateway
      clearCart();
      navigate('/payment-success');
      setIsProcessing(false);
    }, 2000);
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-4">Checkout</h1>
          <p className="text-text-secondary">
            Complete your payment to gain access to your selected courses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="bg-background-alt rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-xl font-semibold text-text-primary">
                    Contact Information
                  </h2>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-text-secondary text-sm mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="text-text-muted" size={18} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactInfo.name}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-text-secondary text-sm mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="text-text-muted" size={18} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactInfo.email}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-text-secondary text-sm mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="text-text-muted" size={18} />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={contactInfo.phone}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <p className="text-text-muted text-xs mt-1">
                      Will be used to provide access to courses via Telegram
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="bg-background-alt rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-xl font-semibold text-text-primary">
                    Payment Method
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-4 rounded-lg border ${
                        paymentMethod === 'upi'
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-700 bg-background'
                      } flex flex-col items-center justify-center transition-colors`}
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" 
                        alt="UPI" 
                        className="h-8 mb-2" 
                      />
                      <span className={`text-sm ${
                        paymentMethod === 'upi' ? 'text-primary' : 'text-text-secondary'
                      }`}>
                        UPI
                      </span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-lg border ${
                        paymentMethod === 'card'
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-700 bg-background'
                      } flex flex-col items-center justify-center transition-colors`}
                    >
                      <CreditCard size={32} className={`mb-2 ${
                        paymentMethod === 'card' ? 'text-primary' : 'text-text-secondary'
                      }`} />
                      <span className={`text-sm ${
                        paymentMethod === 'card' ? 'text-primary' : 'text-text-secondary'
                      }`}>
                        Card
                      </span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-4 rounded-lg border ${
                        paymentMethod === 'bank'
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-700 bg-background'
                      } flex flex-col items-center justify-center transition-colors`}
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke={paymentMethod === 'bank' ? '#00BFFF' : '#B3B3B3'} 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="h-8 w-8 mb-2"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                      <span className={`text-sm ${
                        paymentMethod === 'bank' ? 'text-primary' : 'text-text-secondary'
                      }`}>
                        Net Banking
                      </span>
                    </button>
                  </div>
                  
                  {/* UPI Payment Fields */}
                  {paymentMethod === 'upi' && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="upi-id" className="block text-text-secondary text-sm mb-2">
                          UPI ID
                        </label>
                        <input
                          type="text"
                          id="upi-id"
                          name="upi-id"
                          required
                          className="block w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="yourname@upi"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Card Payment Fields */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="card-number" className="block text-text-secondary text-sm mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="card-number"
                          name="card-number"
                          required
                          className="block w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-text-secondary text-sm mb-2">
                            Expiry (MM/YY)
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            name="expiry"
                            required
                            className="block w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="MM/YY"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvv" className="block text-text-secondary text-sm mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            required
                            className="block w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="name-on-card" className="block text-text-secondary text-sm mb-2">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="name-on-card"
                          name="name-on-card"
                          required
                          className="block w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Net Banking Fields */}
                  {paymentMethod === 'bank' && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="bank" className="block text-text-secondary text-sm mb-2">
                          Select Bank
                        </label>
                        <select
                          id="bank"
                          name="bank"
                          required
                          className="block w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select your bank</option>
                          <option value="sbi">State Bank of India</option>
                          <option value="hdfc">HDFC Bank</option>
                          <option value="icici">ICICI Bank</option>
                          <option value="axis">Axis Bank</option>
                          <option value="kotak">Kotak Mahindra Bank</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Payment Notice */}
              <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="text-warning mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Important Payment Information</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li>• After successful payment, you will be contacted via Telegram for course access</li>
                      <li>• Please make sure your contact information is correct</li>
                      <li>• For any payment issues, contact us on Telegram: @KING_6372</li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
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
                <div className="space-y-4 mb-4">
                  {items.map(item => (
                    <div key={item.courseId} className="flex justify-between">
                      <span className="text-text-secondary">{item.title}</span>
                      <span className="text-text-primary">₹{item.price}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="text-text-primary">₹{total}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-text-secondary">Service Fee</span>
                    <span className="text-text-primary">₹0</span>
                  </div>
                  <div className="flex justify-between mt-4 font-semibold">
                    <span className="text-text-primary">Total</span>
                    <span className="text-primary text-xl">₹{total}</span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  form="checkout-form"
                  disabled={isProcessing}
                  className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isProcessing ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : null}
                  {isProcessing ? 'Processing...' : `Pay ₹${total}`}
                </button>
                
                <p className="mt-4 text-xs text-center text-text-muted">
                  By completing this purchase, you agree to our{' '}
                  <a href="/terms" className="text-primary hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;