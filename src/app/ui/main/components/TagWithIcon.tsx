import React from 'react';

const TagWithIcon = ({ label, icon, onClick, color = 'success' }) => {

  const IconComponent = icon; // 动态传入的图标组件

  const tagStyle = {
    backgroundColor: getBackgroundColor(color),
    color: getTextColor(color),
  };

    return (
        <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${color === 'success' ? 'bg-green-100 text-green-800' :
                    color === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                        color === 'error' ? 'bg-red-100 text-red-800' :
                            'bg-gray-200 text-gray-800'
                } ${onClick ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
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
        return '#f6ffed'; // 成功背景色
      case 'warning':
        return '#fffbe6'; // 警告背景色
      case 'error':
        return '#fff1f0'; // 错误背景色
      case 'processing':
        return '#e6f7ff'; // 处理中背景色
      default:
        return '#f5f5f5'; // 默认背景色
    }
  };

  const getTextColor = (color) => {
    switch (color) {
      case 'success':
        return '#52c41a'; // 成功文字颜色
      case 'warning':
        return '#faad14'; // 警告文字颜色
      case 'error':
        return '#ff4d4f'; // 错误文字颜色
      case 'processing':
        return '#1890ff'; // 处理中文字颜色
      default:
        return '#333'; // 默认文字颜色
    }
  };

export default TagWithIcon;
