import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { getColorClasses } from '../data/courseData';

const StudyModeSelection = ({ course, chapter, studyModes, onSelectMode, onBack }) => {
  const colors = getColorClasses(course.color);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Chapters
        </button>

        <div className="text-center mb-10">
          <p className={`${colors.text} text-sm font-semibold mb-2`}>
            {course.name} • Chapter {chapter.id}
          </p>
          <h1 className="text-4xl font-bold text-gray-800">{chapter.title}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyModes.map(mode => {
            const modeColors = getColorClasses(mode.color);
            const Icon = mode.icon;
            return (
              <div
                key={mode.id}
                onClick={() => onSelectMode(mode)}
                className={`${modeColors.light} rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105 border-2 ${modeColors.border}`}
              >
                <div className="text-center">
                  <div className={`${modeColors.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{mode.title}</h3>
                  <p className="text-gray-600">{mode.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudyModeSelection;