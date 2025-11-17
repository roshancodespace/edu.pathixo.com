import Footer from "@/components/Footer";
import { courses } from "@/data/courses";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto pt-20 pb-10 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white">
          Unlock Your Potential
        </h1>

        <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Master industry-ready skills with hands-on learning, expert mentorship, and real-world projects.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 max-w-5xl mx-auto text-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 text-zinc-300">Live Mentorship</div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 text-zinc-300">Hands-On Projects</div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 text-zinc-300">Dedicated Support</div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 text-zinc-300">Industry-Ready Skills</div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 text-zinc-300">Lifetime Access</div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 text-zinc-300">Certificates</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {courses.map((course) => (
          <Link
            key={course.title}
            href={`/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all hover:shadow-xl hover:shadow-pink-500/5 flex flex-col"
          >
            <div className="relative">
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url('${course.image}')` }}
              />
              <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm text-pink-400 text-xs font-semibold px-3 py-1 rounded-full">
                {course.duration}
              </div>

              {course.originalPrice && (
                <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                </div>
              )}
            </div>

            {/* content wrapper must flex-grow */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-zinc-100">{course.title}</h3>

              <p className="text-zinc-400 text-sm mt-2 mb-6 line-clamp-3">
                {course.description}
              </p>

              {/* bottom stays pinned */}
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-baseline gap-2">
                  <span className="text-zinc-100 text-2xl font-bold">₹{course.price.toLocaleString()}</span>
                  {course.originalPrice && (
                    <span className="text-zinc-500 line-through text-sm">₹{course.originalPrice.toLocaleString()}</span>
                  )}
                </div>

                <div className="px-4 py-2 text-sm font-semibold text-white bg-linear-to-r from-pink-600 to-violet-600 rounded-lg group-hover:opacity-90">
                  Learn More
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </>
  );
}

export const metadata = {
  title: "edu.pathixo",
  description: "Modern, expert-led courses built for real-world skills and career growth."
};
