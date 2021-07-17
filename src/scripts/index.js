import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';

import App from './views/app';
import swRegister from './utils/sw-register';
import skipToContent from './utils/skip-to-content';

const app = new App({
  mainContent: document.querySelector('#mainContent'),
  notif: 'notif-panel',
  navbarTag: 'nav-bar',
  footbarTag: 'foot-bar',
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  skipToContent();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
