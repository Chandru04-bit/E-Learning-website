// Safe LocalStorage helpers for the E-Learning platform

const USERS_KEY = 'edupulse_registered_users';
const CURRENT_USER_KEY = 'edupulse_active_session';
const ENROLLMENTS_PREFIX = 'edupulse_enrollments_';

// Default initial demo user for quick testing
const DEFAULT_DEMO_USER = {
  id: 'user-demo-1',
  name: 'Alex Johnson',
  email: 'demo@edupulse.com',
  password: 'Password123',
  createdAt: new Date().toISOString()
};

/**
 * Initialize default user and seed data if not present
 */
export const initializeStorage = () => {
  try {
    const existingUsers = localStorage.getItem(USERS_KEY);
    if (!existingUsers) {
      localStorage.setItem(USERS_KEY, JSON.stringify([DEFAULT_DEMO_USER]));

      // Seed initial demo enrollments for the demo user
      const demoEnrollments = [
        {
          courseId: 'course-1',
          enrolledAt: new Date(Date.now() - 7 * 86400000).toISOString(),
          completedLessons: ['c1-l1', 'c1-l2', 'c1-l4', 'c1-l5'],
          lastAccessedAt: new Date().toISOString()
        },
        {
          courseId: 'course-2',
          enrolledAt: new Date(Date.now() - 3 * 86400000).toISOString(),
          completedLessons: ['c2-l1', 'c2-l2'],
          lastAccessedAt: new Date().toISOString()
        }
      ];
      localStorage.setItem(
        `${ENROLLMENTS_PREFIX}${DEFAULT_DEMO_USER.id}`,
        JSON.stringify(demoEnrollments)
      );
    }
  } catch (error) {
    console.error('Error initializing storage:', error);
  }
};

/**
 * Retrieve all registered users
 */
export const getRegisteredUsers = () => {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to get registered users:', err);
    return [];
  }
};

/**
 * Register a new user
 */
export const registerUser = ({ name, email, password }) => {
  const users = getRegisteredUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const userExists = users.some(
    (u) => u.email.toLowerCase() === normalizedEmail
  );
  if (userExists) {
    return { success: false, message: 'An account with this email address already exists.' };
  }

  const newUser = {
    id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    name: name.trim(),
    email: normalizedEmail,
    password, // Demo localstorage demonstration
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return { success: true, user: newUser };
};

/**
 * Authenticate user credentials
 */
export const authenticateUser = (email, password) => {
  const users = getRegisteredUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const matchedUser = users.find(
    (u) => u.email.toLowerCase() === normalizedEmail && u.password === password
  );

  if (!matchedUser) {
    return { success: false, message: 'Invalid email or password. Please check your credentials.' };
  }

  // Strip password before returning active session
  const { password: _, ...sessionUser } = matchedUser;
  return { success: true, user: sessionUser };
};

/**
 * Get active session user
 */
export const getActiveUserSession = () => {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error('Failed to get user session:', err);
    return null;
  }
};

/**
 * Set active session user
 */
export const setActiveUserSession = (user) => {
  try {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  } catch (err) {
    console.error('Failed to set user session:', err);
  }
};

/**
 * Clear active session user (Logout)
 */
export const clearActiveUserSession = () => {
  try {
    localStorage.removeItem(CURRENT_USER_KEY);
  } catch (err) {
    console.error('Failed to clear user session:', err);
  }
};

/**
 * Get all enrollments for a specific user ID
 */
export const getUserEnrollments = (userId) => {
  if (!userId) return [];
  try {
    const raw = localStorage.getItem(`${ENROLLMENTS_PREFIX}${userId}`);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to get enrollments:', err);
    return [];
  }
};

/**
 * Check if a user is enrolled in a specific course
 */
export const isUserEnrolled = (userId, courseId) => {
  if (!userId || !courseId) return false;
  const enrollments = getUserEnrollments(userId);
  return enrollments.some((e) => e.courseId === courseId);
};

/**
 * Enroll user in a course
 */
export const enrollInCourse = (userId, courseId) => {
  if (!userId) return { success: false, message: 'You must be logged in to enroll.' };
  if (!courseId) return { success: false, message: 'Course ID is required.' };

  const enrollments = getUserEnrollments(userId);
  const alreadyEnrolled = enrollments.some((e) => e.courseId === courseId);

  if (alreadyEnrolled) {
    return { success: false, message: 'You are already enrolled in this course.' };
  }

  const newEnrollment = {
    courseId,
    enrolledAt: new Date().toISOString(),
    completedLessons: [],
    lastAccessedAt: new Date().toISOString()
  };

  enrollments.push(newEnrollment);
  localStorage.setItem(
    `${ENROLLMENTS_PREFIX}${userId}`,
    JSON.stringify(enrollments)
  );

  return { success: true, message: 'Successfully enrolled!', enrollment: newEnrollment };
};

/**
 * Toggle lesson completion status for a user's course
 */
export const toggleLessonCompletion = (userId, courseId, lessonId) => {
  if (!userId || !courseId || !lessonId) return { success: false };

  const enrollments = getUserEnrollments(userId);
  const targetEnrollment = enrollments.find((e) => e.courseId === courseId);

  if (!targetEnrollment) {
    return { success: false, message: 'Enrollment record not found.' };
  }

  const lessonIndex = targetEnrollment.completedLessons.indexOf(lessonId);
  let isNowCompleted = false;

  if (lessonIndex > -1) {
    targetEnrollment.completedLessons.splice(lessonIndex, 1);
    isNowCompleted = false;
  } else {
    targetEnrollment.completedLessons.push(lessonId);
    isNowCompleted = true;
  }

  targetEnrollment.lastAccessedAt = new Date().toISOString();

  localStorage.setItem(
    `${ENROLLMENTS_PREFIX}${userId}`,
    JSON.stringify(enrollments)
  );

  return {
    success: true,
    isCompleted: isNowCompleted,
    completedLessons: targetEnrollment.completedLessons
  };
};

/**
 * Calculate course progress percentage and details
 */
export const getCourseProgress = (userId, courseId, totalLessonsCount) => {
  if (!userId || !courseId) {
    return { completedCount: 0, totalCount: totalLessonsCount || 0, percentage: 0, isCompleted: false };
  }

  const enrollments = getUserEnrollments(userId);
  const enrollment = enrollments.find((e) => e.courseId === courseId);

  if (!enrollment) {
    return { completedCount: 0, totalCount: totalLessonsCount || 0, percentage: 0, isCompleted: false };
  }

  const completedCount = enrollment.completedLessons ? enrollment.completedLessons.length : 0;
  const total = totalLessonsCount > 0 ? totalLessonsCount : 1;
  const percentage = Math.min(100, Math.round((completedCount / total) * 100));

  return {
    completedCount,
    totalCount: totalLessonsCount,
    percentage,
    isCompleted: percentage === 100,
    completedLessons: enrollment.completedLessons || []
  };
};
