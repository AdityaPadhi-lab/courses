import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, AlertCircle, UserPlus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  
  const validatePassword = () => {
    if (password !== confirmPassword) {
      setSignupError('Passwords do not match');
      return false;
    }
    if (password.length < 6) {
      setSignupError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError(null);
    
    if (!validatePassword()) return;
    
    setIsLoading(true);
    
    try {
      await signUp(email, password, name);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
      if (error instanceof Error) {
        setSignupError(error.message);
      } else {
        setSignupError('Failed to create account. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleSignIn = async () => {
    setSignupError(null);
    setIsLoading(true);
    
    try {
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      if (error.code === 'auth/popup-blocked') {
        setSignupError(
          'The sign-in popup was blocked by your browser. Please allow popups for this site in your browser settings and try again.'
        );
      } else {
        setSignupError('Failed to sign in with Google. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-background-alt p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary">Create an Account</h2>
          <p className="mt-2 text-text-secondary">
            Sign up to access premium courses at student-friendly prices
          </p>
        </div>
        
        {signupError && (
          <div className="bg-error/10 text-error p-4 rounded-lg flex items-start">
            <AlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={18} />
            <p>{signupError}</p>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-text-secondary text-sm block mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="text-text-muted" size={18} />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="text-text-secondary text-sm block mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-text-muted" size={18} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="yourname@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="text-text-secondary text-sm block mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-text-muted" size={18} />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="text-text-secondary text-sm block mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-text-muted" size={18} />
                </div>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-background border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 bg-background border-gray-700 rounded focus:ring-primary"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-text-secondary">
              I agree to the{' '}
              <Link to="/terms" className="text-primary hover:text-primary-light">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-primary hover:text-primary-light">
                Privacy Policy
              </Link>
            </label>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-70"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <UserPlus className="mr-2" size={18} />
                  Create Account
                </>
              )}
            </button>
          </div>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background-alt text-text-secondary">Or sign up with</span>
            </div>
          </div>
          
          <div className="mt-6">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-gray-700 rounded-lg shadow-sm bg-background text-text-primary hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-70"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  className="text-[#4285F4]"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  className="text-[#34A853]"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  className="text-[#FBBC05]"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  className="text-[#EA4335]"
                />
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-text-secondary">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary hover:text-primary-light">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;