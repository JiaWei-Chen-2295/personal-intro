import { useState, useEffect } from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

interface NotificationProps {
    message: string;
    type: 'success' | 'warning' | 'error' | 'info';
    duration?: number;
    isVisible: boolean;
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type = 'info', duration = 3000, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    if (!isVisible) return null;

    // 根据通知类型设置不同的背景颜色、文字颜色和图标
    const theme = {
        success: {
            bgColor: 'bg-green-500',
            textColor: 'text-white',
            icon: <FaCheckCircle className="mr-2 text-xl" />,
        },
        warning: {
            bgColor: 'bg-yellow-500',
            textColor: 'text-black',
            icon: <FaExclamationTriangle className="mr-2 text-xl" />,
        },
        error: {
            bgColor: 'bg-red-500',
            textColor: 'text-white',
            icon: <FaTimesCircle className="mr-2 text-xl" />,
        },
        info: {
            bgColor: 'bg-blue-500',
            textColor: 'text-white',
            icon: <FaInfoCircle className="mr-2 text-xl" />,
        },
    };

    const selectedTheme = theme[type];

    return (
        <div
            className={`fixed top-5 right-5 ${selectedTheme.bgColor} ${selectedTheme.textColor} p-4 rounded-lg shadow-lg z-200000 flex items-center animate-fade-in`}
        >
            {selectedTheme.icon}
            <span>{message}</span>
            <button onClick={onClose} className="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};

export default Notification;
