import { courses } from "@/data/courses";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-7xl font-bold">Unlock Your Potential</h1>
      <p className="text-zinc-500 text-lg">
        Explore our expert-led courses and take the next step in your creative and <br />
        technical journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.title}
            className="group flex flex-col bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1 relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-pink-500/3 to-violet-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Image */}
            <div className="relative">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                style={{ backgroundImage: `url('${course.image}')` }}
              />
              <div className="absolute top-4 right-4 bg-pink-500/20 text-pink-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                {course.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow z-10">
              <h3 className="text-zinc-100 text-xl font-bold mb-2">
                {course.title}
              </h3>

              <p className="text-zinc-400 text-sm mb-6 grow">
                {course.description}
              </p>

              <div className="flex justify-between items-center mt-auto">
                <p className="text-zinc-100 text-2xl font-bold">${course.price}</p>
                <Link
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-pink-600 to-violet-600 rounded-lg hover:from-pink-500 hover:to-violet-500 transition-all"
                  href={`/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  Purchase Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: "edu.pathixo",
  description:
    "Explore our expert-led courses and take the next step in your creative and technical journey.",
};
