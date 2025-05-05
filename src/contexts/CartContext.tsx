import React, { createContext, useContext, useState } from 'react';
import { CartContextType, CartItem } from '../types';

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const addToCart = (item: CartItem) => {
    // Check if item already exists in cart
    const existingItem = items.find(i => i.courseId === item.courseId);
    if (existingItem) {
      return; // Item already in cart, don't add again
    }
    setItems([...items, item]);
  };
  
  const removeFromCart = (courseId: string) => {
    setItems(items.filter(item => item.courseId !== courseId));
  };
  
  const clearCart = () => {
    setItems([]);
  };
  
  const total = items.reduce((sum, item) => sum + item.price, 0);
  
  const value = {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    total
  };
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};