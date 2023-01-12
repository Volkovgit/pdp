export class author extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    setTimeout(() => {
      const textContentFromPage = this.innerHTML;
      const imageUrl = this.getAttribute('src')
      this.innerHTML = "";
      
      const wrapper = this.createWrapperElement(textContentFromPage,imageUrl);
      const style = this.createStyleElement();

      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot = this.appendChildsToElement(shadowRoot,[style,wrapper]);
    });
  }

  appendChildsToElement(element,childs){
    childs.forEach(child=>{
      element.appendChild(child)
    })
    return element
  }


  createStyleElement(){
    const style = document.createElement("link");
    style.setAttribute('rel','stylesheet');
    style.setAttribute('href','./components/author/author.css');
    return style;
  }

  createWrapperElement(textContentFromPage,imageUrl) {
    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    const description = this.createDescriptionElement(textContentFromPage);
    const image = this.createImageElement(imageUrl);
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
