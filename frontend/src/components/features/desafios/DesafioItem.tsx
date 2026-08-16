import type { Desafio } from "./DesafioList";

const difficultyColors: Record<string, string> = {
  "Fácil": "bg-green-100 text-green-800",
  "Media": "bg-yellow-100 text-yellow-800",
  "Difícil": "bg-red-100 text-red-800"
};

const statusColors: Record<string, string> = {
  "Abierto": "bg-blue-100 text-blue-800",
  "Cerrado": "bg-gray-100 text-gray-800"
};

export default function DesafioItem({
  desafio,
  onDelete,
}: {
  desafio: Desafio;
  onDelete: (id: number) => void;
}) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "Sin fecha límite";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{desafio.titulo}</h3>
            <p className="text-gray-600 mb-4">{desafio.descripcion}</p>
          </div>
          <button
            onClick={() => onDelete(desafio.id_desafio)}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            aria-label="Eliminar desafío"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[desafio.dificultad]}`}>
            {desafio.dificultad}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[desafio.estado]}`}>
            {desafio.estado}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
            {formatDate(desafio.fecha_limite)}
          </span>
        </div>
      </div>
    </div>
  );
}