const HeaderFaderInitiator = {
  init({ header }) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 5) {
        this._fadeIn(header);
      } else {
        this._fadeOut(header);
      }
    });
  },

  _fadeIn(header) {
    header.classList.add('show');
  },

  _fadeOut(header) {
    header.classList.remove('show');
  },
};

export default HeaderFaderInitiator;
