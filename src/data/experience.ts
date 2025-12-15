import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Zenuino Pvt. Ltd.',
    position: 'Backend Developer',
    location: 'Jamshedpur, India (On-Site)',
    startDate: '2024',
    endDate: 'Present',
    current: true,
    achievements: [
      'Developed a production-grade MES system using React.js, Spring Boot, and MSSQL for real-time tracking',
      'Designed optimized SQL Server schemas and high-efficiency REST APIs, reducing backend latency by 40%',
      'Implemented secure JWT authentication and role-based dashboards for Admin, Supervisor, and Operator roles',
      'Integrated MES with existing ERP using bi-directional APIs for seamless synchronization',
      'Deployed application on IIS Server with reverse proxy, SSL configuration, and environment-based builds'
    ],
    technologies: ['React.js', 'Spring Boot', 'MS SQL Server', 'JWT', 'IIS Server', 'Microsoft Dynamics ERP'],
  },
  {
    id: '2',
    company: 'Xmplar Management Solutions Pvt. Ltd.',
    position: 'Backend Developer',
    location: 'Bengaluru, India (On-Site)',
    startDate: 'July 2025',
    endDate: 'September 2025',
    current: false,
    achievements: [
      'Developed and deployed 15+ high-performance REST APIs using Java, Spring Boot, and MVC for integration with Crest ERP',
      'Delivered fully customized ERP modules using Apache OFBiz for client-specific workflows',
      'Contributed across the full development lifecycle (requirement analysis, development, testing, deployment)'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Apache OFBiz', 'REST APIs'],
  },
];

