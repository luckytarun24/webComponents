class WebComponent extends HTMLElement {
  constructor() {
    super();
    const btn = document.createElement("button");
    btn.textContent = "Click me";
    btn.addEventListener("click", () => {
      console.log("I am custom web component")
    })
     
    btn.style.border= "2px solid yellow";
    btn.style.color="yellow";
    btn.style.background="black";
    btn.style.padding= "10px 20px";
    
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(btn)
  }

  connectedCallback(){
    // this.shadowRoot.append(this.btn) 
  }

}

customElements.define("custom-btn", WebComponent)