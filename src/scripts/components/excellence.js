class Excellence extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="excellence">
        <div class="excellence__item">
          <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
            <path class="st0" d="M6.5,13.5c-2.6-2.6-2.6-6.7,0-9.3l11.1,11.1l3.7,3.7l5.7,5.7c1,1,1,2.5,0,3.5l0,0c-1,1-2.8,1-3.7-0.2l-4.1-5.1
            c-1-1.3-2.8-1.7-4.4-1.1l0,0L6.5,13.5z"/>
            <line class="st0" x1="21.3" y1="12.1" x2="26.7" y2="6.7"/>
            <path class="st0" d="M19.1,16.8c0.4-0.1,0.7-0.1,1.1-0.2c1.3-0.1,2.8-0.8,4.3-2.3l4.9-4.9"/>
            <path class="st0" d="M12.3,19.3L5.3,25c-1.1,0.8-1.2,2.4-0.2,3.3c1,1,2.5,0.8,3.3-0.2l5.7-7.1"/>
            <path class="st0" d="M24,4L19,8.9c-1.5,1.5-2.3,3-2.3,4.3c0,0.4-0.1,0.7-0.2,1.1"/>
          </svg><br>
          <strong>Delicious</strong>
        </div>
        <div class="excellence__item">
          <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
            <path class="st0" d="M3,25l2.6-4.2c1.5-2.3,4-3.8,6.8-3.8H19v0c0,2.2-1.8,4-4,4h-2"/>
            <path class="st0" d="M15,21h8l1.2-1.6c1.1-1.5,2.9-2.4,4.8-2.4h0l-2.7,4.8c-1.4,2.6-4.2,4.2-7.1,4.2h0c-4.7,0-9.3,1.4-13.2,4l0,0"/>
            <path class="st0" d="M20,9c0,2.2-1.8,4-4,4s-4-1.8-4-4c0-3,4-7,4-7S20,6,20,9z"/>
          </svg><br>
          <strong>Hygienic</strong>
        </div>
        <div class="excellence__item">
          <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
            <path class="st0" d="M27,7L27,7c-2.6-2.7-6.9-2.7-9.5,0l-1.3,1.4c-0.1,0.1-0.4,0.1-0.5,0L14.4,7C11.8,4.3,7.6,4.3,5,7l0,0
            c-2.6,2.7-2.6,7.1,0,9.8l1.6,1.6l9.2,9.5c0.1,0.1,0.4,0.1,0.5,0l9.2-9.5l1.6-1.6C29.7,14.1,29.7,9.7,27,7z"/>
            <polyline class="st0" points="9,15 12,15 14,13 16,17 18,12 20,15 23,15 "/>
          </svg><br>
          <strong>Healthy</strong>
        </div>
      </section>
    `;
  }
}

export default Excellence;
