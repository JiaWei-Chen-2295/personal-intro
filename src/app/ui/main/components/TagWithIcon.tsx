import React from 'react';

const TagWithIcon = ({ label, icon, onClick, color = 'success' }) => {

  const IconComponent = icon; // 动态传入的图标组件

  const tagStyle = {
    backgroundColor: getBackgroundColor(color),
    color: getTextColor(color),
    borderColor: getBorderColor(color),
  };

    return (
        <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${onClick ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
            style={tagStyle}
            onClick={onClick}
        >
            {IconComponent && <IconComponent className="w-4 h-4 mr-1" />}
            <span>{label}</span>
        </div>
    );


};

const getBackgroundColor = (color) => {
    switch (color) {
      case 'success':
        return 'rgba(82, 196, 26, 0.2)'; // 成功背景色 (深色模式适配)
      case 'warning':
        return 'rgba(250, 173, 20, 0.2)'; // 警告背景色
      case 'error':
        return 'rgba(255, 77, 79, 0.2)'; // 错误背景色
      case 'processing':
        return 'rgba(24, 144, 255, 0.2)'; // 处理中背景色
      default:
        return 'rgba(255, 255, 255, 0.1)'; // 默认背景色
    }
  };

  const getTextColor = (color) => {
    switch (color) {
      case 'success':
        return '#73d13d'; // 成功文字颜色 (亮绿色)
      case 'warning':
        return '#ffc53d'; // 警告文字颜色
      case 'error':
        return '#ff7875'; // 错误文字颜色
      case 'processing':
        return '#40a9ff'; // 处理中文字颜色
      default:
        return '#d9d9d9'; // 默认文字颜色
    }
  };

  const getBorderColor = (color) => {
    switch (color) {
      case 'success':
        return 'rgba(82, 196, 26, 0.3)';
      case 'warning':
        return 'rgba(250, 173, 20, 0.3)';
      case 'error':
        return 'rgba(255, 77, 79, 0.3)';
      case 'processing':
        return 'rgba(24, 144, 255, 0.3)';
      default:
        return 'rgba(255, 255, 255, 0.2)';
    }
  };

export default TagWithIcon;
