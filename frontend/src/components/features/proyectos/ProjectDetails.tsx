interface Project {
  id: number;
  nombre: string;
  descripcion?: string;
}

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{project.nombre}</h3>
        </div>
        
        {project.descripcion && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {project.descripcion}
          </p>
        )}
      </div>
      
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">ID: {project.id}</span>
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors">
            Ver detalles →
          </button>
        </div>
      </div>
    </div>
  );
}