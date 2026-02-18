/**
 * Injects Cloudinary transformation parameters into a URL.
 * @param url The original Cloudinary URL
 * @param width The desired width for the image
 * @returns Optimized URL string
 */
export const getOptimizedUrl = (url: string, width: number): string => {
  if (!url) return '';
  // f_auto: best format (AVIF/WebP)
  // q_auto: best compression
  // w_xxx: specific width
  // c_limit: don't upscale if the original is smaller
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width},c_limit/`);
};