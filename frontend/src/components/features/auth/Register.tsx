import type { FormEvent } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../ui/Input";
import { registerUser, type RegisterData } from "../../../api/auth";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterData>({
    nombre: "",
    email: "",
    contrasena: "",
    rol: "APRENDIZ",
    nickname: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.contrasena) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    setIsLoading(true);

    try {
      await registerUser(formData);

      toast.success("¡Registro exitoso! Inicia sesión");
      navigate("/login");
    } catch (error) {
      console.error("Error en registro:", error);
      toast.error(
        error instanceof Error ? error.message : "Error en registro"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white/45 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Crea tu cuenta
              </h1>
              <p className="text-gray-600">
                Comienza tu experiencia con nosotros
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              <Input
                label="Nombre completo"
                name="nombre"
                type="text"
                placeholder="ej: Juan Pérez"
                required
                value={formData.nombre}
                onChange={handleChange}
              />

              <Input
                label="Correo electrónico"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                label="Contraseña"
                name="contrasena"
                type="password"
                required
                value={formData.contrasena}
                onChange={handleChange}
                minLength={8}
              />

              <Input
                label="Nombre de usuario"
                name="nickname"
                type="text"
                required
                value={formData.nickname}
                onChange={handleChange}
              />

              <label className="block text-sm text-gray-700">
                Rol
                <select
                  name="rol"
                  value={formData.rol}
                  onChange={handleChange}
                  className="mt-1 block w-full border p-2 rounded"
                  required
                >
                  <option value="APRENDIZ">Aprendiz</option>
                  <option value="DOCENTE">Docente</option>
                </select>
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Registrando..." : "Registrarse"}
              </button>
            </form>
          </div>

          <div className="bg-gray-50 px-8 py-6 rounded-b-2xl text-center">
            <p className="text-gray-600 text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
