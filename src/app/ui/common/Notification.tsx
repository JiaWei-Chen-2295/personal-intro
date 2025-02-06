import {useState, useEffect} from "react";
import {FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle} from "react-icons/fa";

interface NotificationProps {
    message: string;
    type: 'success' | 'warning' | 'error' | 'info';
    duration?: number;
    isVisible: boolean;
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({message, type = 'info', duration = 3000, isVisible, onClose}) => {
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
            icon: <FaCheckCircle className="mr-2 text-xl"/>,
        },
        warning: {
            bgColor: 'bg-yellow-500',
            textColor: 'text-black',
            icon: <FaExclamationTriangle className="mr-2 text-xl"/>,
        },
        error: {
            bgColor: 'bg-red-500',
            textColor: 'text-white',
            icon: <FaTimesCircle className="mr-2 text-xl"/>,
        },
        info: {
            bgColor: 'bg-blue-500',
            textColor: 'text-white',
            icon: <FaInfoCircle className="mr-2 text-xl"/>,
        },
    };

    const typeStyles = {
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-black',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
    };

    const selectedTheme = theme[type];

    return isVisible ? (
        <div
            className={`relative flex items-center justify-between px-4 py-2 rounded-lg shadow-lg ${typeStyles[type]} transition-all duration-300 ease-in-out`}
            style={{
                maxWidth: '300px', // 减小宽度
                fontSize: '0.875rem', // 减小字体大小
                lineHeight: '1.25rem', // 调整行高
            }}
        >
            <span>{message}</span>
            <button
                onClick={onClose}
                className="ml-4 text-white hover:text-gray-300 transition-colors duration-200"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4" // 减小关闭按钮的图标大小
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    ) : null;
};

export default Notification;
