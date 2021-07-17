import DrawerInitiator from '../utils/drawer-initiator';
import HeaderFaderInitiator from '../utils/header-fader-initiator';

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  connectedCallback() {
    DrawerInitiator.init({
      hamburgerButton: this.querySelector('#hamburger'),
      menuDrawer: this.querySelector('#drawer'),
      mainContent: document.querySelector('#mainContent'),
      navLinks: this.querySelectorAll('.nav__item a'),
    });

    HeaderFaderInitiator.init({
      header: this.querySelector('header'),
    });
  }

  render() {
    this.innerHTML = `
    <header class="header">
      <div class="wrapper">
        <h1 class="brand" translate="no">Nglih Apps</h1>
        <button id="hamburger" aria-label="menu button"><i class="fa fa-bars"></i></button>
        <nav id="drawer" class="nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#/">Home</a></li>
            <li class="nav__item"><a href="#/favorite">Favorite</a></li>
            <li class="nav__item"><a href="https://iqbal-nurkholis.web.app/">About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
    `;
  }
}

export default Navbar;
