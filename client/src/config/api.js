/**
 * Centralized API configuration for Just Like Home Nursery
 * 
 * Supports:
 * - Monolith deployment: relative '/api/...'
 * - Decoupled deployment (e.g. Vercel frontend + Render/Railway backend):
 *   Set VITE_API_URL in environment variables (e.g. https://jlh-nursery-api.onrender.com)
 */

const rawApiUrl = (import.meta.env.VITE_API_URL || '').trim();
export const API_BASE_URL = rawApiUrl.replace(/\/+$/, '');

export const getApiUrl = (endpoint) => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
};

export default {
  API_BASE_URL,
  getApiUrl,
};
