export interface Course {
  id: string;
  title: string;
  provider: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  tags: string[];
  featured?: boolean;
  isBundle?: boolean;
  bundleItems?: string[];
}

export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  enrolledCourses?: string[];
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signInWithEmailPassword: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface CartItem {
  courseId: string;
  title: string;
  price: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  total: number;
}