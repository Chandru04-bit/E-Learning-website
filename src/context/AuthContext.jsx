import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  initializeStorage,
  getActiveUserSession,
  setActiveUserSession,
  clearActiveUserSession,
  authenticateUser,
  registerUser,
  getUserEnrollments,
  enrollInCourse as storageEnroll,
  isUserEnrolled as storageIsEnrolled,
  toggleLessonCompletion as storageToggleLesson
} from '../utils/storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Show a momentary toast notification
  const showToast = useCallback((message, type = 'info') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  }, []);

  // Initialize storage defaults and load active session on startup
  useEffect(() => {
    initializeStorage();
    const sessionUser = getActiveUserSession();
    if (sessionUser) {
      setCurrentUser(sessionUser);
      setEnrollments(getUserEnrollments(sessionUser.id));
    }
    setLoading(false);
  }, []);

  // Refresh enrollments whenever currentUser changes
  const refreshEnrollments = useCallback(() => {
    if (currentUser) {
      const userEnrollments = getUserEnrollments(currentUser.id);
      setEnrollments([...userEnrollments]);
    } else {
      setEnrollments([]);
    }
  }, [currentUser]);

  // Login handler
  const login = (email, password) => {
    const result = authenticateUser(email, password);
    if (result.success) {
      setActiveUserSession(result.user);
      setCurrentUser(result.user);
      setEnrollments(getUserEnrollments(result.user.id));
      showToast(`Welcome back, ${result.user.name}!`, 'success');
      return { success: true };
    } else {
      showToast(result.message, 'error');
      return { success: false, message: result.message };
    }
  };

  // Demo user quick login
  const loginDemo = () => {
    return login('demo@edupulse.com', 'Password123');
  };

  // Register handler
  const register = ({ name, email, password }) => {
    const result = registerUser({ name, email, password });
    if (result.success) {
      showToast('Registration successful! Please sign in with your credentials.', 'success');
      return { success: true };
    } else {
      showToast(result.message, 'error');
      return { success: false, message: result.message };
    }
  };

  // Logout handler
  const logout = () => {
    clearActiveUserSession();
    setCurrentUser(null);
    setEnrollments([]);
    showToast('You have been logged out successfully.', 'info');
  };

  // Enroll in a course
  const enroll = (courseId) => {
    if (!currentUser) {
      showToast('Please log in or register to enroll in courses.', 'warning');
      return { success: false, requireAuth: true };
    }

    const result = storageEnroll(currentUser.id, courseId);
    if (result.success) {
      refreshEnrollments();
      showToast('Enrolled successfully! You can track your progress in My Learning.', 'success');
      return { success: true };
    } else {
      showToast(result.message, 'warning');
      return { success: false, message: result.message };
    }
  };

  // Check enrollment
  const isEnrolled = useCallback(
    (courseId) => {
      if (!currentUser) return false;
      return storageIsEnrolled(currentUser.id, courseId);
    },
    [currentUser, enrollments]
  );

  // Toggle lesson completed status
  const toggleLesson = (courseId, lessonId) => {
    if (!currentUser) return false;
    const result = storageToggleLesson(currentUser.id, courseId, lessonId);
    if (result.success) {
      refreshEnrollments();
      const statusText = result.isCompleted ? 'marked as completed' : 'marked as incomplete';
      showToast(`Lesson ${statusText}!`, 'info');
      return true;
    }
    return false;
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    enrollments,
    loading,
    toast,
    showToast,
    login,
    loginDemo,
    register,
    logout,
    enroll,
    isEnrolled,
    toggleLesson,
    refreshEnrollments
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
