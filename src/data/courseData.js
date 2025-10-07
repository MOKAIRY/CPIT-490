import { FileText, BookOpen, Brain, HelpCircle } from 'lucide-react';

export const courses = [
  {
    id: 1,
    name: "Cloud Computing",
    code: "CIT 490",
    color: "blue",
    chapters: [
      { id: 1, title: "Introduction to Cloud Computing" },
      { id: 2, title: "Cloud Service Models" },
      { id: 3, title: "Virtualization" },
      { id: 4, title: "Cloud Security" },
      { id: 5, title: "Cloud Storage" }
    ]
  },
  {
    id: 2,
    name: "System Administration",
    code: "CIT 491",
    color: "green",
    chapters: [
      { id: 1, title: "Linux Fundamentals" },
      { id: 2, title: "User Management" },
      { id: 3, title: "File Systems" },
      { id: 4, title: "Network Configuration" },
      { id: 5, title: "System Monitoring" }
    ]
  },
  {
    id: 3,
    name: "Database Systems",
    code: "CIT 492",
    color: "purple",
    chapters: [
      { id: 1, title: "Database Fundamentals" },
      { id: 2, title: "SQL Basics" },
      { id: 3, title: "Normalization" },
      { id: 4, title: "Transactions" },
      { id: 5, title: "Database Design" }
    ]
  }
];

export const studyModes = [
  {
    id: 'slides',
    title: 'View Slides',
    description: 'Review the original course slides',
    icon: FileText,
    color: 'blue'
  },
  {
    id: 'summary',
    title: 'Summary',
    description: 'Get a quick overview of key points',
    icon: BookOpen,
    color: 'green'
  },
  {
    id: 'explain',
    title: 'Explain Concepts',
    description: 'Deep dive into concepts with examples',
    icon: Brain,
    color: 'purple'
  },
  {
    id: 'quiz',
    title: 'Practice Quiz',
    description: 'Test your knowledge with questions',
    icon: HelpCircle,
    color: 'orange'
  }
];

export const getColorClasses = (color) => {
  const colors = {
    blue: {
      bg: 'bg-blue-500',
      hover: 'hover:bg-blue-600',
      light: 'bg-blue-50',
      border: 'border-blue-500',
      text: 'text-blue-600'
    },
    green: {
      bg: 'bg-green-500',
      hover: 'hover:bg-green-600',
      light: 'bg-green-50',
      border: 'border-green-500',
      text: 'text-green-600'
    },
    purple: {
      bg: 'bg-purple-500',
      hover: 'hover:bg-purple-600',
      light: 'bg-purple-50',
      border: 'border-purple-500',
      text: 'text-purple-600'
    },
    orange: {
      bg: 'bg-orange-500',
      hover: 'hover:bg-orange-600',
      light: 'bg-orange-50',
      border: 'border-orange-500',
      text: 'text-orange-600'
    }
  };
  return colors[color] || colors.blue;
};