import { Link, useParams } from "react-router-dom";
import { Play, CheckCircle, BookOpen, ListChecks } from "@phosphor-icons/react";

const CourseLesson = () => {
  const { courseId, lessonId } = useParams();
  
  const lessons = [
    { id: 1, title: "Introducción", desc: "Configuración inicial" },
    { id: 2, title: "Conceptos Básicos", desc: "Fundamentos esenciales" },
    { id: 3, title: "Técnicas Avanzadas", desc: "Métodos profesionales" },
    { id: 4, title: "Proyecto Práctico", desc: "Aplicación real" },
    { id: 5, title: "Resumen Final", desc: "Repaso y conclusiones" },
  ];

  const currentLesson = lessons.find(l => l.id === Number(lessonId)) || lessons[0];
  
  const keyConcepts = [
    "Configuración del entorno de desarrollo",
    "Estructura del proyecto",
    "Flujo de trabajo básico",
    "Herramientas esenciales"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1.5 rounded-lg mr-3">
              <BookOpen size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduLearn
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600">Inicio</Link>
              <Link to="/my-courses" className="text-gray-700 hover:text-indigo-600">Mis Cursos</Link>
              <Link to="/browse" className="text-gray-700 hover:text-indigo-600">Explorar</Link>
            </nav>
            
            <div className="h-8 w-8 rounded-full bg-cover bg-center border-2 border-indigo-100"
              style={{ backgroundImage: 'url("https://randomuser.me/api/portraits/women/44.jpg")' }} />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-6">
              <h2 className="text-lg font-bold mb-4">Contenido del Curso</h2>
              <nav className="space-y-2">
                {lessons.map(lesson => (
                  <Link
                    key={lesson.id}
                    to={`/course/${courseId}/lesson/${lesson.id}`}
                    className={`block px-3 py-2 rounded-md transition-colors ${
                      Number(lessonId) === lesson.id
                        ? "bg-indigo-50 text-indigo-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center">
                      {lesson.id < Number(lessonId) ? (
                        <CheckCircle size={16} weight="fill" className="text-green-500 mr-2" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2" />
                      )}
                      {lesson.title}
                    </div>
                    <div className="text-xs text-gray-500 ml-6">{lesson.desc}</div>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Breadcrumb */}
            <nav className="flex mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link to="/my-courses" className="text-gray-600 hover:text-indigo-600">
                    Mis Cursos
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400 mx-1">/</span>
                </li>
                <li>
                  <Link to={`/course/${courseId}`} className="text-gray-600 hover:text-indigo-600">
                    Curso {courseId}
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400 mx-1">/</span>
                </li>
                <li aria-current="page">
                  <span className="text-indigo-600 font-medium">{currentLesson.title}</span>
                </li>
              </ol>
            </nav>

            {/* Lesson Content */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">{currentLesson.title}</h1>
                
                {/* Video Player */}
                <div className="relative aspect-video bg-black rounded-lg mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-black/50 text-white rounded-full p-4 hover:bg-black/70 transition-colors">
                      <Play size={32} weight="fill" />
                    </button>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80" 
                    alt="Lesson thumbnail" 
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                
                {/* Lesson Summary */}
                <div className="prose max-w-none mb-8">
                  <h2 className="text-xl font-bold mb-3">Resumen de la lección</h2>
                  <p>
                    Esta lección introductoria te guiará a través de la configuración inicial 
                    y los conceptos básicos de programación. Aprenderás sobre las herramientas 
                    y entornos utilizados por los desarrolladores, y obtendrás una comprensión 
                    fundamental de cómo funcionan los programas. Al final de esta lección, 
                    estarás listo para escribir tu primer programa simple.
                  </p>
                </div>
                
                {/* Key Concepts */}
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <ListChecks size={24} weight="bold" className="mr-2 text-indigo-600" />
                    Conceptos Clave
                  </h2>
                  <ul className="space-y-3">
                    {keyConcepts.map((concept, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="border-t border-gray-200 px-6 py-4 flex justify-between">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Lección Anterior
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Siguiente Lección
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CourseLesson;
