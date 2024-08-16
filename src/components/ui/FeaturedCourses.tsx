"use client";
import Link from "next/link";
import courseData from "../../data/music_courses.json";
import { BackgroundGradient } from "./background-gradient";
import Image from "next/image";

type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
};

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 tracking-tight text-white sm:text-4xl font-semibold">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center gap-10 my-8">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={course.image}
                  alt="jordans"
                  height="300"
                  width="300"
                  className="object-contain rounded-md"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View all courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
