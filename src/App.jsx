import React, { useState } from 'react';
import CourseSelection from './components/CourseSelection';
import ChapterSelection from './components/ChapterSelection';
import StudyModeSelection from './components/StudyModeSelection';
import ContentDisplay from './components/ContentDisplay';
import { courses, studyModes } from './data/courseData';

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);

  const goBack = () => {
    if (selectedMode) {
      setSelectedMode(null);
    } else if (selectedChapter) {
      setSelectedChapter(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    }
  };

  // Course Selection Screen
  if (!selectedCourse) {
    return (
      <CourseSelection 
        courses={courses} 
        onSelectCourse={setSelectedCourse} 
      />
    );
  }

  // Chapter Selection Screen
  if (selectedCourse && !selectedChapter) {
    return (
      <ChapterSelection
        course={selectedCourse}
        onSelectChapter={setSelectedChapter}
        onBack={goBack}
      />
    );
  }

  // Study Mode Selection Screen
  if (selectedChapter && !selectedMode) {
    return (
      <StudyModeSelection
        course={selectedCourse}
        chapter={selectedChapter}
        studyModes={studyModes}
        onSelectMode={setSelectedMode}
        onBack={goBack}
      />
    );
  }

  // Content Display Screen
  if (selectedMode) {
    return (
      <ContentDisplay
        course={selectedCourse}
        chapter={selectedChapter}
        mode={selectedMode}
        onBack={goBack}
      />
    );
  }

  return null;
};

export default App;