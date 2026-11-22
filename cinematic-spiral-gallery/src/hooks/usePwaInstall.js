import { useState, useEffect } from 'react';

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
      setToastMessage('HelpU PWA was successfully installed on your device!');
      setTimeout(() => setToastMessage(null), 4000);
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
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
      return { success: true, outcome: choiceResult.outcome };
    }

    // Platform-specific instructions when native prompt is not available
    const isIOS =
      typeof navigator !== 'undefined' &&
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !window.MSStream;

    if (isIOS) {
      setToastMessage('To install on iOS: Tap Share (⎋) in Safari, then tap "Add to Home Screen".');
      setTimeout(() => setToastMessage(null), 5500);
      return { success: false, platform: 'ios' };
    }

    if (isInstalled) {
      setToastMessage('HelpU is already installed on your device!');
      setTimeout(() => setToastMessage(null), 3500);
      return { success: true, installed: true };
    }

    // Chrome / Edge fallback
    setToastMessage('In your browser address bar or menu (⋮), tap "Install App" or "Add to Home Screen".');
    setTimeout(() => setToastMessage(null), 5000);
    return { success: false, fallback: true };
  };

  return { isInstallable, isInstalled, triggerPwaInstall, toastMessage, setToastMessage };
}
