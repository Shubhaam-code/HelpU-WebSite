// Configuration for Old Website dedicated PWA installation URL
// Override via VITE_OLD_WEBSITE_URL in .env if running on a custom domain or staging port
export const MAIN_APP_URL = 'https://help-u-kohl.vercel.app';
export const INSTALL_APP_URL = `${MAIN_APP_URL}/install-app`;

export const redirectToInstallPage = () => {
  if (typeof window !== 'undefined') {
    window.location.href = INSTALL_APP_URL;
  }
};
