import React from 'react';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { getColorClasses } from '../data/courseData';

const ContentDisplay = ({ course, chapter, mode, onBack }) => {
  const colors = getColorClasses(course.color);
  const Icon = mode.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Study Modes
        </button>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
              <Icon className="text-white" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">
                {course.name} • Chapter {chapter.id}
              </p>
              <h2 className="text-2xl font-bold text-gray-800">{chapter.title}</h2>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="text-center py-12">
              <PlayCircle className="text-gray-300 mx-auto mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Content Coming Soon</h3>
              <p className="text-gray-500">
                Upload your slides and add content for:{' '}
                <span className="font-semibold">{mode.title}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay;