import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  role: string;
  comment: string;
  course: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    role: 'Software Engineer',
    comment: 'The Apna College Sigma batch was amazing! I landed a job at a startup with a 12 LPA package. Incredible value for just ₹250.',
    course: 'Apna College - Sigma 6.0',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Patel',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    role: 'Full Stack Developer',
    comment: 'I was skeptical about the price, but the course content is 100% authentic and complete. Love Babbar Supreme batch helped me clear my DSA concepts.',
    course: 'Love Babbar - Supreme 2.0',
    rating: 5
  },
  {
    id: 3,
    name: 'Ajay Verma',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    role: 'Data Scientist',
    comment: 'The Naresh IT Data Science course was comprehensive and helped me transition into AI. Best investment I made for my career.',
    course: 'Naresh IT - Data Science & Analytics with Generative AI',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-3">Student Success Stories</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Hear from our students who have transformed their careers with our affordable premium courses.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background-alt rounded-2xl p-8 shadow-lg">
            {/* Quote marks decoration */}
            <div className="absolute top-4 left-4 text-6xl text-primary opacity-20">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-primary opacity-20">"</div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex mb-6 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={20}
                    className={i < testimonials[currentIndex].rating ? "text-warning fill-warning" : "text-text-muted"}
                  />
                ))}
              </div>
              
              <blockquote className="text-xl text-text-primary italic mb-8">
                {testimonials[currentIndex].comment}
              </blockquote>
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-text-primary">{testimonials[currentIndex].name}</p>
                    <p className="text-text-secondary text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                
                <div className="bg-primary/10 px-3 py-1 rounded-full text-primary text-sm">
                  {testimonials[currentIndex].course}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-background-alt text-text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-primary' : 'bg-text-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-background-alt text-text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;