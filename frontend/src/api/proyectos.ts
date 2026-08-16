import { authHeaders, BASE_URL } from "./config";

export interface ProjectInput {
  titulo: string;
  descripcion: string;
  estado?: string;
  fecha_inicio?: string;
}

export async function getProjects() {
  const res = await fetch(`${BASE_URL}/api/proyectos`, {
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Error al obtener proyectos");
  return res.json();
}

export async function createProject(data: ProjectInput) {
  const res = await fetch(`${BASE_URL}/api/proyectos`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error al crear proyecto");
  return res.json();
}
