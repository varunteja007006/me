"use client";

import { useEffect } from "react";

export default function PWARegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
          // console.log('Service Worker registered');
        })
        .catch(() => {
          // registration failed
        });
    }

    // prompt handling for beforeinstallprompt
    let deferredPrompt: any;
    function onBeforeInstallPrompt(e: any) {
      e.preventDefault();
      deferredPrompt = e;
      // you could show a custom install UI here
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt as EventListener);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt as EventListener);
    };
  }, []);

  return null;
}
