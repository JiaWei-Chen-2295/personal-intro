import React from 'react';
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from '@/app/ui/common/morphing-dialog';
import { PlusIcon } from 'lucide-react';
import TechTag from './TechTag';
import { FaReact } from 'react-icons/fa';
import { AiOutlineJava } from "react-icons/ai";

interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    description,
    imageUrl,
    projectUrl,
}) => {
    return (
        <MorphingDialog
            transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.25,
            }}
        >
            <MorphingDialogTrigger
                style={{
                    borderRadius: '12px',
                }}
                className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
            >
                <MorphingDialogImage
                    src={imageUrl}
                    alt={`${title} homepage`}
                    className='h-48 w-full object-cover'
                />
                <div className='flex grow flex-col justify-between px-3 py-2'>
                    <div>
                        <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                            {title}
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                            {subtitle}
                        </MorphingDialogSubtitle>
                        {/* 标签容器 */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            <TechTag
                                label="React"
                                icon={FaReact}
                            />
                            <TechTag
                                label="Java"
                                icon={AiOutlineJava}
                            />
                            {/* 可以继续添加更多标签 */}
                        </div>
                    </div>
                    <button
                        type='button'
                        className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
                        aria-label='Open dialog'
                    >
                        <PlusIcon size={12} />
                    </button>
                </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
                <MorphingDialogContent
                    style={{
                        borderRadius: '24px',
                    }}
                    className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                >
                    <MorphingDialogImage
                        src={imageUrl}
                        alt={`${title} homepage`}
                        className='h-full w-full'
                    />
                    <div className='p-6'>
                        <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                            {title}
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                            {subtitle}
                        </MorphingDialogSubtitle>
                        <MorphingDialogDescription
                            disableLayoutAnimation
                            variants={{
                                initial: { opacity: 0, scale: 0.8, y: 100 },
                                animate: { opacity: 1, scale: 1, y: 0 },
                                exit: { opacity: 0, scale: 0.8, y: 100 },
                            }}
                        >
                            <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                                {description}
                            </p>
                            <a
                                className='mt-2 inline-flex text-zinc-500 underline'
                                href={projectUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                点击跳转上线地址
                            </a>
                        </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className='text-zinc-50' />
                </MorphingDialogContent>
            </MorphingDialogContainer>
        </MorphingDialog>
    );
};

export default ProjectCard;