import HamburgerIconChanger from './hamburger-icon-changer';

const DrawerInitiator = {
  showMenu: false,

  init({
    hamburgerButton,
    menuDrawer,
    mainContent,
    navLinks,
  }) {
    hamburgerButton.addEventListener('click', (event) => {
      if (this.showMenu) {
        this._closeDrawer(event, menuDrawer);
        this._removeTabindex(event, navLinks);
        HamburgerIconChanger._listIcon(hamburgerButton);
      } else {
        this._openDrawer(event, menuDrawer);
        this._addTabindex(event, navLinks);
        HamburgerIconChanger._closeIcon(hamburgerButton);
      }
    });

    mainContent.addEventListener('click', (event) => {
      this._closeDrawer(event, menuDrawer);
      this._removeTabindex(event, navLinks);
      HamburgerIconChanger._listIcon(hamburgerButton);
    });

    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (event) => {
        this._closeDrawer(event, menuDrawer);
        this._removeTabindex(event, navLinks);
        HamburgerIconChanger._listIcon(hamburgerButton);
      });
    });
  },

  _openDrawer(event, menuDrawer) {
    event.stopPropagation();
    menuDrawer.classList.add('show');
    this.showMenu = true;
  },

  _closeDrawer(event, menuDrawer) {
    event.stopPropagation();
    menuDrawer.classList.remove('show');
    this.showMenu = false;
  },

  _addTabindex(event, navLinks) {
    event.stopPropagation();
    navLinks.forEach((link) => link.setAttribute('tabindex', '0'));
  },

  _removeTabindex(event, navLinks) {
    event.stopPropagation();
    navLinks.forEach((link) => link.setAttribute('tabindex', '-1'));
  },
};

export default DrawerInitiator;
