import { useEffect, useState } from "react";
import { getDesafios, deleteDesafio } from "../../../api/desafios";
import DesafioItem from "./DesafioItem";
import DesafioForm from "./DesafioForm";

export type Desafio = {
  id_desafio: number;
  titulo: string;
  descripcion: string;
  dificultad: string;
  fecha_limite: string;
  estado: string;
  id_usuario: number;
};

export default function DesafioList() {
  const [desafios, setDesafios] = useState<Desafio[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const load = async () => {
    try {
      const data = await getDesafios();
      setDesafios(data);
    } catch (error) {
      console.error("Error loading challenges:", error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteDesafio(id);
      load();
    } catch (error) {
      console.error("Error deleting challenge:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Mis Desafíos</h2>
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
        >
          {isFormOpen ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Cerrar
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Nuevo Desafío
            </>
          )}
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 transition-all duration-300">
          <DesafioForm onCreated={() => { load(); setIsFormOpen(false); }} />
        </div>
      )}

      {desafios.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-medium text-gray-700 mb-2">No hay desafíos creados</h3>
          <p className="text-gray-500">Comienza creando tu primer desafío</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {desafios.map((d) => (
            <DesafioItem key={d.id_desafio} desafio={d} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}