import React from 'react';
import { BookOpen, Trophy } from 'lucide-react';
import { getColorClasses } from '../data/courseData';

const CourseSelection = ({ courses, onSelectCourse }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="text-yellow-500 mr-3" size={48} />
            <h1 className="text-5xl font-bold text-gray-800">Study Platform</h1>
          </div>
          <p className="text-xl text-gray-600">Select a course to begin your exam preparation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => {
            const colors = getColorClasses(course.color);
            return (
              <div
                key={course.id}
                onClick={() => onSelectCourse(course)}
                className={`${colors.light} rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105 border-2 ${colors.border}`}
              >
                <div className="text-center">
                  <div className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{course.name}</h2>
                  <p className={`${colors.text} font-semibold text-lg mb-4`}>{course.code}</p>
                  <p className="text-gray-600">{course.chapters.length} Chapters</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;