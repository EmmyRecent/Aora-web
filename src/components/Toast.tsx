import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: string;
  hideToast: () => void;
};

const Toast = ({ message, type = "info", hideToast }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
    }, 3000);

    return () => clearTimeout(timer);
  }, [hideToast]);

  return (
    <div className={`toast active ${type}`} onClick={() => hideToast()}>
      <p className="text-small md:text-body">{message}</p>
      <i className="bx bx-x text-lg text-white"></i>
    </div>
  );
};

export default Toast;
