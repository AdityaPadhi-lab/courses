import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Award, Bookmark } from 'lucide-react';
import { Course } from '../types';
import { useCart } from '../contexts/CartContext';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { addToCart, items } = useCart();
  
  const isInCart = items.some(item => item.courseId === course.id);
  
  const calculateDiscount = () => {
    if (!course.originalPrice) return 0;
    return Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);
  };
  
  const handleAddToCart = () => {
    addToCart({
      courseId: course.id,
      title: course.title,
      price: course.price
    });
  };
  
  return (
    <div className="bg-background-alt rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Course Image */}
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-48 object-cover"
        />
        
        {/* Featured Badge */}
        {course.featured && (
          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <Award size={14} className="mr-1" />
            Featured
          </div>
        )}
        
        {/* Discount Badge */}
        {course.originalPrice && (
          <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
            {calculateDiscount()}% OFF
          </div>
        )}
        
        {/* Bundle Badge */}
        {course.isBundle && (
          <div className="absolute bottom-3 left-3 bg-warning text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <Bookmark size={14} className="mr-1" />
            Bundle
          </div>
        )}
      </div>
      
      {/* Course Info */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-text-secondary text-sm mb-1">{course.provider}</p>
          <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-2">
            {course.title}
          </h3>
          <p className="text-text-muted text-sm mb-4 line-clamp-2">
            {course.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {course.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-background text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Price & Action */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-end">
            <span className="text-xl font-bold text-primary">₹{course.price}</span>
            {course.originalPrice && (
              <span className="text-sm text-text-muted line-through ml-2">
                ₹{course.originalPrice}
              </span>
            )}
          </div>
          
          <div className="flex space-x-2">
            {!isInCart ? (
              <button 
                onClick={handleAddToCart}
                className="p-2 bg-primary hover:bg-primary-hover text-white rounded-full transition-colors"
              >
                <ShoppingCart size={18} />
              </button>
            ) : (
              <button 
                className="p-2 bg-success text-white rounded-full cursor-default"
                disabled
              >
                <ShoppingCart size={18} />
              </button>
            )}
            
            <Link 
              to={`/courses/${course.id}`}
              className="px-3 py-2 bg-background text-text-primary hover:bg-gray-800 rounded-lg transition-colors text-sm"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;