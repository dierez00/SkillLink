import { CourseCard } from "../components/features/courses/CourseCard";
import { CourseFilters } from "../components/features/courses/CourseFilters";
import { MagnifyingGlass, Funnel } from "@phosphor-icons/react";

const courses = [
  {
    title: "Introduction to Data Science",
    duration: "4 hours",
    level: "Beginner",
    rating: 4.8,
    students: 1250,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuAP9tVz9Bj1dXkyi2jmceIFZXUEsdp3BZHks3mv8jbGtZQ0haaoO3__LN7fe_jPPZqDhYrG5884ygAmVjl5tpolQ-lLhJnl2m3aP2fBZRm82InKvAmzVHexu2PRgFzPkHpqq_OqS3oQ2Z7I8ig6yC3ekZXUvUii_PplCiTjpUz8wjxdlPh3JItKTR8yKcxELPi_rLUouLfP54rLDlgWK6YDlEwiVPz5xshzhxqqeF7xNoqTOeF4gPS2YOGK_LMhK_fVQO62CCR3wj"
  },
  {
    title: "Digital Marketing Fundamentals",
    duration: "6 hours",
    level: "Intermediate",
    rating: 4.5,
    students: 890,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWPjHipW_AVJGrQuDkQkUc7HgJqJH-G2_RlgiKbOyrYFKiV0UqStZvIVnuaUcfuHj2-gEYh7LZBVwJXlynemaL0cgzejtWtPTg1l5A1zXHYZ8qrmOLJlvuAVVz_cS-U6eHPPRFkN6IvsuP3ofoj8NaWN0v9dF0z-GM4guZqQ_Co1Dx4_umkCE_aXbkkWSd4iHewOy8jPqlPtJsxQ-By5eS39riQX5Xrc6ZXy-SF2JRnqEkF6t4i4SOkt15-MdwsAoI6IUZOhDn8J-x"
  },
  {
    title: "Advanced JavaScript Patterns",
    duration: "8 hours",
    level: "Advanced",
    rating: 4.9,
    students: 2100,
    imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "UX/UI Design Principles",
    duration: "5 hours",
    level: "Beginner",
    rating: 4.7,
    students: 1560,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Machine Learning Basics",
    duration: "7 hours",
    level: "Intermediate",
    rating: 4.6,
    students: 3200,
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
  },
  {
    title: "Financial Analysis Fundamentals",
    duration: "6 hours",
    level: "Beginner",
    rating: 4.4,
    students: 980,
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const categories = [
  { name: "All", icon: null },
  { name: "Technology", icon: "💻" },
  { name: "Business", icon: "📈" },
  { name: "Arts", icon: "🎨" },
  { name: "Science", icon: "🔬" },
  { name: "Health", icon: "🏥" },
  { name: "Language", icon: "🗣️" },
  { name: "Personal Development", icon: "🧠" }
];

export const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Explora Nuestros Cursos</h1>
              <p className="text-lg text-indigo-100">
                Aprende nuevas habilidades con nuestros cursos expertamente diseñados. 
                Desde principiantes hasta avanzados, tenemos algo para todos.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlass size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar cursos..."
                  className="block w-full md:w-80 pl-10 pr-3 py-3 border border-transparent rounded-lg bg-indigo-500 bg-opacity-20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
                <Funnel size={20} className="text-indigo-600" />
              </div>
              <CourseFilters />
            </div>
          </div>

          {/* Courses List */}
          <div className="flex-1">
            {/* Categories */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      category.name === "All" 
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category.icon && <span className="mr-2">{category.icon}</span>}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Info */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Todos los cursos</h2>
                <p className="text-gray-500">{courses.length} cursos disponibles</p>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Ordenar por:</span>
                <select className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Más populares</option>
                  <option>Mejor valorados</option>
                  <option>Más recientes</option>
                  <option>Duración (corta a larga)</option>
                </select>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <CourseCard 
                  key={index} 
                  {...course}
                  className="transform hover:-translate-y-1 transition-transform duration-300"
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                  Anterior
                </button>
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className={`px-3 py-1 rounded-md ${
                      num === 1
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                  Siguiente
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
