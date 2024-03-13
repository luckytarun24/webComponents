class CustomButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const btn = document.createElement('button');
    btn.innerText = 'click me';
    shadow.append(btn);
  }

  // connectedCallback() {
  //   this.shadowRoot.innerHTML = 'tarun';
  // }
}

customElements.define('custom-btn', CustomButton);
