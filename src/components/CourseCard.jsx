import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Clock, BookOpen, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const CourseCard = ({ course, onEnroll }) => {
  const { isEnrolled, isAuthenticated, enroll } = useAuth();
  const navigate = useNavigate();
  const enrolled = isEnrolled(course.id);

  const handleEnrollClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/courses/${course.id}` } });
      return;
    }

    if (enrolled) {
      navigate('/my-learning');
      return;
    }

    if (onEnroll) {
      onEnroll(course.id);
    } else {
      enroll(course.id);
    }
  };

  return (
    <div className="course-card">
      <Link to={`/courses/${course.id}`} className="course-card-image-link">
        <div className="course-image-container">
          <img
            src={course.image}
            alt={course.title}
            className="course-image"
            loading="lazy"
          />
          <div className="course-badges">
            <span className="badge category-badge">{course.category}</span>
            {course.isPopular && (
              <span className="badge popular-badge">
                <Sparkles size={12} className="inline mr-1" /> Popular
              </span>
            )}
          </div>
          {enrolled && (
            <div className="enrolled-badge-ribbon">
              <CheckCircle size={14} /> Enrolled
            </div>
          )}
        </div>
      </Link>

      <div className="course-card-content">
        <div className="course-card-meta">
          <span className="course-level-tag">{course.level || 'All Levels'}</span>
          <div className="course-rating">
            <Star size={15} className="star-icon filled" />
            <span className="rating-score">{course.rating.toFixed(1)}</span>
            <span className="rating-count">({course.reviewsCount.toLocaleString()})</span>
          </div>
        </div>

        <h3 className="course-card-title">
          <Link to={`/courses/${course.id}`} title={course.title}>
            {course.title}
          </Link>
        </h3>

        <p className="course-card-desc">
          {course.shortDescription}
        </p>

        <div className="course-instructor">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="instructor-avatar-small"
          />
          <div className="instructor-text">
            <span className="instructor-label">Instructor</span>
            <span className="instructor-name">{course.instructor.name}</span>
          </div>
        </div>

        <div className="course-info-row">
          <div className="info-item">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="info-item">
            <BookOpen size={14} />
            <span>{course.lessonsCount} lessons</span>
          </div>
        </div>

        <div className="course-card-footer">
          <div className="course-pricing">
            <span className="current-price">${course.price.toFixed(2)}</span>
            {course.originalPrice && (
              <span className="original-price">${course.originalPrice.toFixed(2)}</span>
            )}
          </div>

          {enrolled ? (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleEnrollClick}
            >
              Continue Learning <ArrowRight size={14} />
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handleEnrollClick}
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
