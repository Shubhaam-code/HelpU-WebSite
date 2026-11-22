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
      setToastMessage('HelpU PWA installed successfully! Opening HelpU App...');
      setTimeout(() => {
        window.open(HELPU_PWA_TARGET_URL, '_blank', 'noopener,noreferrer');
        setToastMessage(null);
      }, 1500);
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
    // If native prompt is available for this origin, prompt first
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          setIsInstalled(true);
          setToastMessage('Installation started! Launching HelpU Progressive Web App...');
          setTimeout(() => {
            window.open(HELPU_PWA_TARGET_URL, '_blank', 'noopener,noreferrer');
            setToastMessage(null);
          }, 1200);
          setDeferredPrompt(null);
          return { success: true, outcome: choiceResult.outcome };
        }
      } catch (err) {
        console.warn('Install prompt error:', err);
      }
    }

    // Direct open to the actual HelpU Progressive Web App at https://help-u-kohl.vercel.app/
    window.open(HELPU_PWA_TARGET_URL, '_blank', 'noopener,noreferrer');
    setToastMessage('Opening HelpU Web App (help-u-kohl.vercel.app) — Tap "Install" or "Add to Home screen" in browser menu!');
    setTimeout(() => setToastMessage(null), 5000);
    return { success: true, url: HELPU_PWA_TARGET_URL };
  };

  return { isInstallable, isInstalled, triggerPwaInstall, toastMessage, setToastMessage, pwaUrl: HELPU_PWA_TARGET_URL };
}
