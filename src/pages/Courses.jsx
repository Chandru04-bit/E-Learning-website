import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, SearchX, RotateCcw, BookOpen } from 'lucide-react';
import { courses, categories } from '../data/courses';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

export const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filters from URL params if present
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('q') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('recommended');

  // Keep state in sync with URL search params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    if (term) {
      searchParams.set('q', term);
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('recommended');
    setSearchParams({}, { replace: true });
  };

  // Compute category counts based on full list
  const categoryCounts = useMemo(() => {
    const counts = { All: courses.length };
    courses.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        // Category filter
        const matchesCategory =
          selectedCategory === 'All' || course.category === selectedCategory;

        // Search term filter (title, instructor name, shortDescription)
        const term = searchTerm.trim().toLowerCase();
        const matchesSearch =
          !term ||
          course.title.toLowerCase().includes(term) ||
          course.instructor.name.toLowerCase().includes(term) ||
          course.shortDescription.toLowerCase().includes(term);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'name-asc':
            return a.title.localeCompare(b.title);
          case 'rating-desc':
            return b.rating - a.rating;
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'duration-desc':
            return parseInt(b.duration) - parseInt(a.duration);
          case 'recommended':
          default:
            return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        }
      });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="courses-page-view">
      {/* Page Header */}
      <div className="page-header-banner">
        <div className="page-header-container">
          <span className="page-header-tag">Comprehensive Catalog</span>
          <h1 className="page-header-title">Explore All Courses</h1>
          <p className="page-header-desc">
            Discover {courses.length} in-depth professional courses. Choose your topic, learn at
            your pace, and master modern technologies.
          </p>
        </div>
      </div>

      <div className="courses-main-container">
        {/* Controls Toolbar: Search, Category Pills, and Sort */}
        <div className="catalog-toolbar">
          <div className="toolbar-top-row">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              placeholder="Search courses by title, topic, or instructor..."
            />

            <div className="sort-control-wrapper">
              <label htmlFor="sort-select" className="sort-label">
                <SlidersHorizontal size={15} /> Sort by:
              </label>
              <select
                id="sort-select"
                className="sort-select-dropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recommended">Recommended & Popular</option>
                <option value="rating-desc">Rating: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Course Title: A to Z</option>
                <option value="duration-desc">Duration: Longest First</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="toolbar-bottom-row">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
              categoryCounts={categoryCounts}
            />
          </div>
        </div>

        {/* Results summary bar */}
        <div className="results-summary-bar">
          <p className="results-count">
            Showing <strong>{filteredCourses.length}</strong> of{' '}
            <strong>{courses.length}</strong> courses
            {selectedCategory !== 'All' && <span> in <em>{selectedCategory}</em></span>}
            {searchTerm && <span> matching "<em>{searchTerm}</em>"</span>}
          </p>

          {(selectedCategory !== 'All' || searchTerm) && (
            <button
              type="button"
              className="btn btn-ghost btn-sm reset-btn"
              onClick={handleResetFilters}
            >
              <RotateCcw size={14} /> Clear all filters
            </button>
          )}
        </div>

        {/* Course Grid or Empty State */}
        {filteredCourses.length > 0 ? (
          <div className="courses-grid catalog-grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="empty-state-card">
            <div className="empty-icon-box">
              <SearchX size={48} className="empty-icon" />
            </div>
            <h3 className="empty-title">No courses match your criteria</h3>
            <p className="empty-description">
              We couldn’t find any courses matching "{searchTerm}" in the{' '}
              {selectedCategory === 'All' ? 'catalog' : `"${selectedCategory}" category`}.
              Try adjusting your search terms or clearing your filters.
            </p>
            <div className="empty-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleResetFilters}
              >
                <RotateCcw size={16} /> Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
