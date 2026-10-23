import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const ProgressBar = ({
  percentage = 0,
  completedCount = 0,
  totalCount = 0,
  showLabel = true,
  size = 'md'
}) => {
  const safePercentage = Math.min(100, Math.max(0, Math.round(percentage)));
  const isComplete = safePercentage === 100;

  return (
    <div className={`progress-wrapper progress-${size}`}>
      {showLabel && (
        <div className="progress-header">
          <span className="progress-stats">
            {completedCount} of {totalCount} lessons completed
          </span>
          <span className={`progress-percent ${isComplete ? 'is-complete' : ''}`}>
            {isComplete && <CheckCircle2 size={14} className="complete-icon" />}
            {safePercentage}%
          </span>
        </div>
      )}
      <div className="progress-track" role="progressbar" aria-valuenow={safePercentage} aria-valuemin="0" aria-valuemax="100">
        <div
          className={`progress-fill ${isComplete ? 'fill-completed' : ''}`}
          style={{ width: `${safePercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
