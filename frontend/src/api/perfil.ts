import { authHeaders, BASE_URL } from "./config";

export interface Profile {
  nombre: string;
  descripcion: string;
  experiencia: string;
  ubicacion: string;
  redesSociales: string;
  habilidades: unknown[];
}

export type ProfileUpdate = Pick<Profile, "descripcion" | "experiencia" | "ubicacion" | "redesSociales">;

export async function getMyProfile() {
  const res = await fetch(`${BASE_URL}/api/perfil/mi-cuenta`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Error al obtener perfil");
  return res.json();
}

export async function updateProfile(data: ProfileUpdate) {
  const res = await fetch(`${BASE_URL}/api/perfil/actualizar`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al actualizar perfil");
  return res.json();
}
