"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ListIcon, CheckCircle, TextIcon, ListTreeIcon } from "lucide-react";
import { courses } from '@/data/courses';

const useParams = () => ({ slug: "full-stack-web-development" });
const notFound = () => <div>Course Not Found</div>;

const renderWithBold = (text: string) => {
    const parts = text.split('**');
    return (
        <span>
            {parts.map((part, index) =>
                index % 2 === 1 ? (
                    <strong key={index} className="font-medium text-pink-400">
                        {part}
                    </strong>
                ) : (
                    part
                )
            )}
        </span>
    );
};


export default function CourseDetails() {
    const params = useParams();
    const [activeTab, setActiveTab] = useState('description');

    const course = courses.find(
        (c) => c.title.toLowerCase().replace(/\s+/g, "-") === params.slug
    );

    if (!course) return notFound();

    const tabs = [
        { id: 'description', name: 'Description', icon: TextIcon, color: '#EC4899' },
        { id: 'curriculum', name: 'Curriculum', icon: ListTreeIcon, color: '#FFFFFF' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-zinc-400 my-8 text-sm">
                Home / Courses /<span className="text-white"> {course.title}</span>
            </p>

            <div>
                <h1 className="text-5xl font-bold text-white">{course.title}</h1>
                <p className="text-zinc-400 mt-4 text-lg">{course.description}</p>

                <div className="relative flex gap-5 mt-8 border-b border-zinc-700">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        const Icon = tab.icon;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex items-center gap-2 py-4 px-2 font-medium transition-colors duration-200 ${isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                                    }`}
                            >
                                <Icon color={isActive ? '#EC4899' : 'currentColor'} className="w-5 h-5" />
                                <span>{tab.name}</span>

                                {isActive && (
                                    <motion.div
                                        layoutId="tabIndicator"
                                        className="absolute bottom-0 left-0 w-full h-1 bg-[#EC4899] rounded-t-md"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className='mt-8'>
                <AnimatePresence mode="wait">
                    {activeTab === 'description' && (
                        <motion.div
                            key="description"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-white text-2xl font-bold">What you will learn</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6'>
                                {course.whatYouWillLearn.map((point, index) => (
                                    <div key={index} className="flex items-start gap-3 mt-4">
                                        <CheckCircle className="w-5 h-5 text-[#EC4899] shrink-0 mt-1" />
                                        <p className="text-zinc-400">{renderWithBold(point)}</p>
                                    </div>
                                ))}
                            </div>
                            <h2 className="text-white text-2xl font-bold mt-8 mb-3">Course Description</h2>
                            <p className="text-zinc-300 whitespace-pre-line leading-relaxed">{course.longDescription}</p>
                        </motion.div>
                    )}

                    {activeTab === 'curriculum' && (
                        <motion.div
                            key="curriculum"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-zinc-700 -translate-x-1/2" />

                                <div className="space-y-10">
                                    {course.curriculum.map((moduleItem, index) => (
                                        <div key={moduleItem.module} className="relative">
                                            <div className="absolute -left-8 top-1 w-4 h-4 bg-[#EC4899] rounded-full border-4 border-zinc-900" />

                                            <h3 className="text-2xl font-semibold text-white">{moduleItem.module}</h3>

                                            <ul className="mt-4 space-y-3">
                                                {moduleItem.lessons.map((lesson, lessonIndex) => (
                                                    <li key={lessonIndex} className="flex items-start gap-3 text-zinc-300">
                                                        <ListIcon className="w-4 h-4 text-zinc-500 shrink-0 mt-1" />
                                                        {renderWithBold(lesson)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}