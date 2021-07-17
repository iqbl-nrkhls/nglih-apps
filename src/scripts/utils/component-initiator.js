const ComponentInitiator = {
  async init({ tagName, component, data }) {
    this._tagName = tagName;
    this._component = component;
    this._data = data;

    await this._render();
  },

  alreadyDefined(tagName) {
    if (customElements.get(tagName)) {
      return true;
    }
    return false;
  },

  async _render() {
    if (!this.alreadyDefined(this._tagName)) {
      customElements.define(this._tagName, this._component);
    }
    if (this._data) {
      await document.querySelector(this._tagName).setData(this._data);
    }
  },
};

export default ComponentInitiator;
