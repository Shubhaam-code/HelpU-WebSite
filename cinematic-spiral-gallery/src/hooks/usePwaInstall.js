import { useState, useEffect } from 'react';

export const HELPU_PWA_TARGET_URL = 'https://help-u-kohl.vercel.app/';

export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
      setToastMessage('HelpU App successfully installed! Launch it from your Home Screen for a pure full-screen app experience.');
      setTimeout(() => setToastMessage(null), 5000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    if (
      (typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches) ||
      (typeof window !== 'undefined' && window.navigator && window.navigator.standalone === true)
    ) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const triggerPwaInstall = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          setIsInstalled(true);
          setToastMessage('HelpU App installing to your Home Screen...');
          setDeferredPrompt(null);
          setTimeout(() => setToastMessage(null), 4000);
          return { success: true, outcome: choiceResult.outcome };
        }
      } catch (err) {
        console.warn('Install error:', err);
      }
    }

    const isIOS =
      typeof navigator !== 'undefined' &&
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !window.MSStream;

    if (isIOS) {
      setToastMessage('iOS par: Safari Share (⎋) icon dabayein aur "Add to Home Screen" choose karein!');
      setTimeout(() => setToastMessage(null), 6000);
      return { success: false, platform: 'ios' };
    }

    // Chrome/Android fallback if deferredPrompt hasn't fired yet
    setToastMessage('Chrome menu (⋮) me "Install app" / "Add to Home screen" par tap karein!');
    setTimeout(() => setToastMessage(null), 5000);
    return { success: false, fallback: true };
  };

  return { isInstallable, isInstalled, triggerPwaInstall, toastMessage, setToastMessage, pwaUrl: HELPU_PWA_TARGET_URL };
}
