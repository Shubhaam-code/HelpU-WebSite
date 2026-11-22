import { useState } from 'react';

export const HELPU_PWA_TARGET_URL = 'https://help-u-kohl.vercel.app/';

export function usePwaInstall() {
  const [toastMessage, setToastMessage] = useState(null);

  const triggerPwaInstall = () => {
    // Open the official HelpU Web App URL directly in the browser
    window.open(HELPU_PWA_TARGET_URL, '_blank', 'noopener,noreferrer');
    setToastMessage('HelpU App khul raha hai! Wahan Chrome menu (⋮) me "Install app" dabayein taaki bina kisi browser bar ke pure native app install ho!');
    setTimeout(() => setToastMessage(null), 6500);
    return { success: true, url: HELPU_PWA_TARGET_URL };
  };

  return { triggerPwaInstall, toastMessage, setToastMessage, pwaUrl: HELPU_PWA_TARGET_URL };
}
