import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Apna College - Sigma 6.0',
    provider: 'Apna College',
    description: 'Complete web development bootcamp covering frontend, backend, and DevOps with real-world projects.',
    image: 'https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/6efdd5e7f0d663cf231d0f2040be0a1e.png',
    price: 250,
    originalPrice: 7999,
    category: 'Web Development',
    tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    featured: true
  },
  {
    id: '2',
    title: 'Apna College - ALPHA 5.0 (DSA)',
    provider: 'Apna College',
    description: 'Master Data Structures & Algorithms with C++ from scratch to advanced level with interview preparation.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 250,
    originalPrice: 4999,
    category: 'DSA',
    tags: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving']
  },
  {
    id: '3',
    title: 'Apna College - DSA C++ Batch',
    provider: 'Apna College',
    description: 'C++ focused Data Structures & Algorithms course with competitive programming and interview preparation.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 250,
    originalPrice: 3999,
    category: 'DSA',
    tags: ['C++', 'Competitive Programming', 'Problem Solving']
  },
  {
    id: '4',
    title: 'Apna College - Delta 6.0 - DSA & Development',
    provider: 'Apna College',
    description: 'Combined course covering both DSA and web development for full-stack engineers.',
    image: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 250,
    originalPrice: 8999,
    category: 'Full Stack',
    tags: ['JavaScript', 'React', 'Node.js', 'DSA'],
    featured: true
  },
  {
    id: '5',
    title: 'RBR GATE CSE Preparation',
    provider: 'RBR',
    description: 'Comprehensive preparation course for GATE Computer Science examination with previous year papers.',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 250,
    originalPrice: 5999,
    category: 'GATE Preparation',
    tags: ['GATE', 'Computer Science', 'Competitive Exams']
  },
  {
    id: '6',
    title: 'Sheriyans Coding School - Backend Domination',
    provider: 'Sheriyans Coding School',
    description: 'Master backend development with Node.js, Express, MongoDB, and deployment strategies.',
    image: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 250,
    originalPrice: 6999,
    category: 'Backend Development',
    tags: ['Node.js', 'Express', 'MongoDB', 'APIs'],
    featured: true
  },
  {
    id: '7',
    title: 'Train with Shubham - DevOps Batch 6',
    provider: 'Train with Shubham',
    description: 'Learn DevOps practices, tools, and automation with hands-on projects and real-world scenarios.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 250,
    originalPrice: 7499,
    category: 'DevOps',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'AWS']
  },
  {
    id: '8',
    title: 'Naresh IT - Data Science & Analytics with Generative AI',
    provider: 'Naresh IT',
    description: 'Comprehensive data science course covering Python, statistics, machine learning and generative AI.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 250,
    originalPrice: 9999,
    category: 'Data Science',
    tags: ['Python', 'Machine Learning', 'AI', 'Data Analysis'],
    featured: true
  },
  {
    id: '9',
    title: 'Love Babbar - Supreme 2.0 (DSA + System Design)',
    provider: 'Love Babbar',
    description: 'Complete DSA and System Design course from basics to advanced with placement preparation.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 250,
    originalPrice: 8499,
    category: 'DSA',
    tags: ['Data Structures', 'Algorithms', 'System Design', 'Interview Prep'],
    featured: true
  },
  {
    id: '10',
    title: 'PW Mod APK Bundle',
    provider: 'PhysicsWallah',
    description: 'Premium PhysicsWallah content access for PC, Mobile, and Web platforms.',
    image: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 450,
    originalPrice: 2999,
    category: 'Bundle',
    tags: ['Physics', 'Chemistry', 'Mathematics'],
    isBundle: true,
    bundleItems: ['PC Access', 'Mobile Access', 'Web Access']
  },
  {
    id: '11',
    title: '"MERA PLACEMENT HOGA" Course',
    provider: 'Placement Prep',
    description: 'Comprehensive placement preparation course with mock interviews and company-specific strategies.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 350,
    originalPrice: 1999,
    category: 'Placement',
    tags: ['Interviews', 'Resume Building', 'Aptitude', 'HR Prep'],
    isBundle: true,
    bundleItems: ['Mock Interviews', 'Resume Templates', 'Company Guides']
  },
  {
    id: '12',
    title: 'PrepInsta Company-wise Materials',
    provider: 'PrepInsta',
    description: 'Targeted preparation materials for specific companies with previous interview questions and patterns.',
    image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 250,
    originalPrice: 1499,
    category: 'Placement',
    tags: ['Company Specific', 'Interview Questions', 'Test Patterns'],
    isBundle: true,
    bundleItems: ['FAANG Guides', 'Service Companies', 'Product Companies']
  },
  {
    id: '13',
    title: 'Apna College - Sigma Batch 7',
    provider: 'Apna College',
    description: 'Latest Sigma batch with updated curriculum, additional projects and enhanced placement support.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 250,
    originalPrice: 9999,
    category: 'Web Development',
    tags: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'NextJS'],
    featured: true
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getFeaturedCourses = (): Course[] => {
  return courses.filter(course => course.featured);
};

export const getBundleCourses = (): Course[] => {
  return courses.filter(course => course.isBundle);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter(course => course.category === category);
};

export const getCoursesByProvider = (provider: string): Course[] => {
  return courses.filter(course => course.provider === provider);
};