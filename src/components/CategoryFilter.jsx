import React from 'react';
import { Layers } from 'lucide-react';

export const CategoryFilter = ({
  categories = [],
  selectedCategory = 'All',
  onSelectCategory,
  categoryCounts = {}
}) => {
  return (
    <div className="category-filter-wrapper" role="tablist" aria-label="Filter by category">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        const count = categoryCounts[cat];

        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={`category-pill ${isSelected ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat === 'All' && <Layers size={15} className="category-icon" />}
            <span>{cat}</span>
            {count !== undefined && (
              <span className={`category-count-badge ${isSelected ? 'count-active' : ''}`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
