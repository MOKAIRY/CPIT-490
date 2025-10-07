import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { getColorClasses } from '../data/courseData';

const ChapterSelection = ({ course, onSelectChapter, onBack }) => {
  const colors = getColorClasses(course.color);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Courses
        </button>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{course.name}</h1>
          <p className={`${colors.text} text-xl font-semibold`}>{course.code}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.chapters.map(chapter => (
            <div
              key={chapter.id}
              onClick={() => onSelectChapter(chapter)}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl transition-all transform hover:scale-102 border-l-4 border-gray-300 hover:border-gray-600"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`${colors.bg} ${colors.hover} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-colors`}>
                    {chapter.id}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{chapter.title}</h3>
                    <p className="text-sm text-gray-500">Chapter {chapter.id}</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterSelection;