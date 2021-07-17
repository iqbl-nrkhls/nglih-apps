const HamburgerIconChanger = {
  _closeIcon(hamburgerButton) {
    hamburgerButton.innerHTML = '<i class="fa fa-times"></i>';
    hamburgerButton.classList.add('show');
  },

  _listIcon(hamburgerButton) {
    hamburgerButton.innerHTML = '<i class="fa fa-bars"></i>';
    hamburgerButton.classList.remove('show');
  },
};

export default HamburgerIconChanger;
