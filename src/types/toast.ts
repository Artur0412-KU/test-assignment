type ToastProps = {
  message: string;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
  type?: 'success' | 'error' | 'info' | 'warning';
};
