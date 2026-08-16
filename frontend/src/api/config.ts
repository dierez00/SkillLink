export const BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:8081").replace(/\/$/, "");

export function authHeaders(): HeadersInit {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}
