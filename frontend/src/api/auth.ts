export interface LoginData {
  email: string;
  contrasena: string;
}

export async function loginUser({ email, contrasena }: LoginData) {

  const response = await fetch(`${BASE_URL}/api/ingresar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, contrasena }),
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas");
  }

  return response.json();
}

export interface RegisterData {
  nombre: string;
  email: string;
  contrasena: string;
  rol: "APRENDIZ" | "DOCENTE";
  nickname: string;
}

export async function registerUser(data: RegisterData) {
  const response = await fetch(`${BASE_URL}/api/registro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const text = await response.text();
  let responseData: { message?: string } = {};
  try {
    responseData = text ? JSON.parse(text) : {};
  } catch {
    responseData = {};
  }

  if (!response.ok) {
    throw new Error(responseData.message || "Error en el registro");
  }

  return responseData;
}
import { BASE_URL } from "./config";
