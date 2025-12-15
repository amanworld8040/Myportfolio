import { Education } from '@/types';

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Institute of Technical Education and Research, Siksha O Anusandhan',
    location: 'Bhubaneswar, India',
    startDate: 'October 2021',
    endDate: 'June 2025',
    gpa: '7.28/10 CGPA',
    relevantCourses: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management System',
      'Operating Systems',
      'Software Engineering',
      'Computer Networks'
    ],
  },
  {
    id: '2',
    degree: '12th Standard (Central Board of Secondary Education)',
    institution: "St Mary's English High School",
    location: 'India',
    startDate: 'March 2019',
    endDate: 'April 2021',
    percentage: '75.6%',
    relevantCourses: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'English',
      'Computer Science'
    ],
  },
];

