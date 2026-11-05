// src/utils/paths.ts

/**
 * Genera una URL absoluta respetando el `base` configurado en astro.config.mjs (ej: GitHub Pages)
 */
export function url(path: string): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.replace(/\/$/, '');
  
  if (!path || path === '/') {
    return rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  }
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

