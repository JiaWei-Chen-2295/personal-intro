import React from 'react';

interface TechTagProps {
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
    onClick?: () => void;
}

const TechTag: React.FC<TechTagProps> = ({ label, icon: IconComponent, onClick }) => {
    return (
        <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 ${onClick ? 'cursor-pointer hover:bg-gray-200' : 'cursor-default'}`}
            onClick={onClick}
        >
            {IconComponent && <IconComponent className="w-4 h-4 mr-1" />}
            <span>{label}</span>
        </div>
    );
};

export default TechTag;