import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Clock, User, Star, CheckCircle, Play } from "@phosphor-icons/react";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const course = {
    title: "Digital Marketing Fundamentals",
    description: "Este curso cubre los fundamentos del marketing digital: SEO, marketing de contenidos, redes sociales y email marketing. Aprende a crear campañas efectivas y analizar resultados.",
    instructor: "Dra. Emily Carter",
    duration: "8 semanas",
    level: "Principiante",
    enrollment: "1,250 estudiantes",
    rating: 4.8,
    progress: 25,
    modules: [
      { title: "Módulo 1", desc: "Introducción al Marketing Digital" },
      { title: "Módulo 2", desc: "SEO (Optimización para Motores de Búsqueda)" },
      { title: "Módulo 3", desc: "Estrategias de Marketing de Contenidos" },
      { title: "Módulo 4", desc: "Marketing en Redes Sociales" },
      { title: "Módulo 5", desc: "Campañas de Email Marketing" },
    ],
    resources: [
      { name: "Guía de SEO", type: "PDF" },
      { name: "Plantilla de Plan de Marketing", type: "Documento" },
      { name: "Lista de Herramientas Recomendadas", type: "Enlace" },
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/courses" className="text-indigo-200 hover:text-white">
                  Cursos
                </Link>
              </li>
              <li>
                <span className="text-indigo-300 mx-2">/</span>
              </li>
              <li aria-current="page">
                <span className="text-white font-medium">{course.title}</span>
              </li>
            </ol>
          </nav>
          
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg text-indigo-100 max-w-3xl">{course.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Course Content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8">
                {[
                  { id: "overview", name: "Descripción", icon: <BookOpen size={20} /> },
                  { id: "modules", name: "Módulos", icon: <Play size={20} /> },
                  { id: "resources", name: "Recursos", icon: <Star size={20} /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Sobre este curso</h2>
                <p className="text-gray-700 mb-6">{course.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-3">Lo que aprenderás</h3>
                    <ul className="space-y-2">
                      {[
                        "Fundamentos de SEO y marketing de contenidos",
                        "Estrategias para redes sociales",
                        "Creación de campañas de email efectivas",
                        "Análisis de métricas clave"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-3">Detalles del curso</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock size={20} className="text-gray-500 mr-2" />
                        <span>Duración: {course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={20} className="text-gray-500 mr-2" />
                        <span>Instructor: {course.instructor}</span>
                      </div>
                      <div className="flex items-center">
                        <Star size={20} className="text-gray-500 mr-2" />
                        <span>Nivel: {course.level}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors">
                  Inscribirse en el curso
                </button>
              </div>
            )}

            {activeTab === "modules" && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <h2 className="sr-only">Módulos del curso</h2>
                <ul className="divide-y divide-gray-200">
                  {course.modules.map((module, index) => (
                    <li key={index} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 text-indigo-600 mr-4 mt-1">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{module.title}</h3>
                          <p className="text-gray-600 mt-1">{module.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "resources" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Recursos del curso</h2>
                <div className="space-y-4">
                  {course.resources.map((resource, index) => (
                    <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gray-100 text-gray-600 mr-4">
                        {resource.type}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{resource.name}</h3>
                        <p className="text-gray-500 text-sm">{resource.type}</p>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-800">
                        Descargar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Course thumbnail" 
                  className="rounded-lg w-full"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500">Instructor</span>
                  <p className="font-medium">{course.instructor}</p>
                </div>
                
                <div>
                  <span className="text-sm text-gray-500">Duración</span>
                  <p className="font-medium">{course.duration}</p>
                </div>
                
                <div>
                  <span className="text-sm text-gray-500">Nivel</span>
                  <p className="font-medium">{course.level}</p>
                </div>
                
                <div>
                  <span className="text-sm text-gray-500">Estudiantes</span>
                  <p className="font-medium">{course.enrollment}</p>
                </div>
                
                <div>
                  <span className="text-sm text-gray-500">Valoración</span>
                  <div className="flex items-center">
                    <Star size={16} weight="fill" className="text-yellow-400 mr-1" />
                    <span>{course.rating}/5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
