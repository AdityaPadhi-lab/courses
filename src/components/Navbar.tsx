import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { items } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  return (
    <nav className="bg-background-alt py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-primary text-2xl font-bold font-heading">
              TechEdu<span className="text-secondary">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-text-primary hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-text-primary hover:text-primary transition-colors">
              Courses
            </Link>
            <Link to="/bundles" className="text-text-primary hover:text-primary transition-colors">
              Bundles
            </Link>
            <Link to="/about" className="text-text-primary hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Auth & Cart Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-text-primary hover:text-primary transition-colors" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-text-primary hover:text-primary transition-colors">
                  <span>{user.displayName || user.email?.split('@')[0]}</span>
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
                  ) : (
                    <User className="w-6 h-6" />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 py-2 bg-background-alt rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-text-primary hover:bg-background hover:text-primary">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-text-primary hover:bg-background hover:text-primary">
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-text-primary hover:bg-background hover:text-primary"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-x-2">
                <Link to="/login" className="text-text-primary hover:text-primary transition-colors">
                  Sign In
                </Link>
                <Link to="/signup" className="bg-primary px-4 py-2 rounded-md text-white hover:bg-primary-hover transition-colors">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-text-primary" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu} className="text-text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background-alt rounded-lg">
            <div className="flex flex-col items-start space-y-4 px-4">
              <Link to="/" className="text-text-primary hover:text-primary transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/courses" className="text-text-primary hover:text-primary transition-colors" onClick={toggleMenu}>
                Courses
              </Link>
              <Link to="/bundles" className="text-text-primary hover:text-primary transition-colors" onClick={toggleMenu}>
                Bundles
              </Link>
              <Link to="/about" className="text-text-primary hover:text-primary transition-colors" onClick={toggleMenu}>
                About
              </Link>
              
              {user ? (
                <>
                  <Link to="/dashboard" className="text-text-primary hover:text-primary transition-colors" onClick={toggleMenu}>
                    Dashboard
                  </Link>
                  <Link to="/profile" className="text-text-primary hover:text-primary transition-colors" onClick={toggleMenu}>
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      toggleMenu();
                    }}
                    className="text-text-primary hover:text-primary transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-text-primary hover:text-primary transition-colors" onClick={toggleMenu}>
                    Sign In
                  </Link>
                  <Link to="/signup" className="w-full bg-primary px-4 py-2 rounded-md text-white hover:bg-primary-hover transition-colors" onClick={toggleMenu}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;