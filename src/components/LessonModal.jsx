import React from 'react';
import {
  X,
  PlayCircle,
  CheckCircle2,
  Circle,
  FileText,
  HelpCircle,
  FolderGit2,
  Award,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ProgressBar from './ProgressBar';

export const LessonModal = ({ course, isOpen, onClose }) => {
  const { toggleLesson, enrollments } = useAuth();

  if (!isOpen || !course) return null;

  // Find this course's enrollment record
  const enrollment = enrollments.find((e) => e.courseId === course.id);
  const completedLessons = enrollment ? enrollment.completedLessons || [] : [];
  const completedCount = completedLessons.length;
  const totalCount = course.lessonsCount || 1;
  const percentage = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const isAllComplete = percentage === 100;

  const getLessonIcon = (type, isCompleted) => {
    if (isCompleted) {
      return <CheckCircle2 className="lesson-status-icon completed" size={20} />;
    }

    switch (type) {
      case 'project':
        return <FolderGit2 className="lesson-type-icon text-amber-500" size={18} />;
      case 'quiz':
        return <HelpCircle className="lesson-type-icon text-purple-500" size={18} />;
      case 'reading':
        return <FileText className="lesson-type-icon text-emerald-500" size={18} />;
      case 'video':
      default:
        return <PlayCircle className="lesson-type-icon text-indigo-500" size={18} />;
    }
  };

  const handleToggle = (lessonId) => {
    toggleLesson(course.id, lessonId);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="modal-badge">{course.category}</span>
            <h2 className="modal-title">{course.title}</h2>
            <p className="modal-subtitle">Instructor: {course.instructor.name}</p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close learning curriculum dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress summary banner */}
        <div className="modal-progress-banner">
          <ProgressBar
            percentage={percentage}
            completedCount={completedCount}
            totalCount={totalCount}
            size="lg"
          />

          {isAllComplete && (
            <div className="modal-celebration-banner">
              <Award size={24} className="celebration-icon" />
              <div>
                <p className="celebration-title">
                  <Sparkles size={16} className="inline mr-1" /> Congratulations! You completed this course!
                </p>
                <p className="celebration-subtitle">
                  All {totalCount} lessons and projects have been successfully mastered.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Body: Interactive Lessons Checklist */}
        <div className="modal-body-curriculum">
          <div className="curriculum-instruction">
            <p>
              Click on any lesson below to toggle its completion state. Your progress saves automatically to LocalStorage.
            </p>
          </div>

          <div className="curriculum-modules-list">
            {course.curriculum &&
              course.curriculum.map((module, mIdx) => {
                const moduleLessons = module.lessons || [];
                const completedInModule = moduleLessons.filter((l) =>
                  completedLessons.includes(l.id)
                ).length;

                return (
                  <div key={mIdx} className="modal-module-card">
                    <div className="modal-module-header">
                      <h4 className="modal-module-name">{module.moduleTitle}</h4>
                      <span className="module-counter">
                        {completedInModule} / {moduleLessons.length} Done
                      </span>
                    </div>

                    <div className="modal-lessons-list">
                      {moduleLessons.map((lesson) => {
                        const isLessonDone = completedLessons.includes(lesson.id);

                        return (
                          <div
                            key={lesson.id}
                            className={`modal-lesson-item ${isLessonDone ? 'lesson-completed' : ''}`}
                            onClick={() => handleToggle(lesson.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleToggle(lesson.id);
                              }
                            }}
                          >
                            <div className="lesson-status-toggle">
                              {getLessonIcon(lesson.type, isLessonDone)}
                            </div>

                            <div className="lesson-details">
                              <span className="lesson-title-text">{lesson.title}</span>
                              <div className="lesson-meta-tags">
                                <span className="lesson-type-badge">{lesson.type}</span>
                                <span className="lesson-duration-tag">{lesson.duration}</span>
                              </div>
                            </div>

                            <div className="lesson-action-indicator">
                              {isLessonDone ? (
                                <span className="completed-label">Completed</span>
                              ) : (
                                <span className="mark-complete-label">Mark as Complete</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span className="footer-status-text">
            {isAllComplete
              ? 'Course 100% finished'
              : `${totalCount - completedCount} lessons remaining`}
          </span>
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Done & Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonModal;
