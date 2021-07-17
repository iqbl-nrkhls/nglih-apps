class Footbar extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>Copyright <span class="red">&copy;</span> 2021 - Nglih Apps</p>
    </footer>
    `;
  }
}

export default Footbar;
