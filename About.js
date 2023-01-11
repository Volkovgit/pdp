class Author extends HTMLElement {
  styles;
  constructor() {
    super();
  }

  connectedCallback() {
    setTimeout(() => {
      const textContentFromPage = this.innerHTML;
      this.innerHTML = "";
      const wrapper = this.createWrapperElement(textContentFromPage);

      let shadowRoot = this.attachShadow({ mode: "open" });

      const style = document.createElement("link");
      style.setAttribute('rel','stylesheet');
      style.setAttribute('href','author.css')
      console.log(style);
      // style.textContent = ".wrapper {background-color: red;}";
      shadowRoot = this.appendChildsToElement(shadowRoot,[style,wrapper]);
    });
  }

  appendChildsToElement(element,childs){
    childs.forEach(child=>{
      element.appendChild(child)
    })
    return element
  }

  createWrapperElement(textContentFromPage) {
    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    const description = this.createDescriptionElement(textContentFromPage);
    const image = this.createImageElement("./img/Elisabeth.gif");
    wrapper = this.appendChildsToElement(wrapper,[image,description]);

    return wrapper;
  }

  createImageElement(src) {
    const imageElementContainer = document.createElement("div");
    const image = document.createElement("img");
    image.setAttribute("src", src);
    imageElementContainer.appendChild(image);
    return imageElementContainer;
  }

  createDescriptionElement(text) {
    const descriptionElementContainer = document.createElement("div");
    const paragraphWithText = document.createElement("p");
    paragraphWithText.innerHTML = text;
    descriptionElementContainer.appendChild(paragraphWithText);
    return descriptionElementContainer;
  }
}

customElements.define("author-component", Author);
