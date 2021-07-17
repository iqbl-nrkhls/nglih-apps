class Hero extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
      <picture>
        <source type="image/webp" srcset="./images/heros/hero-image_1-small.webp" media="(max-width: 600px)">
        <source type="image/webp" srcset="./images/heros/hero-image_1-large.webp" media="(min-width: 600px)">
        <source type="image/jpg" srcset="./images/heros/hero-image_1-small.jpg" media="(max-width: 600px)">
        <source type="image/jpg" srcset="./images/heros/hero-image_1-large.jpg" media="(min-width: 600px)">
        <img class="hero__img lazyload" src="./images/heros/hero-image_1-small.jpg" alt="cooking">
      </picture>
      <div class="hero__text">
        <h1 translate="no">Nglih<br>Apps</h1>
        <p class="hero__description">We know the best food for you</p>
      </div>
    </section>
    `;
  }
}

export default Hero;
