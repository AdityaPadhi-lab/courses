import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, Database, Brain, LineChart, 
  Laptop, Server, BarChart, Briefcase 
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    icon: <Code size={24} />,
    description: 'Frontend, backend & full-stack web development',
    count: 4
  },
  {
    id: 'dsa',
    name: 'DSA',
    icon: <Brain size={24} />,
    description: 'Data Structures & Algorithms',
    count: 5
  },
  {
    id: 'data-science',
    name: 'Data Science & AI',
    icon: <LineChart size={24} />,
    description: 'Machine learning, AI & analytics',
    count: 2
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: <Server size={24} />,
    description: 'CI/CD, deployment & cloud',
    count: 1
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: <Database size={24} />,
    description: 'Server-side development',
    count: 1
  },
  {
    id: 'placement',
    name: 'Placement',
    icon: <Briefcase size={24} />,
    description: 'Interview prep & job readiness',
    count: 2
  },
  {
    id: 'bundles',
    name: 'Course Bundles',
    icon: <Laptop size={24} />,
    description: 'Multi-course packages & APKs',
    count: 3
  },
  {
    id: 'gate',
    name: 'GATE Preparation',
    icon: <BarChart size={24} />,
    description: 'Comprehensive GATE CSE prep',
    count: 1
  }
];

const CategoryList: React.FC = () => {
  return (
    <section className="py-16 bg-background-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-3">Browse By Category</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore our courses by category to find exactly what you need to boost your skills.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-min mb-4">
                <div className="text-primary">{category.icon}</div>
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-2">{category.name}</h3>
              <p className="text-text-secondary text-sm mb-3 flex-grow">{category.description}</p>
              
              <div className="bg-background-alt text-text-secondary text-xs px-3 py-1 rounded-full self-start">
                {category.count} {category.count === 1 ? 'Course' : 'Courses'}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;