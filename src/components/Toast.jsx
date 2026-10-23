import React from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Toast = () => {
  const { toast } = useAuth();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle className="toast-icon text-emerald-500" size={20} />,
    error: <AlertCircle className="toast-icon text-rose-500" size={20} />,
    warning: <AlertCircle className="toast-icon text-amber-500" size={20} />,
    info: <Info className="toast-icon text-indigo-500" size={20} />
  };

  return (
    <div className={`toast-container toast-${toast.type || 'info'}`} role="alert" aria-live="polite">
      <div className="toast-icon-wrapper">
        {icons[toast.type] || icons.info}
      </div>
      <div className="toast-content">
        <p className="toast-message">{toast.message}</p>
      </div>
    </div>
  );
};

export default Toast;
