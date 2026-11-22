// Configuration for Old Website dedicated PWA installation URL
// Override via VITE_OLD_WEBSITE_URL in .env if running on a custom domain or staging port
export const OLD_WEBSITE_URL =
  import.meta.env.VITE_OLD_WEBSITE_URL ||
  (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:5173'
    : 'https://helpu.vercel.app');

export const INSTALL_APP_URL = `${OLD_WEBSITE_URL}/install-app`;

export const redirectToInstallPage = () => {
  if (typeof window !== 'undefined') {
    window.location.href = INSTALL_APP_URL;
  }
};
