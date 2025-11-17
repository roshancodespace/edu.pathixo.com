"use client";

import { useState } from "react"; import { motion, AnimatePresence } from "motion/react"; import { ListIcon, CheckCircle, TextIcon, ListTreeIcon } from "lucide-react"; import { courses } from "@/data/courses"; import { useParams } from "next/navigation";

const notFound = () => <div>Course Not Found</div>;

const renderWithBold = (text: string) => { const parts = text.split("**"); return (<span> {parts.map((part, index) => index % 2 === 1 ? (<strong key={index} className="font-medium text-pink-400"> {part} </strong>) : (part))} </span>); };

export default function CourseDetails() {
    const params = useParams(); const [activeTab, setActiveTab] = useState("description");

    const course = courses.find(
        (c) => c.title.toLowerCase().replace(/\s+/g, "-") === params.slug
    );

    if (!course) return notFound();

    const whatsappMessage = `Hello, I am interested in enrolling in the "${course.title}" course.`;
    const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/+918877020121?text=${encodedWhatsappMessage}`;

    const tabs = [
        { id: "description", name: "Description", icon: TextIcon },
        { id: "curriculum", name: "Curriculum", icon: ListTreeIcon },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
            <p className="text-zinc-400 my-8 text-sm">
                Home / Courses /
                <span className="text-white"> {course.title}</span>
            </p>

            <div className="md:hidden space-y-8">
                <img src={course.image} alt={course.title} className="w-full rounded-xl" />

                <div>
                    <h1 className="text-3xl font-bold text-white">{course.title}</h1>
                    <p className="text-zinc-400 mt-3 text-base">{course.description}</p>

                    <div className="mt-4 flex items-baseline gap-3">
                        <p className="text-3xl font-bold text-white">₹{course.price.toLocaleString()}</p>
                        {course.originalPrice && (
                            <>
                                <p className="text-zinc-500 line-through text-lg">
                                    ₹{course.originalPrice.toLocaleString()}
                                </p>
                                <span className="text-pink-500 text-sm font-medium">
                                    {Math.round(
                                        ((course.originalPrice - course.price) /
                                            course.originalPrice) *
                                        100
                                    )}
                                    % off
                                </span>
                            </>
                        )}
                    </div>

                    <a
                        href={whatsappLink}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-full block bg-linear-to-r from-pink-500 to-violet-600 text-white font-semibold py-3 rounded-lg mt-4 text-lg text-center"
                    >
                        Enroll Now
                    </a>

                    <div className="mt-6 border-t border-zinc-700 pt-4">
                        <h6 className="text-zinc-200 font-medium mb-2">
                            This course includes:
                        </h6>
                        <ul className="space-y-2">
                            {course.includes.map((item, index) => (
                                <li key={index} className="text-zinc-400 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-pink-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <details className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <summary className="text-white font-semibold cursor-pointer">
                        What you will learn
                    </summary>
                    <div className="mt-3 space-y-3">
                        {course.whatYouWillLearn.map((point, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#EC4899] mt-1" />
                                <p className="text-zinc-400">{renderWithBold(point)}</p>
                            </div>
                        ))}
                    </div>
                </details>

                <details className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <summary className="text-white font-semibold cursor-pointer">
                        Course Description
                    </summary>
                    <p className="mt-3 text-zinc-300 whitespace-pre-line leading-relaxed">
                        {course.longDescription}
                    </p>
                </details>

                <details className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <summary className="text-white font-semibold cursor-pointer">
                        Prerequisites
                    </summary>
                    <div className="mt-3">
                        {course.prerequisites.length > 0 ? (
                            <ul className="list-disc list-inside space-y-2 text-zinc-300">
                                {course.prerequisites.map((prereq, index) => (
                                    <li key={index}>{renderWithBold(prereq)}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-zinc-300">No prerequisites required.</p>
                        )}
                    </div>
                </details>

                <details className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                    <summary className="text-white font-semibold cursor-pointer">
                        Curriculum
                    </summary>
                    <div className="mt-4 space-y-6">
                        {course.curriculum.map((moduleItem) => (
                            <div key={moduleItem.module}>
                                <h3 className="text-xl font-semibold text-white">
                                    {moduleItem.module}
                                </h3>
                                <ul className="mt-3 space-y-2">
                                    {moduleItem.lessons.map((lesson, lessonIndex) => (
                                        <li
                                            key={lessonIndex}
                                            className="flex items-start gap-3 text-zinc-300"
                                        >
                                            <ListIcon className="w-4 h-4 text-zinc-500 mt-1" />
                                            {renderWithBold(lesson)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </details>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-5">
                <div className="col-span-2">
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
                                    className={`relative flex items-center gap-2 py-4 px-2 font-medium ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                                        }`}
                                >
                                    <Icon
                                        color={isActive ? "#EC4899" : "currentColor"}
                                        className="w-5 h-5"
                                    />
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

                    <div className="mt-8">
                        <AnimatePresence mode="wait">
                            {activeTab === "description" && (
                                <motion.div
                                    key="description"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-white text-2xl font-bold">
                                        What you will learn
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                        {course.whatYouWillLearn.map((point, index) => (
                                            <div key={index} className="flex items-start gap-3 mt-4">
                                                <CheckCircle className="w-5 h-5 text-[#EC4899] mt-1" />
                                                <p className="text-zinc-400">{renderWithBold(point)}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <h2 className="text-white text-2xl font-bold mt-8 mb-3">
                                        Course Description
                                    </h2>
                                    <p className="text-zinc-300 whitespace-pre-line leading-relaxed">
                                        {course.longDescription}
                                    </p>

                                    <h2 className="text-white text-2xl font-bold mt-8 mb-3">
                                        Prerequisites
                                    </h2>
                                    {course.prerequisites.length > 0 ? (
                                        <ul className="list-disc list-inside space-y-2 text-zinc-300">
                                            {course.prerequisites.map((prereq, index) => (
                                                <li key={index}>{renderWithBold(prereq)}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-zinc-300">No prerequisites required.</p>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === "curriculum" && (
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
                                            {course.curriculum.map((moduleItem) => (
                                                <div key={moduleItem.module} className="relative">
                                                    <div className="absolute -left-8 top-1 w-4 h-4 bg-[#EC4899] rounded-full border-4 border-zinc-900" />
                                                    <h3 className="text-2xl font-semibold text-white">
                                                        {moduleItem.module}
                                                    </h3>
                                                    <ul className="mt-4 space-y-3">
                                                        {moduleItem.lessons.map((lesson, lessonIndex) => (
                                                            <li
                                                                key={lessonIndex}
                                                                className="flex items-start gap-3 text-zinc-300"
                                                            >
                                                                <ListIcon className="w-4 h-4 text-zinc-500 mt-1" />
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

                <div className="hidden md:block">
                    <div className="rounded-xl bg-zinc-950 overflow-hidden border border-zinc-800">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-5 space-y-4">
                            <div className="flex items-baseline gap-2">
                                <p className="text-2xl font-bold text-zinc-100">
                                    ₹{course.price.toLocaleString()}
                                </p>
                                {course.originalPrice && (
                                    <>
                                        <p className="text-zinc-500 line-through">
                                            ₹{course.originalPrice.toLocaleString()}
                                        </p>
                                        <span className="text-pink-500 text-sm font-medium">
                                            {Math.round(
                                                ((course.originalPrice - course.price) /
                                                    course.originalPrice) *
                                                100
                                            )}
                                            % off
                                        </span>
                                    </>
                                )}
                            </div>

                            <a
                                href={whatsappLink}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="w-full block bg-linear-to-r from-pink-500 to-violet-500 font-semibold text-center px-4 py-3 rounded-md"
                            >
                                Enroll Now
                            </a>

                            <div className="border-t border-zinc-700 pt-4">
                                <h6 className="text-zinc-200 font-medium mb-2">
                                    This course includes:
                                </h6>
                                <ul className="space-y-2">
                                    {course.includes.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-zinc-400 flex items-center gap-2"
                                        >
                                            <CheckCircle className="w-4 h-4 text-pink-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}