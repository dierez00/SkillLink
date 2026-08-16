import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../ui/Input";
import { BASE_URL } from "../../../api/config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/recuperar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el correo de recuperación");
      }

      setMessage("¡Hemos enviado instrucciones a tu correo!");
      setError("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al enviar correo de recuperación");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-white/45 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Recuperar Contraseña
              </h1>
              <p className="text-gray-600">
                Ingresa tu correo y te enviaremos instrucciones para restablecer tu contraseña.
              </p>
            </div>

            {message && (
              <div className="text-green-600 text-sm text-center mb-4">
                {message}
              </div>
            )}

            {error && (
              <div className="text-red-600 text-sm text-center mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="Correo electrónico"
                type="email"
                placeholder="tuemail@ejemplo.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              >
                Enviar instrucciones
              </button>
            </form>
          </div>

          <div className="bg-gray-50 px-8 py-6 rounded-b-2xl text-center">
            <Link
              to="/login"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Volver a iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
