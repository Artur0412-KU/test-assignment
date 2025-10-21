import React, { useState, useEffect } from 'react';

type ToastProps = {
  message: string;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
  type?: 'success' | 'error' | 'info' | 'warning';
};

const bgColors: { [key in NonNullable<ToastProps['type']>]: string } = {
  success: '#28a745',
  error: '#dc3545',
  info: '#17a2b8',
  warning: '#ffc107',
};

const Toast: React.FC<ToastProps> = ({
  message,
  duration = 3000,
  onClose,
  showCloseButton = false,
  type = 'info',
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timerId = setTimeout(() => {
      if (!showCloseButton) {
        setVisible(false);
        setTimeout(() => onClose && onClose(), 300);
      }
    }, duration);
    return () => clearTimeout(timerId);
  }, [duration, onClose, showCloseButton]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose && onClose(), 300);
  };

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show Toast</button>
      <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '12px 24px',
        backgroundColor: bgColors[type],
        color: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        justifyContent: 'space-between',
        minWidth: '250px',
        maxWidth: '320px',
      }}
    >
      <span>{message}</span>
      {showCloseButton && (
        <button
          onClick={handleClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '18px',
            marginLeft: '12px',
          }}
          aria-label="close-toast"
        >
          &times;
        </button>
      )}
    </div>
    </div>
    
  );
};

export default Toast;

