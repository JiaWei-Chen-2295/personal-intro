import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFileAlt, faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";

import {message} from 'antd';

const HeaderNav = () => {

    const [isEmailCardVisible, setIsEmailCardVisible] = useState(false);
    const [isMouseOverCard, setIsMouseOverCard] = useState(false);

    return (
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
                                        message.success("复制成功")
                                    }, err => {
                                        message.warning("复制失败")
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
                {/*TODO：搭建全局主题切换功能*/}
                {/*用于切换页面主题样式的按钮*/}
                {/*<label className="ui-switch">*/}
                {/*    <input type="checkbox" className="hidden"/>*/}
                {/*    <div className="slider relative w-12 h-6 bg-gray-300 rounded-full cursor-pointer">*/}
                {/*        <div*/}
                {/*            className="circle absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-transform duration-150 ease-in-out"></div>*/}
                {/*    </div>*/}
                {/*</label>*/}
            </div>
        </div>
    )
}

export default HeaderNav;
