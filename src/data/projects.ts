import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Manufacturing Execution System (MES)',
    description: 'Production-grade MES system integrated with Microsoft Dynamics ERP for real-time manufacturing tracking and workflow management.',
    technologies: ['Spring Boot', 'React.js', 'MS SQL Server', 'Microsoft Dynamics ERP', 'JWT', 'IIS Server'],
    features: [
      'Real-time production tracking and monitoring',
      'End-to-end production workflow management',
      'ERP-based raw material request and issuance integration',
      'Shop-floor monitoring and production recording',
      'Quality inspection workflows with pass/fail handling',
      'Automatic routing for incomplete production',
      'Role-based access control (Admin, Supervisor, Operator)',
      'Bi-directional API integration with ERP',
      'Deployed for 30+ active users in live production'
    ],
    category: 'Backend',
    githubUrl: 'https://github.com/Amanworld8040/mes-system',
  },
  {
    id: '2',
    title: 'Online Training Platform',
    description: 'Role-based online training platform with admin and learner features for managing courses, users, and progress tracking.',
    technologies: ['Java', 'Spring Boot', 'Spring MVC', 'PostgreSQL', 'REST APIs'],
    features: [
      'Admin features for managing users, programs, and courses',
      'Learner enrollment and progress tracking',
      'Secure authentication and authorization',
      'REST API integration with PostgreSQL',
      'Reduced manual work by 40%',
      'Improved query performance by 25%'
    ],
    category: 'Backend',
    githubUrl: 'https://github.com/Amanworld8040/training-platform',
  },
];

