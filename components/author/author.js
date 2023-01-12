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
      const style = this.createNewElementWithArguments("link",[{"rel":"stylesheet"},{'href':'./components/author/author.css'}]);

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

  createNewElementWithArguments(elementType,attributes=null){
    const element = document.createElement(elementType);
    if(attributes!=null){
      attributes.forEach((attr)=>{
        element.setAttribute(Object.keys(attr)[0],attr[Object.keys(attr)]);
      })
    }
    return element
  }


  createWrapperElement(textContentFromPage,imageUrl) {
    let wrapper = this.createNewElementWithArguments("div",[{"class":"wrapper"}]);
    const description = this.createDescriptionElement(textContentFromPage);
    const image = this.createImageElement(imageUrl);
    wrapper = this.appendChildsToElement(wrapper,[image,description]);

    return wrapper;
  }

  createImageElement(src) {
    const imageElementContainer = document.createElement("div");
    const image = this.createNewElementWithArguments("img",[{src}]);
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

