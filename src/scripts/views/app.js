import Notif from '../components/notif';
import Navbar from '../components/nav';
import Footbar from '../components/footbar';

import UrlParser from '../routes/url-parser';
import Routes from '../routes/routes';

class App {
  constructor({
    mainContent,
    notif,
    navbarTag,
    footbarTag,
  }) {
    this._mainContent = mainContent;
    this._notif = notif;
    this._navbarTag = navbarTag;
    this._footbarTag = footbarTag;

    this._initialAppShell();
  }

  _initialAppShell() {
    customElements.define(this._notif, Notif);
    customElements.define(this._navbarTag, Navbar);
    customElements.define(this._footbarTag, Footbar);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Routes[url];
    try {
      this._mainContent.innerHTML = await page.render();
      await page.afterRender();
    } catch {
      this._mainContent.innerHTML = await Routes['/404'].render();
    }
  }
}

export default App;
