import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  Clock,
  ArrowRight,
  PlayCircle,
  Sparkles,
  Inbox
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { courses } from '../data/courses';
import ProgressBar from '../components/ProgressBar';
import LessonModal from '../components/LessonModal';

export const MyLearning = () => {
  const { currentUser, enrollments } = useAuth();
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'in-progress' | 'completed'
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  // Map user enrollments to full course records with calculated progress
  const userCoursesWithProgress = enrollments
    .map((enrollment) => {
      const course = courses.find((c) => c.id === enrollment.courseId);
      if (!course) return null;

      const completedLessons = enrollment.completedLessons || [];
      const completedCount = completedLessons.length;
      const totalCount = course.lessonsCount || 1;
      const percentage = Math.min(100, Math.round((completedCount / totalCount) * 100));
      const isCompleted = percentage === 100;

      return {
        ...course,
        completedLessons,
        completedCount,
        totalCount,
        percentage,
        isCompleted,
        enrolledAt: enrollment.enrolledAt,
        lastAccessedAt: enrollment.lastAccessedAt
      };
    })
    .filter(Boolean);

  // Compute counts for tab badges
  const totalEnrolled = userCoursesWithProgress.length;
  const completedCourses = userCoursesWithProgress.filter((c) => c.isCompleted);
  const inProgressCourses = userCoursesWithProgress.filter((c) => !c.isCompleted);

  // Filter courses based on active tab
  const displayedCourses = userCoursesWithProgress.filter((course) => {
    if (activeTab === 'completed') return course.isCompleted;
    if (activeTab === 'in-progress') return !course.isCompleted;
    return true; // 'all'
  });

  // Calculate overall platform learning stats for the student
  const totalLessonsCompleted = userCoursesWithProgress.reduce(
    (acc, curr) => acc + curr.completedCount,
    0
  );

  return (
    <div className="my-learning-page-view">
      {/* Dashboard Header Bar */}
      <div className="learning-header-banner">
        <div className="learning-header-container">
          <div className="student-profile-summary">
            <div className="student-avatar-large">
              {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'S'}
            </div>
            <div className="student-text-group">
              <span className="student-badge">Student Dashboard</span>
              <h1 className="learning-welcome-title">Welcome back, {currentUser?.name}!</h1>
              <p className="student-email-tag">{currentUser?.email}</p>
            </div>
          </div>

          {/* Quick Learning Stats Cards */}
          <div className="learning-stats-cards">
            <div className="metric-pill-card">
              <BookOpen size={20} className="text-indigo-500" />
              <div>
                <span className="pill-number">{totalEnrolled}</span>
                <span className="pill-label">Enrolled</span>
              </div>
            </div>

            <div className="metric-pill-card">
              <Clock size={20} className="text-amber-500" />
              <div>
                <span className="pill-number">{inProgressCourses.length}</span>
                <span className="pill-label">In Progress</span>
              </div>
            </div>

            <div className="metric-pill-card">
              <Award size={20} className="text-emerald-500" />
              <div>
                <span className="pill-number">{completedCourses.length}</span>
                <span className="pill-label">Completed</span>
              </div>
            </div>

            <div className="metric-pill-card">
              <CheckCircle2 size={20} className="text-blue-500" />
              <div>
                <span className="pill-number">{totalLessonsCompleted}</span>
                <span className="pill-label">Lessons Done</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="learning-content-container">
        {/* Navigation Tabs (All, In Progress, Completed) */}
        <div className="learning-tabs-bar" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'all'}
            className={`tab-item ${activeTab === 'all' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Courses
            <span className="tab-badge">{totalEnrolled}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'in-progress'}
            className={`tab-item ${activeTab === 'in-progress' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('in-progress')}
          >
            In Progress
            <span className="tab-badge">{inProgressCourses.length}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'completed'}
            className={`tab-item ${activeTab === 'completed' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
            <span className="tab-badge">{completedCourses.length}</span>
          </button>
        </div>

        {/* Course Cards List or Empty State */}
        {displayedCourses.length > 0 ? (
          <div className="enrolled-courses-grid">
            {displayedCourses.map((course) => (
              <div key={course.id} className="enrolled-course-card">
                <div className="enrolled-card-image-col">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="enrolled-course-thumb"
                  />
                  <span className="enrolled-category-badge">{course.category}</span>
                  {course.isCompleted && (
                    <div className="course-completed-ribbon">
                      <Award size={14} /> Completed
                    </div>
                  )}
                </div>

                <div className="enrolled-card-content">
                  <div className="enrolled-header-row">
                    <span className="enrolled-level">{course.level}</span>
                    <span className="enrolled-time">{course.duration}</span>
                  </div>

                  <h3 className="enrolled-course-title">
                    <Link to={`/courses/${course.id}`}>{course.title}</Link>
                  </h3>

                  <p className="enrolled-instructor-name">
                    Instructor: <strong>{course.instructor.name}</strong>
                  </p>

                  {/* Progress Bar & Percentage */}
                  <div className="enrolled-progress-section">
                    <ProgressBar
                      percentage={course.percentage}
                      completedCount={course.completedCount}
                      totalCount={course.totalCount}
                      size="md"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="enrolled-actions-row">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => setSelectedCourseForModal(course)}
                    >
                      <PlayCircle size={15} />
                      {course.isCompleted ? 'Review Lessons' : 'Continue Learning'}
                    </button>

                    <Link
                      to={`/courses/${course.id}`}
                      className="btn btn-outline btn-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state-card learning-empty-state">
            <div className="empty-icon-box">
              <Inbox size={48} className="empty-icon" />
            </div>
            {totalEnrolled === 0 ? (
              <>
                <h3 className="empty-title">You haven't enrolled in any courses yet</h3>
                <p className="empty-description">
                  Explore our extensive catalog of Web Development, UI/UX Design, Data Science,
                  and Programming courses to begin your personalized learning journey.
                </p>
                <div className="empty-actions">
                  <Link to="/courses" className="btn btn-primary btn-lg">
                    <Sparkles size={18} /> Explore Courses
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h3 className="empty-title">
                  No courses found in "{activeTab === 'completed' ? 'Completed' : 'In Progress'}"
                </h3>
                <p className="empty-description">
                  {activeTab === 'completed'
                    ? "You haven't completed any courses yet. Keep learning and check off your completed lessons!"
                    : "You don't have any courses currently in progress. All enrolled courses are completed!"}
                </p>
                <div className="empty-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setActiveTab('all')}
                  >
                    View All Enrolled Courses
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Interactive Lesson Modal */}
      {selectedCourseForModal && (
        <LessonModal
          course={selectedCourseForModal}
          isOpen={!!selectedCourseForModal}
          onClose={() => setSelectedCourseForModal(null)}
        />
      )}
    </div>
  );
};

export default MyLearning;
