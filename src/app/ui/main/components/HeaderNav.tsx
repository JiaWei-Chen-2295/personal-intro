import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileAlt, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { message } from 'antd';

const HeaderNav = () => {
  const [isEmailCardVisible, setIsEmailCardVisible] = useState(false);
  const [isMouseOverCard, setIsMouseOverCard] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">JavierChen</h1>
          </div>

          {/* 导航链接 */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#project"
              className="text-gray-300 hover:text-white flex items-center transition-colors"
            >
              <FontAwesomeIcon icon={faProjectDiagram} className="mr-2 text-lg" />
              项目
            </a>
            <a
              href="#article"
              className="text-gray-300 hover:text-white flex items-center transition-colors"
            >
              <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-lg" />
              文章
            </a>
          </div>

          {/* 右侧功能区 */}
          <div className="flex items-center space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/JiaWei-Chen-2295"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
            </a>

            {/* 邮箱 */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsEmailCardVisible(true)}
                onMouseLeave={() => !isMouseOverCard && setIsEmailCardVisible(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </button>

              {isEmailCardVisible && (
                <div
                  className="absolute right-0 mt-3 p-4 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in"
                  onMouseEnter={() => setIsMouseOverCard(true)}
                  onMouseLeave={() => {
                    setIsMouseOverCard(false);
                    setIsEmailCardVisible(false);
                  }}
                >
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">我的邮箱：</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 dark:text-white font-mono text-sm">
                      javierchen22952295@gmail.com
                    </span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("javierchen22952295@gmail.com")
                          .then(() => message.success("复制成功"))
                          .catch(() => message.warning("复制失败"));
                        setIsEmailCardVisible(false);
                      }}
                      className="ml-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm transition-colors"
                    >
                      复制
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
