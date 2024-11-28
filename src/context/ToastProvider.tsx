import { createContext, ReactNode, useContext, useState } from "react";
import Toast from "../components/Toast";

// Structure of the toast object.
type ToastType = {
  message: string;
  type: "success" | "error" | "info";
};

// Type for the context value
type ToastContextType = {
  showToast: (toast: ToastType) => void;
};

// Props for the ToastProvider
type ToastProviderProps = {
  children: ReactNode;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Custom hook to use the ToastContext
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastType | null>(null);

  const showToast = (toastObject: ToastType) => {
    setToast(toastObject);
  };

  const hideToast = () => setToast(null); // hide the toast.

  return (
    <ToastContext.Provider value={{ showToast }}>
      <div>
        {children}

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            hideToast={hideToast}
          />
        )}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
