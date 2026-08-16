import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "../../ui/Input";
import { BASE_URL } from "../../../api/config";

const ResetPassword = () => {
  const [params] = useSearchParams();
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const token = params.get("token");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nueva !== confirmar) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/recuperar/reset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, nueva }),
      });

      if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg || "Error al restablecer la contraseña");
      }

      setMensaje("¡Tu contraseña ha sido actualizada con éxito!");
      setError("");
      setNueva("");
      setConfirmar("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Algo salió mal");
      setMensaje("");
    }
  };

  useEffect(() => {
    if (!token) {
      setError("Token no válido o faltante");
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-white/45 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Nueva Contraseña
              </h1>
              <p className="text-gray-600">
                Ingresa tu nueva contraseña para recuperar el acceso a tu cuenta.
              </p>
            </div>

            {mensaje && (
              <div className="text-green-600 text-sm text-center mb-4">
                {mensaje}
              </div>
            )}

            {error && (
              <div className="text-red-600 text-sm text-center mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="Contraseña nueva"
                type="password"
                required
                value={nueva}
                onChange={(e) => setNueva(e.target.value)}
              />
              <Input
                name="Confirmar contraseña"
                type="password"
                required
                value={confirmar}
                onChange={(e) => setConfirmar(e.target.value)}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              >
                Restablecer Contraseña
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
