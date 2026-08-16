
import { authHeaders, BASE_URL } from "./config";

const API_URL = `${BASE_URL}/api/desafios`;

export async function getDesafios() {
  const response = await fetch(API_URL, { headers: authHeaders() });
  if (!response.ok) throw new Error("Error al obtener desafíos");
  return await response.json();
}


export async function createDesafio(data: {
  titulo: string;
  descripcion: string;
  dificultad: string;
  fecha_limite: string; 
  estado: string;       
}) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error al crear desafío");
  return await response.json();
}


export async function deleteDesafio(id: number) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!response.ok) throw new Error("Error al eliminar desafío");
  return true;
}
