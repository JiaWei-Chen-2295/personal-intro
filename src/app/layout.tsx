"use client"
import "./globals.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFileAlt, faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons"; // 从 brands 模块中导入 faGithub
import {useState} from "react";
import Notification from "@/app/ui/common/Notification"; // 添加 useState 引入

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [isEmailCardVisible, setIsEmailCardVisible] = useState(false);
    const [isMouseOverCard, setIsMouseOverCard] = useState(false);
    const [notifications, setNotifications] = useState<{ id: number; message: string; type: 'success' | 'warning' | 'error' | 'info' }[]>([]);
    // 通过 ID 允许出现多个通知
    let notificationId = 0;

    const showNotification = (message: string, type: 'success' | 'warning' | 'error' | 'info') => {
        const id = notificationId++;
        setNotifications((prev) => [...prev, { id, message, type }]);

        // 自动移除通知
        setTimeout(() => {
            removeNotification(id);
        }, 3000);
    };

    const removeNotification = (id: number) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };
    return (
        <html lang="en">
        <body
            className={"antialiasing bg-black"}
        >
        <div className={"blog-header flex justify-between items-center"}>
            <div className={"header-logo"}>
                <h1>JavierChen</h1>
            </div>

            <div className={"header-links"}>
                <div className={"header-links-project"}>
                    <a href={"#project"}>
                        <FontAwesomeIcon icon={faProjectDiagram} className="mr-2"/>
                        项目
                    </a>
                </div>
                <div className={"header-links-article"}>
                    <a href={"#article"}>
                        <FontAwesomeIcon icon={faFileAlt} className="mr-2"/>
                        文章
                    </a>
                </div>
            </div>

            <div className={"contact-links flex items-center"}>
                <div className={"contact-links-github"}>
                    <a href={"https://github.com/JiaWei-Chen-2295"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="mr-2"/>
                    </a>
                </div>
                <div className={"contact-links-email relative"}>
                    <a
                        href={"email://javierchen22952295@gmail.com"}
                        onMouseEnter={() => setIsEmailCardVisible(true)}
                        onMouseLeave={() => setIsMouseOverCard(false)} // 修改鼠标离开图标时的行为
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                    </a>
                    {isEmailCardVisible && (
                        <div
                            className="absolute flex flex-col right-0 mt-5 p-2 bg-white text-black rounded shadow items-center dark:text-white dark:bg-black border animate-fade-in"
                            onMouseEnter={() => setIsMouseOverCard(true)}
                            onMouseLeave={() => setIsEmailCardVisible(false)}
                        >
                            <p>我的邮箱是:</p>
                            <p className="mr-2 p-2">javierchen22952295@gmail.com</p>
                            <button
                                className={"dark: text-white"}
                                onClick={() => {
                                    navigator.clipboard.writeText("javierchen22952295@gmail.com").then(() => {
                                        showNotification("复制成功", 'success');
                                    }, err => {
                                    });
                                    setIsEmailCardVisible(false);
                                }}
                            >
                                <p
                                    className={"dark: text-white"}
                                >Copy</p>
                                <svg
                                    xmlns={"http://www.w3.org/2000/svg"}
                                    className={"h-6 w-6"}
                                    fill={"none"}
                                    viewBox={"0 0 24 24"}
                                    stroke={"currentColor"}
                                    strokeWidth={"4"}
                                >
                                    <path
                                        strokeLinecap={"round"}
                                        strokeLinejoin={"round"}
                                        d={"M14 5l7 7m0 0l-7 7m7-7H3"}
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                <label className="ui-switch">
                    <input type="checkbox" className="hidden"/>
                    <div className="slider relative w-12 h-6 bg-gray-300 rounded-full cursor-pointer">
                        <div
                            className="circle absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-transform duration-150 ease-in-out"></div>
                    </div>
                </label>
            </div>
        </div>
        <div className="mt-10">
            {children}
        </div>
        {/*用于显示通知的容器*/}
        <div className="fixed inset-x-0 top-[60px] flex items-center justify-center z-50">
            <div className="flex flex-col space-y-2">
                {notifications.map((notification) => (
                    <div key={notification.id} className="max-w-md w-full">
                        <Notification
                            message={notification.message}
                            type={notification.type}
                            isVisible={true}
                            onClose={() => removeNotification(notification.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
        </body>
        </html>
    );
}
