import { useState } from "react";
import { updateProfile, type Profile } from "../../../api/perfil";

interface EditProfileFormProps {
  profile: Profile;
  onUpdated: (updatedProfile: Profile) => void;
}

export default function EditProfileForm({
  profile,
  onUpdated,
}: EditProfileFormProps) {
  const [descripcion, setDescripcion] = useState(profile.descripcion || "");
  const [experiencia, setExperiencia] = useState(profile.experiencia || "");
  const [ubicacion, setUbicacion] = useState(profile.ubicacion || "");
  const [redesSociales, setRedesSociales] = useState(profile.redesSociales || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const updated = await updateProfile({ descripcion, experiencia, ubicacion, redesSociales });
      onUpdated({ ...profile, ...updated });
    } catch (err) {
      console.error("Error actualizando perfil:", err);
      setError("Ocurrió un error al actualizar el perfil. Por favor intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            id="descripcion"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-1">
            Experiencia
          </label>
          <input
            id="experiencia"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            value={experiencia}
            onChange={(e) => setExperiencia(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
          <input id="ubicacion" className="w-full px-4 py-3 border border-gray-300 rounded-lg" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
        </div>

        <div>
          <label htmlFor="redesSociales" className="block text-sm font-medium text-gray-700 mb-1">Perfil profesional</label>
          <input id="redesSociales" className="w-full px-4 py-3 border border-gray-300 rounded-lg" value={redesSociales} onChange={(e) => setRedesSociales(e.target.value)} />
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 rounded-lg text-white font-medium transition-all ${isSubmitting 
            ? 'bg-indigo-400 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg'} flex items-center`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Guardando...
            </>
          ) : 'Guardar cambios'}
        </button>
      </div>
    </form>
  );
}
