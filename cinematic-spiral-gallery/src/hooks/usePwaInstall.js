import { useState, useEffect } from 'react';

export const HELPU_APP_INSTALL_URL = 'https://help-u-kohl.vercel.app/install-app';

export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(false);
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

  const openInstallModal = () => {
    setIsModalOpen(true);
  };

  const closeInstallModal = () => {
    setIsModalOpen(false);
  };

  const executeInstall = async () => {
    setIsModalOpen(false);
    if (typeof window !== 'undefined') {
      window.location.href = HELPU_APP_INSTALL_URL;
    }
  };

  return {
    isInstallable,
    isInstalled,
    isModalOpen,
    openInstallModal,
    closeInstallModal,
    executeInstall,
    pwaUrl: HELPU_APP_INSTALL_URL
  };
}
