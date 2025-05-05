import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CourseCard from './CourseCard';
import { getFeaturedCourses } from '../data/courses';

const FeaturedCourses: React.FC = () => {
  const featuredCourses = getFeaturedCourses();
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-3">Featured Courses</h2>
            <p className="text-text-secondary max-w-2xl">
              Discover our most popular tech courses loved by thousands of students. All available at our special student-friendly price.
            </p>
          </div>
          <Link 
            to="/courses" 
            className="mt-6 md:mt-0 inline-flex items-center text-primary hover:text-primary-light transition-colors"
          >
            View all courses
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;