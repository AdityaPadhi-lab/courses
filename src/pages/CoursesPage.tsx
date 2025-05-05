import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { Course } from '../types';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Extract unique categories and providers
  const categories = Array.from(new Set(courses.map(course => course.category)));
  const providers = Array.from(new Set(courses.map(course => course.provider)));
  
  // Apply filters whenever search term or filters change
  useEffect(() => {
    let result = courses;
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(term) || 
        course.description.toLowerCase().includes(term) ||
        course.provider.toLowerCase().includes(term) ||
        course.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    // Apply provider filter
    if (selectedProvider) {
      result = result.filter(course => course.provider === selectedProvider);
    }
    
    setFilteredCourses(result);
  }, [searchTerm, selectedCategory, selectedProvider]);
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedProvider(null);
  };
  
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Explore All Courses
          </h1>
          <p className="text-text-secondary max-w-2xl">
            Browse our collection of premium tech courses, all available at student-friendly prices. 
            Filter by category, provider, or search for specific topics.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {/* Search Input */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-text-muted" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search courses, topics, or providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 bg-background-alt border border-gray-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="text-text-muted hover:text-text-primary" size={18} />
                </button>
              )}
            </div>
            
            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden bg-background-alt border border-gray-700 rounded-lg px-4 py-3 text-text-primary flex items-center justify-center"
            >
              <Filter size={20} className="mr-2" />
              Filters
            </button>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Category Filter */}
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="bg-background-alt border border-gray-700 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              
              {/* Provider Filter */}
              <select
                value={selectedProvider || ''}
                onChange={(e) => setSelectedProvider(e.target.value || null)}
                className="bg-background-alt border border-gray-700 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All Providers</option>
                {providers.map((provider, index) => (
                  <option key={index} value={provider}>
                    {provider}
                  </option>
                ))}
              </select>
              
              {/* Clear Filters */}
              {(selectedCategory || selectedProvider || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="bg-background border border-gray-700 rounded-lg px-4 py-3 text-text-primary hover:bg-gray-800 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
          
          {/* Mobile Filters (Collapsible) */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 p-4 bg-background-alt rounded-lg border border-gray-700">
              <div className="space-y-4">
                {/* Category Filter (Mobile) */}
                <div>
                  <label className="block text-text-secondary text-sm mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory || ''}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Provider Filter (Mobile) */}
                <div>
                  <label className="block text-text-secondary text-sm mb-2">
                    Provider
                  </label>
                  <select
                    value={selectedProvider || ''}
                    onChange={(e) => setSelectedProvider(e.target.value || null)}
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">All Providers</option>
                    {providers.map((provider, index) => (
                      <option key={index} value={provider}>
                        {provider}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Clear Filters (Mobile) */}
                {(selectedCategory || selectedProvider || searchTerm) && (
                  <button
                    onClick={clearFilters}
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-2 text-text-primary hover:bg-gray-800 transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-text-secondary">
            Showing <span className="font-semibold text-text-primary">{filteredCourses.length}</span> of {courses.length} courses
          </p>
          
          {/* Sort Option (could be expanded) */}
          <select
            className="bg-background-alt border border-gray-700 rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        
        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-background-alt rounded-lg">
            <p className="text-2xl font-semibold text-text-primary mb-2">No courses found</p>
            <p className="text-text-secondary mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;