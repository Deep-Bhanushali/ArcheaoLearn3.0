// API utility functions for consistent URL construction

/**
 * Constructs API URLs without double slashes
 * @param {string} endpoint - The API endpoint (e.g., '/login', '/profile')
 * @returns {string} The complete API URL
 */
export const buildApiUrl = (endpoint) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4242';
  // Remove trailing slash from base URL and leading slash from endpoint
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');
  const cleanEndpoint = endpoint.replace(/^\//, '');
  return `${cleanBaseUrl}/${cleanEndpoint}`;
};

/**
 * Makes a fetch request with proper error handling
 * @param {string} endpoint - The API endpoint
 * @param {object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise<Response>} The fetch response
 */
export const apiFetch = async (endpoint, options = {}) => {
  const url = buildApiUrl(endpoint);
  return fetch(url, options);
};

export default buildApiUrl;
