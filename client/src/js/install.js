const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // event.preventDefault();
  window.deferredPrompt = event;
  butInstall.removeAttribute('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const { outcome } = await window.deferredPrompt.userChoice;
  console.log(`User response to the install prompt: ${outcome}`);

  if (!window.deferredPrompt) {
    return;
  }

  window.deferredPrompt.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App install success');
  window.deferredPrompt = null;
});
