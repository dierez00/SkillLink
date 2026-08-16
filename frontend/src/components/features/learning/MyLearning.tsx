import { useState } from "react";
import {
  Calendar,
  Clock,
  MagnifyingGlass,
} from "@phosphor-icons/react";

const MyLearning = () => {
  const [activeTab, setActiveTab] = useState("In progress");

  const coursesInProgress = [
    {
      title: "Introduction to Data Science",
      desc: "Learn the basics of data science, including data analysis, visualization, and machine learning.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAMvbo1iI3h_WorD5mHH4h1lzothicQX-dfRw3ApwfxjWfI5PVn_dDAUJiGBkAiYc_FTBsEfzGk0FQaQAsXYU3YRY9ogg9tXdydw4B2sFwRzO8E8dSHbXPdYT8pC-M6-uNzkNtD6coZAYd6zykV1FlyV5tn4P0Fp752EMuCEyHU5dsf0WU50uqQyvQ0vezg6bDCcuNziUayvo-_GPnI18FD0PkFNYDdzAm9LdramUk_lvPFM2VrAlyjJ2iql1hpOqTKqF5aEv8hJr1Z",
      progress: 65,
    },
    {
      title: "Web Development Fundamentals",
      desc: "Master the fundamentals of web development, including HTML, CSS, and JavaScript.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCiLYr1htxM4lhWVr-lpjPtXvr0juRqPxJdA3mylH0PZmcX7wrTgnYWjZl22wqOtXgQpD909L-zk4526XKQ20DG6G65fF5XwwY5Xgni9nksYRqa_LjmZ2pszUmCLknJiDNqOqxoeoMGnJIio2-xhzeNtRsN4dHd2gaULBWw2Sqx94qa0h_NQsTpKCcQEdGS_BudbQnmqTU5jv6FvGn1Et0xapmHdRwcxI_d64hB__IOj1szwLFbgFuxJM7DKEWGbgEnSmClZ6nk2Sw",
      progress: 30,
    },
  ];

  const upcomingLessons = [
    {
      title: "Data Science: Module 2",
      time: "Today, 10:00 AM - 11:00 AM",
      instructor: "Dr. Emily Chen",
    },
    {
      title: "Web Development: Project Kickoff",
      time: "Tomorrow, 1:00 PM - 2:00 PM",
      instructor: "Prof. James Wilson",
    },
  ];

  const recommendations = [
    {
      title: "Digital Marketing Strategies",
      desc: "Learn effective digital marketing techniques for modern businesses.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBC4gAbwIZWtoErP7npUbMZg8MG5mj6UCPNEz319pzzxDxPGq4XzFoUMVkBSwNfz5qrHYKTQDOVF44oJPKZRTZhL9iglZBLZ3QVlLCAxJnnXFRUk4PP1YRDjwkZSAX0hygQd5EWdU2EQjMwkDbVNX3iknHH1lvqfJNq30T2MIEossCiB_62v3cyPa6OqN2ITmaxZsymTO1Hgc79kPQFtq8HEgtYwcSrvkgfZrvpmTjiAUJuvRPxwYT3ck8FsI_LNF2G7Hr35MQ-FqgU",
      level: "Intermediate",
      duration: "6 weeks",
    },
    {
      title: "Graphic Design Principles",
      desc: "Master the core principles of modern graphic design and visual communication.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB9uaSG_skGtT4AyIDLzF5dCits7I_PxPzK0NeBihx6N7_dwCidFyf5voUBt2i3Eyrefg2hdqAtqznZZQzwJC4ZopUiU4fjgCTwpJCcSwKtrPQEXQaDkSF9zra6C525cuBS-RKNrsyRMvSH0ph5X9kqtVeCJGZvgD2MZ-CBbvJIAtPLXbfWVOBbCPMLHoG-1jgJkVYZECxTNBoqQbg3N3Bfntb7MHlT5LTWjp2_GgO9aJm5guuJ46hgAE2ZJSnLmKHdRGFZXPoBqHhT",
      level: "Beginner",
      duration: "4 weeks",
    },
  ];

  const tabs = ["In progress", "Completed", "Archived"];

  return (
    <main className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">My Learning Dashboard</h1>
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlass size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search your courses..."
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-sm text-gray-500 mb-1">Courses in Progress</h3>
          <p className="text-2xl font-bold text-indigo-700">2</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-sm text-gray-500 mb-1">Lessons Completed</h3>
          <p className="text-2xl font-bold text-green-700">14</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-sm text-gray-500 mb-1">New Recommendations</h3>
          <p className="text-2xl font-bold text-yellow-700">5</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* In Progress Courses */}
      {activeTab === "In progress" && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coursesInProgress.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden border border-gray-200 transition-shadow"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }} />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{course.desc}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Upcoming Lessons */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Lessons</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingLessons.map((lesson, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md p-6 border border-gray-200 transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <Calendar size={24} weight="fill" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{lesson.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock size={16} className="mr-1" />
                    {lesson.time}
                  </div>
                  <p className="text-sm text-gray-500">Instructor: {lesson.instructor}</p>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                  Join Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recommended for you</h2>
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            View all
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden border border-gray-200 transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{course.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{course.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock size={16} className="mr-1" />
                    {course.duration}
                  </span>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MyLearning;
