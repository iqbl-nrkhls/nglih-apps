class Notif extends HTMLElement {
  static get observedAttributes() {
    return ['message', 'color'];
  }

  constructor() {
    super();

    this._render();
  }

  attributeChangedCallback() {
    const message = this.getAttribute('message');
    const color = this.getAttribute('color');

    if (message) {
      this._renderMessage(message, color);
      setTimeout(() => {
        this._resetNotif();
      }, 10000);
    }
  }

  _render() {
    this.innerHTML = `
    <section class="notif">
      <p class="notif__message"></p>
    </section>
    `;
  }

  _renderMessage(message, color) {
    this.querySelector('.notif').classList.add('show');
    this.querySelector('.notif').classList.add(color);
    this.querySelector('.notif__message').innerHTML = message;
  }

  _resetNotif() {
    this.querySelector('.notif').className = 'notif';
    this.removeAttribute('message');
    this.removeAttribute('color');
  }
}

export default Notif;
